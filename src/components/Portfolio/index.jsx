import React from "react";
import {
  FirstText,
  PortfolioContainer,
  PortfolioItem,
  PortfolioItemCta,
  PortfolioItemImage,
  PortfolioItemImageContainer,
  PortfolioItemLink,
  PortfolioItemLinkTwo,
  PortfolioTitle,
  PortfolioTechnologies,
  PortfolioWrapper,
  SecondText,
} from "./styles";
import Image01 from "../../assets/img/lista-de-contatos.png";
import Image02 from "../../assets/img/kenzie-hub.png";
import Image03 from "../../assets/img/hamburgueria-da-kenzie.png";
import Image04 from "../../assets/img/discord.jpg";

import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const data = [
  {
    id: 1,
    image: Image01,
    title: "Lista de Contatos",
    description:
      "Aplicação web desenvolvida com o intuito de criar uma lista telefônica e registrar contatos.",
    link: "https://listadeconntatos.vercel.app/",
    github: "https://github.com/leanndrocabral/projeto-fullstack/",
  },
  {
    id: 2,
    image: Image02,
    title: "Kenzie Hub",
    description:
      "Aplicação web desenvolvida com o intuito de registrar e listar tecnologias web.",
    link: "https://kennziehub.vercel.app/",
    github:
      "https://github.com/leanndrocabral/react-kenzie-hub/tree/kenziehub-typescript/cadastro-e-login/",
  },
  {
    id: 3,
    image: Image03,
    title: "Burguer Kenzie",
    description:
      "Aplicação web desenvolvida com o intuito de criar uma hamburgueria on-line.",
    link: "https://kennzieburger.vercel.app/",
    github:
      " https://github.com/leanndrocabral/react-hamburgueria-kenzie/tree/main/hamburgueria-kenzie/",
  },
  {
    id: 4,
    image: Image04,
    title: "Bee Bot",
    description:
      "Bot de Discord desenvolvido com o intuito de se divertir e com capacidade de reproduzir música nos canais de voz.",
    link: "https://discord.com/oauth2/authorize?client_id=1104815029540356136&permissions=8&scope=bot%20applications.commands",
    github:
      "https://github.com/leanndrocabral/bee-bot",
  },
];

const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <FirstText>Meus trabalhos</FirstText>
      <SecondText>Projetos</SecondText>

      <PortfolioContainer>
        {data.map((item) => (
          <PortfolioItem key={item.id}>
            <PortfolioItemImageContainer>
              <PortfolioItemImage src={item.image} alt={item.title} />
            </PortfolioItemImageContainer>
            <PortfolioTitle>{item.title}</PortfolioTitle>
            <PortfolioTechnologies>{item.description}</PortfolioTechnologies>
            <PortfolioItemCta>
              <PortfolioItemLink href={item.github} target="_blank">
                <FaGithub />
              </PortfolioItemLink>
              <PortfolioItemLinkTwo href={item.link} target="_blank">
                <HiOutlineExternalLink />
              </PortfolioItemLinkTwo>
            </PortfolioItemCta>
          </PortfolioItem>
        ))}
      </PortfolioContainer>
    </PortfolioWrapper>
  );
};

export default Portfolio;
