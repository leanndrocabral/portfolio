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
            Tenho 20 anos e sou um programador Full Stack Júnior, moro em São Bento do Sapucaí - SP. Desde de cedo envolvido com a tecnologia e sempre buscando melhorar, aprender e manter boas práticas sobre esse universo da programação. Atualmente aprendendo Angular e posteriormente pretendo aprender C#.
          </AboutParagraph>
        </AboutContainerContent>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default About;
