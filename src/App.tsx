import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header.tsx";
import DisplayCall from "./components/DisplayCall/DisplayCall.tsx";
import TitleBar from "./components/TitleBar/TitleBar.tsx";
import About from "./components/About/About.tsx";
import Goods from "./components/Goods/Goods.tsx";
import Services from "./components/Services/Services.tsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Experts from "./components/Experts/Experts.tsx";
import Projects from "./components/Projects/Projects.tsx";

export default function App() {
  return (
    <>
      <Header />
      <DisplayCall />

      <TitleBar titulo="Sobre" />
      <About />

      <TitleBar titulo="Valores" />
      <Goods />

      <TitleBar titulo="Serviços" />
      <Services />

      <TitleBar titulo="Especialistas" />
      <Experts />

      <TitleBar titulo="Clientes" />
      <Projects />

      <Footer />
      <ScrollToTop />
    </>
  );
}
