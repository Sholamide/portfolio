import React from "react";
import {
  CVBuilderContainer,
  CVBuilderHeader,
  CVBuilderWrapper,
} from "./CVComponents";
import Typical from "react-typical";

export default function CV() {
  return (
    <CVBuilderContainer>
      <CVBuilderWrapper>
        <CVBuilderHeader>
          <Typical
            steps={["Hello", 1000, "Hello world!", 500]}
            loop={Infinity}
            wrapper="p"
          />{" "}
        </CVBuilderHeader>
      </CVBuilderWrapper>
    </CVBuilderContainer>
  );
}
