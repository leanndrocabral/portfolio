import React from "react";
import {
  FooterLogo,
  FooterPermaLinkItem,
  FooterPermaLinkItemArchor,
  FooterPermalinks,
  FooterSocials,
  FooterSocialsLink,
  FooterWrapper,
  FooterCopyright,
  FooterCopyrightText,
} from "./styles";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogo href="#">Leandro Lourenço</FooterLogo>

      <FooterPermalinks>
        <FooterPermaLinkItem>
          <FooterPermaLinkItemArchor href="#">Início</FooterPermaLinkItemArchor>
        </FooterPermaLinkItem>
        <FooterPermaLinkItem>
          <FooterPermaLinkItemArchor href="#sobremim">
            Sobre Mim
          </FooterPermaLinkItemArchor>
        </FooterPermaLinkItem>
        <FooterPermaLinkItem>
          <FooterPermaLinkItemArchor href="#experiencia">
            Experiência
          </FooterPermaLinkItemArchor>
        </FooterPermaLinkItem>
        <FooterPermaLinkItem>
          <FooterPermaLinkItemArchor href="#projetos">
            Projetos
          </FooterPermaLinkItemArchor>
        </FooterPermaLinkItem>
        <FooterPermaLinkItem>
          <FooterPermaLinkItemArchor href="#contato">
            Contato
          </FooterPermaLinkItemArchor>
        </FooterPermaLinkItem>
      </FooterPermalinks>
      <FooterSocials>
        <FooterSocialsLink
          href="https://www.linkedin.com/in/leanndrocabral/"
          target="_blank"
        >
          <BsLinkedin />
        </FooterSocialsLink>

        <FooterSocialsLink
          href="https://github.com/leanndrocabral"
          target="_blank"
        >
          <FaGithub />
        </FooterSocialsLink>
      </FooterSocials>

      <FooterCopyright>
        <FooterCopyrightText></FooterCopyrightText>
      </FooterCopyright>
    </FooterWrapper>
  );
};

export default Footer;
