import "./Services.css";
import {
  faWindows,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faServer,
  faLaptop,
  faLaptopCode,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <section className="servicesSection">
      <section className="servicesSectionContainer">
        <section className="box">
          <strong> - </strong>
          <h3>Manutenção de Computadores</h3>
          <strong> - </strong>
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faServer}
                style={{ color: "#04F46B", fontSize: "34px" }}
              />
              <strong>Formatação</strong> Muitas vezes com o passar o tempo o
              computador começa a ficar lento, atrapalhando muito nas tarefas
              diárias. Formatar o computador é uma exelente escolha para
              garantir sua produtividade. Nesse processo, removemos tudo que
              deixa o computador mais lento e deixamos o windows optimizado para
              o melhor uso.
            </li>
            <li>
              <FontAwesomeIcon
                icon={faWindows}
                style={{ color: "#04F46B", fontSize: "34px" }}
              />
              <strong>Atualização para windows</strong> Atualizar o Windows
              garante melhorias no desempenho, mais proteção contra vírus e
              acesso a novos recursos. Além de corrigir falhas do sistema,
              mantém o computador mais rápido, estável e compatível com os
              softwares atuais. Ideal para quem busca eficiência e segurança no
              dia a dia.
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLaptop}
                style={{ color: "#04F46B", fontSize: "34px" }}
              />
              <strong>Recondicionamento de Aparelhos Antigos</strong>{" "}
              Recondicionar aparelhos antigos é uma forma inteligente de
              economizar, dando nova vida a dispositivos que ainda têm
              potencial. Com upgrades de hardware e ajustes no sistema, é
              possível melhorar o desempenho, prolongar a vida útil e contribuir
              para a redução do lixo eletrônico.
            </li>
          </ul>
        </section>

        <section className="box">
          <strong> - </strong>
          <h3>Programação Web</h3>
          <strong> - </strong>
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faRocket}
                style={{ color: "#04F46B", fontSize: "34px" }}
              />
              <strong>Sites / Landing Pages</strong> Ter um site é como abrir as
              portas da sua empresa para o mundo. Ele aumenta sua presença
              online, transmite profissionalismo e facilita o contato com
              clientes. Além disso, funciona 24h por dia, ajudando a divulgar
              seus serviços, atrair novos públicos e fortalecer sua marca.
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "#04F46B", fontSize: "34px" }}
              />
              <strong>E-commerce</strong> Com um e-commerce, sua loja funciona
              todos os dias, a qualquer hora, alcançando clientes de qualquer
              lugar. Ele facilita as vendas, organiza os produtos e oferece
              praticidade tanto para quem compra quanto para quem vende. Ideal
              para expandir o negócio e aumentar os lucros.
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLaptopCode}
                style={{ color: "#04F46B", fontSize: "34px" }}
              />
              <strong>Sistemas</strong> Um sistema corporativo integra todas as
              áreas da empresa, automatizando processos e organizando
              informações em um só lugar. Isso reduz erros, melhora a tomada de
              decisões e aumenta a produtividade. Ideal para quem busca
              profissionalismo e crescimento com gestão inteligente.
            </li>
            <li>
              <FontAwesomeIcon
                icon={faSquareInstagram}
                style={{ color: "#04F46B", fontSize: "34px" }}
              />
              <strong>Presença Online</strong>Ter uma presença online forte —
              com site, Google e redes sociais como o Instagram — é essencial
              para ser encontrado, lembrado e escolhido. Isso aumenta a
              visibilidade, atrai novos clientes e fortalece a credibilidade do
              seu negócio no mercado digital.
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
}
