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
import { data } from "../../database/database";

import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

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
              {item.link && (
                <PortfolioItemLinkTwo href={item.link} target="_blank">
                  <HiOutlineExternalLink />
                </PortfolioItemLinkTwo>
              )}
            </PortfolioItemCta>
          </PortfolioItem>
        ))}
      </PortfolioContainer>
    </PortfolioWrapper>
  );
};

export default Portfolio;
