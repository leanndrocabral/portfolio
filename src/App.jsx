import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GlobalStyle from "./global/styles";
import Experience from "./components/Experience";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Slide } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer
        limit={1}
        hideProgressBar={true}
        pauseOnHover={false}
        autoClose={1200}
        closeButton={false}
        transition={Slide}
      />
      <GlobalStyle />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

