import { useEffect } from "react";

import "./App.css";

function App() {
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
      <main className="mainImprovisado">
        <a href="/" target="_blank">
          <img
            src={"/logos/dulaso/logoDulaso.svg"}
            className="logo"
            alt="Dulaso logo"
          />
        </a>
      </main>
    </>
  );
}

export default App;
