import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header.tsx";
import DisplayCall from "./components/DisplayCall/DisplayCall.tsx";

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

      <footer>
        <p>Meu Footer</p>
      </footer>
    </>
  );
}
