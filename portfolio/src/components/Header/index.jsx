import React from "react";

import CallToAction from "./components/CallToAction";

import {
  ContainerMyProfile,
  FirstText,
  HeaderContainer,
  HeaderWrapper,
  MyPhoto,
  SecondText,
  ThirdText,
} from "./styles";

import Me from "../../assets/img/me-avatar.png";
import Socials from "./components/Socials";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <FirstText>Olá, eu sou o</FirstText>
        <SecondText>Leandro Lourenço</SecondText>
        <ThirdText>Desenvolvedor Full Stack</ThirdText>

        <CallToAction />
        <Socials />

        <ContainerMyProfile>
          <MyPhoto src={Me} alt="Me" />
        </ContainerMyProfile>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
