import React from "react";

import CV from "../../../../assets/files/cv.pdf";

import { Container, FirstLink, SecondLink } from "./styles";

const CallToAction = () => {
  return (
    <Container>
      <FirstLink href={CV} download>
        Currículo
      </FirstLink>
      <SecondLink href="#contato">Vamos Conversar</SecondLink>
    </Container>
  );
};

export default CallToAction;
