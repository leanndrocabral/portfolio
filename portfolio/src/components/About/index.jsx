import React from "react";
import {
  AboutContainer,
  AboutContainerContent,
  AboutContainerContentCard,
  AboutContainerContentCardFirstText,
  AboutContainerContentCards,
  AboutContainerContentCardSecondText,
  AboutContainerMe,
  AboutContainerMeImg,
  AboutParagraph,
  AboutWrapper,
  FirstText,
  SecondText,
} from "./styles";

import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

import Me from "../../assets/img/me-about.jpg";

const About = () => {
  return (
    <AboutWrapper>
      <FirstText>Me conheça</FirstText>
      <SecondText>Sobre Mim</SecondText>

      <AboutContainer>
        <AboutContainerMe>
          <AboutContainerMeImg src={Me} alt="About Image" />
        </AboutContainerMe>

        <AboutContainerContent>
          <AboutContainerContentCards>
            <AboutContainerContentCard>
              <FaAward className="about__icon" />
              <AboutContainerContentCardFirstText>
                Experiência
              </AboutContainerContentCardFirstText>
              <AboutContainerContentCardSecondText>
                1 ano
              </AboutContainerContentCardSecondText>
            </AboutContainerContentCard>

            <AboutContainerContentCard>
              <VscFolderLibrary className="about__icon" />
              <AboutContainerContentCardFirstText>
                Projetos
              </AboutContainerContentCardFirstText>
              <AboutContainerContentCardSecondText>
                8+ Concluído
              </AboutContainerContentCardSecondText>
            </AboutContainerContentCard>
          </AboutContainerContentCards>
          <AboutParagraph>
            Olá, eu sou o Leandro, tenho 20 anos e moro em São Bento do Sapucaí - SP.
            Sou desenvolvedor há 1 ano e estou sempre buscando aprender, melhorar e manter boas práticas.
            Tenho experiência em construção de API, desenvolvimento de projetos utilizando Django REST Framework, Python, Node.js, Angular, React, Typescript, entre outros.
          </AboutParagraph>
        </AboutContainerContent>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default About;
