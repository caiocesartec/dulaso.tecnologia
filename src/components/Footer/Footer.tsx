import "./Footer.css";

export default function Footer() {
  const openWhatsApp = () => {
    window.open("https://wa.me/5511981952008", "_blank"); // Substitua pelo seu número
  };

  return (
    <main className="displayCallFullFooter">
      <a href="/" target="_blank">
        <img
          src="/logos/dulaso/logoDulaso.svg"
          className="logo"
          alt="Dulaso logo"
        />
      </a>
      <section>
        <p>CAIO CESAR ALVES TIMOTEO LTDA</p>
        <p>CNPJ:44.328.816/0001-14</p>

        <p style={{ cursor: "pointer" }} onClick={openWhatsApp}>
          CONTATO: 11 98195-2008
        </p>
      </section>
    </main>
  );
}
