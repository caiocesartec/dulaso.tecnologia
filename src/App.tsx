import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header.tsx";
import DisplayCall from "./components/DisplayCall/DisplayCall.tsx";
import TitleBar from "./components/TitleBar/TitleBar.tsx";
import About from "./components/About/About.tsx";
import Goods from "./components/Goods/Goods.tsx";
import Services from "./components/Services/Services.tsx";

export default function App() {
  useEffect(() => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      const interval = setInterval(() => {
        window.location.reload();
      }, 60000); // 60.000 ms = 1 minuto

      return () => clearInterval(interval); // limpa o intervalo se o componente desmontar
    }
  }, []);

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
      <footer>
        <p>Meu Footer</p>
      </footer>
    </>
  );
}
