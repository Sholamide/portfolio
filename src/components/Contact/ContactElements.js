import styled from "styled-components";
export const ContactContainer = styled.div`
  background: #fff;

  @media screen and (max-width: 768px) {
    padding: 8px 24px;
  }

  @media screen and (max-width: 460px) {
    padding: 8px 24px;
  }
`;

export const ContactWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  max-width: 1100px;
  height: auto;
  flex-direction: column;
  margin: auto;
  @media screen and (max-width: 768px) {
    padding: 8px 24px;
  }

  @media screen and (max-width: 460px) {
    padding: 8px 24px;
  }
`;

export const ContactHeader = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #000;
  background: -webkit-linear-gradient(#283747, #000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-transform: uppercase;
  justify-content: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ContactText = styled.p`
  font-size: 18px;
  color: #000;
  padding: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 460px) {
    font-size: 18px;
  }
`;

export const ContactInfoWrapper = styled.div`
  display: flex;
  margin: auto;
`;

export const ContactInfoNumber = styled.h1`
  font-weight: bold;
  font-size: 14px;
  color: #f3f3f3f3;
  display: flex;
  text-text-decoration: none;

  background: #283747;
  padding: 8px 24px;
  border-radius: 5px;
  align-items: center;
  box-shadow: 0 0 19px #719ece;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  max-width: 1100px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 460px) {
    flex-direction: column;
  }
`;

export const ResponseMessage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
`;
export const NameInputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 14px;
`;

export const EmailInputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 14px;
`;
export const NameInput = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  background: #fff;
  color: #000;
  font-size: 14px;
  padding: 10px;
  width: 200px;
  margin: 10px;
  border: none;
  border-bottom: 1px solid #283747;
  ::placeholder {
    color: #283747;
    text-transform: uppercase;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 10px #719ece;
  }
`;

export const EmailInput = styled.input.attrs((props) => ({
  type: "email",
  size: props.size || "1em",
}))`
  background: #fff;
  color: #000;
  font-size: 14px;
  padding: 10px;
  margin: 10px;
  width: 200px;
  border: none;
  border-bottom: 1px solid #283747;
  ::placeholder {
    color: #283747;
    text-transform: uppercase;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 10px #719ece;
  }
`;

export const MessageInput = styled.textarea.attrs((props) => ({
  size: props.size || "1em",
}))`
  background: #fff;
  color: #000;
  font-size: 12px;
  margin: 10px;
  width: 500px;
  border: none;
  margin-top: 10px;
  padding: 10px;
  height: 100px;
  ::placeholder {
    color: #283747;
    font-weight: bold;
  }
  &:focus {
    outline: none !important;
    border: 1px solid #283747;
    box-shadow: 0 0 10px #719ece;
    padding: 20px;
  }
  @media screen and (max-width: 768px) {
    width: 300px;
    justify-content: center;
  }
`;

export const SendButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 24px;
  margin: 10px;
`;

export const SendButton = styled.button`
  padding: 10px;
  background: #800080;
  border: none;
  width: auto;
  color: #f3f3f3f3;
  border-radius: 5px;
  font-size: 18px;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 19px #719ece;

  &:hover {
    background: #000;
    color: #f3f3f3;
    font-weight: bold;
  }
`;
