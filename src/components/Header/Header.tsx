import { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [activeItem, setActiveItem] = useState("");

  const scrollToHeading = (text: string) => {
    setActiveItem(text);
    const headings = document.querySelectorAll("h2");
    const target = Array.from(headings).find(
      (h2) => h2.textContent?.trim().toLowerCase() === text.toLowerCase()
    );

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = [
      { id: "sectionAbout", label: "Sobre" },
      { id: "goodsSection", label: "Valores" },
      { id: "servicesSection", label: "Serviços" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const matched = sections.find(
              (s) => s.id === entry.target.className
            );
            if (matched) {
              setActiveItem(matched.label);
            }
          }
        }
      },
      {
        threshold: 0.1, // 50% visível
      }
    );

    sections.forEach(({ id }) => {
      const el = document.querySelector(`.${id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
        </ul>
      </nav>
    </header>
  );
}
