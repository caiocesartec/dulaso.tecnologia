import { useEffect, useState } from "react";
import "./Header.css";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const [activeItem, setActiveItem] = useState("");
  const [shouldObserve, setShouldObserve] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 1024;
      setIsMobile(isNowMobile);
      if (!isNowMobile) setIsNavOpen(false); // fecha o menu ao ampliar
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToHeading = (text: string) => {
    setActiveItem(text);
    const headings = document.querySelectorAll("h2");
    const target = Array.from(headings).find(
      (h2) => h2.textContent?.trim().toLowerCase() === text.toLowerCase()
    );

    if (target) {
      const offset = window.innerHeight * 0.3;
      const topOffset =
        target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
      if (isMobile) setIsNavOpen(false); // fecha o menu após clique
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) {
        setShouldObserve(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!shouldObserve) return;

    const sections = [
      { id: "sectionAbout", label: "Sobre" },
      { id: "goodsSection", label: "Valores" },
      { id: "servicesSection", label: "Serviços" },
      { id: "mySwiperExperts", label: "Especialistas" },
      { id: "projectsDone", label: "Clientes" },
    ];

    const handleScroll = () => {
      if (window.scrollY < window.innerHeight * 0.3) {
        setActiveItem("");
        return;
      }

      const viewportMiddle = window.innerHeight / 2;
      let closestSection = null;
      let closestDistance = Infinity;

      for (const section of sections) {
        const el = document.querySelector(`.${section.id}`);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const elementMiddle = rect.top + rect.height / 2;
        const distanceToCenter = Math.abs(elementMiddle - viewportMiddle);

        if (
          distanceToCenter < closestDistance &&
          distanceToCenter < rect.height / 2
        ) {
          closestDistance = distanceToCenter;
          closestSection = section.label;
        }
      }

      if (closestSection) {
        setActiveItem(closestSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldObserve]);

  const openWhatsApp = () => {
    window.open("https://wa.me/5511981952008", "_blank");
  };
  const openInstagram = () => {
    window.open("https://www.instagram.com/dulaso.tecnologia/", "_blank");
  };
  return (
    <header className="headerPrincipal">
      <section className="headerActionButtons">
        {isMobile && (
          <>
            <FontAwesomeIcon
              icon={faWhatsapp}
              onClick={openWhatsApp}
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                zIndex: 9000,
                color: "#04f46b",
                height: "60px",
                fontSize: "24px",
                width: "34px",
                marginBottom: "7px",
                marginLeft: "27px",
              }}
            />

            <FontAwesomeIcon
              icon={faInstagram}
              onClick={openInstagram}
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                zIndex: 9000,
                color: "#04f46b",
                height: "60px",
                fontSize: "24px",
                width: "34px",
                marginBottom: "7px",
                marginLeft: "27px",
              }}
            />

            <button
              onClick={() => setIsNavOpen((prev) => !prev)}
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                zIndex: 9000,
                marginLeft: "23px",
                marginRight: "16px",
                height: "60px",
              }}
              aria-label="Menu"
            >
              <FontAwesomeIcon
                icon={isNavOpen ? faXmark : faBars}
                style={{ color: "#04F46B", fontSize: "34px" }}
              />
            </button>
          </>
        )}
      </section>

      <nav className={`navMenu ${isNavOpen || !isMobile ? "open" : ""}`}>
        <ul>
          <li>
            <p>
              <strong>-</strong>
            </p>
          </li>
          <li>
            <p
              onClick={() => scrollToHeading("Sobre")}
              className={`navButton ${activeItem === "Sobre" ? "active" : ""}`}
            >
              Sobre
            </p>
          </li>
          <li>
            <p>
              <strong>-</strong>
            </p>
          </li>
          <li>
            <p
              onClick={() => scrollToHeading("Valores")}
              className={`navButton ${
                activeItem === "Valores" ? "active" : ""
              }`}
            >
              Valores
            </p>
          </li>
          <li>
            <p>
              <strong>-</strong>
            </p>
          </li>
          <li>
            <p
              onClick={() => scrollToHeading("Serviços")}
              className={`navButton ${
                activeItem === "Serviços" ? "active" : ""
              }`}
            >
              Serviços
            </p>
          </li>
          <li>
            <p>
              <strong>-</strong>
            </p>
          </li>
          <li>
            <p
              onClick={() => scrollToHeading("Especialistas")}
              className={`navButton ${
                activeItem === "Especialistas" ? "active" : ""
              }`}
            >
              Especialistas
            </p>
          </li>
          <li>
            <p>
              <strong>-</strong>
            </p>
          </li>
          <li>
            <p
              onClick={() => scrollToHeading("Clientes")}
              className={`navButton ${
                activeItem === "Clientes" ? "active" : ""
              }`}
            >
              Clientes
            </p>
          </li>
          <li>
            <p>
              <strong>-</strong>
            </p>
          </li>
        </ul>
      </nav>
    </header>
  );
}
