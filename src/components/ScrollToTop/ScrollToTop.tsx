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

  return (
    <>
      {isScrollVisible && (
        <>
          <p className="barHeader"></p>
          <section>
            <button
              onClick={scrollToTop}
              style={{
                position: "fixed",
                bottom: "25px",
                right: "11px",
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
                  fontSize: "48px",
                  animation: "floatUpDown 1.5s ease-in-out infinite",
                }}
              />
            </button>
          </section>
        </>
      )}
    </>
  );
};

export default ScrollToTopButton;
