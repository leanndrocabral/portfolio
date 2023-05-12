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

import Me from "../../assets/img/me-about.png";

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
            Olá, eu sou o Leandro tenho 20 anos e moro em São Bento do Sapucaí - SP. Sou um desenvolvedor com experiência em construção de API, desenvolvimento de projetos utilizando Django REST Framework, Python, Node.js, Angular, React, Typescript, vivências em utilização de Metodologia ágil (Scrum, Kanban, Trello), atuação em projetos como Desenvolvedor Frontend e Backend.
          </AboutParagraph>
        </AboutContainerContent>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default About;
