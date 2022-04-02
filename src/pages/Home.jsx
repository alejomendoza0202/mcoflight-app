import React, { useState } from "react";
import About from "../components/About";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
      <Navbar toggle={toggle}></Navbar>
      <Header></Header>
      <About></About>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default Home;
