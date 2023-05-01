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

import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const data = [
  {
    id: 1,
    image: Image01,
    title: "Lista de Contatos",
    technologies:
      "Next.js | Chakra UI | Prisma | TypeScript | Axios | Zod | React-Hook-Form",
    vercel: "https://listadeconntatos.vercel.app/",
    github: "https://github.com/leanndrocabral/projeto-fullstack/",
  },
  {
    id: 2,
    image: Image02,
    title: "Kenzie Hub",
    technologies:
      "React | Styled-Components | TypeScript | Axios | Yup",
    vercel: "https://kennziehub.vercel.app/",
    github:
      "https://github.com/leanndrocabral/react-kenzie-hub/tree/kenziehub-typescript/cadastro-e-login/",
  },
  {
    id: 3,
    image: Image03,
    title: "Burguer Kenzie",
    technologies:
      "React | CSS | Axios",
    vercel: "https://kennzieburger.vercel.app/",
    github:
      " https://github.com/leanndrocabral/react-hamburgueria-kenzie/tree/main/hamburgueria-kenzie/",
  },
];

const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <FirstText>Meus trabalhos recentes</FirstText>
      <SecondText>Projetos</SecondText>

      <PortfolioContainer>
        {data.map((item) => (
          <PortfolioItem key={item.id}>
            <PortfolioItemImageContainer>
              <PortfolioItemImage src={item.image} alt={item.title} />
            </PortfolioItemImageContainer>
            <PortfolioTitle>{item.title}</PortfolioTitle>
            <PortfolioTechnologies>{item.technologies}</PortfolioTechnologies>
            <PortfolioItemCta>
              <PortfolioItemLink href={item.github} target="_blank">
                <FaGithub />
              </PortfolioItemLink>
              <PortfolioItemLinkTwo href={item.vercel} target="_blank">
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
