import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import "./ScrollToTop.css";

const ScrollToTopButton = () => {
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsScrollVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/5599999999999", "_blank"); // Substitua pelo seu número
  };

  return (
    <>
      {/* Botão WhatsApp com balão "FALE CONOSCO" */}
      <div
        style={{
          position: "fixed",
          top: "80px",
          right: "30px",
          zIndex: 9000,
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {/* Botão WhatsApp */}
        <button
          onClick={openWhatsApp}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 9000,
          }}
          aria-label="WhatsApp"
          className="whatsapp-btn"
        >
          <img src="/logos/whatsapp.svg" className="logo" alt="Dulaso logo" />
        </button>
      </div>

      {/* Botão Scroll para o Topo */}
      {isScrollVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "90px", // acima do WhatsApp
            right: "30px",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 1000,
          }}
          aria-label="Voltar ao topo"
          className="scroll-to-top-btn"
        >
          <FontAwesomeIcon
            icon={faArrowCircleUp}
            style={{
              color: "white",
              fontSize: "54px",
              animation: "floatUpDown 1.5s ease-in-out infinite",
            }}
          />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
