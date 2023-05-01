import React, { useState } from "react";
import { Link, NavContainer } from "./styles";
import { AiOutlineHome, AiOutlineUser, AiOutlineAppstore } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";


const Nav = () => {
  const [activeNav, setActive] = useState("#");

  const handleSetActiveNav = (hash) => setActive(hash);

  return (
    <NavContainer>
      <Link
        className={activeNav === "#" ? "active" : ""}
        href="#"
        onClick={() => handleSetActiveNav("#")}
      >
        <AiOutlineHome />
      </Link>
      <Link
        className={activeNav === "#about" ? "active" : ""}
        href="#sobremim"
        onClick={() => handleSetActiveNav("#about")}
      >
        <AiOutlineUser />
      </Link>
      <Link
        className={activeNav === "#experience" ? "active" : ""}
        href="#experiencia"
        onClick={() => handleSetActiveNav("#experience")}
      >
        <BiBook />
      </Link>
      <Link
        className={activeNav === "#portfolio" ? "active" : ""}
        href="#projetos"
        onClick={() => handleSetActiveNav("#portfolio")}
      >
        <AiOutlineAppstore />
      </Link>
      <Link
        className={activeNav === "#contact" ? "active" : ""}
        href="#contato"
        onClick={() => handleSetActiveNav("#contact")}
      >
        <BiMessageSquareDetail />
      </Link>
    </NavContainer>
  );
};

export default Nav;
