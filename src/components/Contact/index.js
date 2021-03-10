import React, { useEffect, useState } from "react";
import {
  ContactContainer,
  ContactHeader,
  ContactWrapper,
  InputWrapper,
  NameInput,
  EmailInput,
  MessageInput,
  ContactText,
  ContactInfoWrapper,
  ContactInfoNumber,
  SendButtonWrapper,
  SendButton,
  ResponseMessage,
} from "./ContactElements";
import { IoMdCall } from "react-icons/io";
import { useForm, ValidationError } from "@formspree/react";
import axios from "axios";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("contactForm");

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  //input sate handling

  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  //Server handling
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      setInputs({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setServerState({ submitting: true });
    axios({
      method: "POST",
      url: "https://formspree.io/p/1625156458033184489/f/contactForm",
      data: inputs,
    })
      .then((r) => {
        handleServerResponse(true, "Your message has been sent!");
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error);
      });
  };
  if (state.succeeded) {
    console.log("Success");
  }

  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <ContactHeader>Contact me</ContactHeader>
        <ContactText>
          If you'ld like to work with me, maybe on a project or hire me, please
          don't hesisate to get in touch with me using the contact form below.{" "}
        </ContactText>

        <ContactInfoWrapper>
          <a style={{ textDecoration: "none" }} href="tel:+234-90-1900-8187">
            <ContactInfoNumber>
              <IoMdCall /> +2349019008187
            </ContactInfoNumber>
          </a>
        </ContactInfoWrapper>
        <form onSubmit={handleOnSubmit}>
          <InputWrapper>
            <NameInput
              placeholder="john doe"
              type="text"
              id="name"
              name="name"
              required
              onChange={handleOnChange}
              value={inputs.name}
            />
            <ValidationError prefix="Name" field="text" errors={state.errors} />
            <EmailInput
              placeholder="you@awesome.com"
              type="email"
              id="email"
              name="email"
              required
              onChange={handleOnChange}
              value={inputs.email}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </InputWrapper>
          <MessageInput
            id="message"
            name="message"
            required
            onChange={handleOnChange}
            value={inputs.message}
            placeholder="Enter message here..."
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <SendButtonWrapper>
            <SendButton type="submit" disabled={serverState.submitting}>
              Send
            </SendButton>
            {serverState.status && (
              <ResponseMessage
                className={!serverState.status.ok ? "errorMsg" : ""}
              >
                {serverState.status.msg}
              </ResponseMessage>
            )}
            {/* {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
              </p>
            )} */}
          </SendButtonWrapper>
        </form>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default ContactSection;
