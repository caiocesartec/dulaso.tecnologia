import { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [activeItem, setActiveItem] = useState("");
  const [shouldObserve, setShouldObserve] = useState(false);

  const scrollToHeading = (text: string) => {
    setActiveItem(text);
    const headings = document.querySelectorAll("h2");
    const target = Array.from(headings).find(
      (h2) => h2.textContent?.trim().toLowerCase() === text.toLowerCase()
    );

    if (target) {
      const offset = window.innerHeight * 0.3; // 30% da altura da viewport
      const topOffset =
        target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  // Detecta se scroll passou de 200px para ativar observadores
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

  // Detecta o centro da tela e ativa o item, ou desativa se scroll estiver no topo (menos que 30%)
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
    handleScroll(); // Executa na montagem para atualizar o estado

    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldObserve]);

  return (
    <header className="headerPrincipal">
      <nav>
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
