import React from "react";
import { Container, Link } from "./styles";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <Container>
      <Link href="https://www.linkedin.com/in/leanndrocabral/" target="_blank">
        <BsLinkedin />
      </Link>
      <Link href="https://github.com/leanndrocabral" target="_blank">
        <FaGithub />
      </Link>
    </Container>
  );
};

export default Socials;
