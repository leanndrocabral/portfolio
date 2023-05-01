import React from "react";

import { Container, FirstLink, SecondLink } from "./styles";

const CallToAction = () => {
  return (
    <Container>
      <FirstLink href="https://docs.google.com/document/d/1hhsPnVFOdyY450SJ-dP9FWV1uLO5SVuX/edit?usp=sharing&ouid=104840170419325812938&rtpof=true&sd=true" target="_blank">
        Currículo
      </FirstLink>
      <SecondLink href="#contato">Vamos Conversar</SecondLink>
    </Container>
  );
};

export default CallToAction;
