import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import {
  faServer,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules"; 
import "swiper/swiper-bundle.css";

export default function Services() {
  return (
    <section className="servicesSection">
      <section className="servicesSectionContainer">
        <section className="box">
          <div className="service-title">
          </div>
          <ul>
            <Swiper
              slidesPerView={2}
              centeredSlides={true}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  centeredSlides: false,
                },
                768: {
                  slidesPerView: 2,
                  centeredSlides: true,
                },
              }}
              modules={[Pagination, Navigation]} // Inclui Autoplay
              className="mySwiper"
            >
              <SwiperSlide>
                <li>
                  <FontAwesomeIcon
                    icon={faServer}
                    style={{ color: "#04F46B", fontSize: "34px" }}
                  />
                  <strong>Formatação</strong> Muitas vezes com o passar o tempo
                  o computador começa a ficar lento, atrapalhando muito nas
                  tarefas diárias. Formatar o computador é uma exelente escolha
                  para garantir sua produtividade. Nesse processo, removemos
                  tudo que deixa o computador mais lento e deixamos o windows
                  optimizado para o melhor uso.
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <FontAwesomeIcon
                    icon={faWindows}
                    style={{ color: "#04F46B", fontSize: "34px" }}
                  />
                  <strong>Atualização para windows</strong> Atualizar o Windows
                  garante melhorias no desempenho, mais proteção contra vírus e
                  acesso a novos recursos. Além de corrigir falhas do sistema,
                  mantém o computador mais rápido, estável e compatível com os
                  softwares atuais. Ideal para quem busca eficiência e segurança
                  no dia a dia.
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <FontAwesomeIcon
                    icon={faLaptop}
                    style={{ color: "#04F46B", fontSize: "34px" }}
                  />
                  <strong>Recondicionamento de Aparelhos Antigos</strong>{" "}
                  Recondicionar aparelhos antigos é uma forma inteligente de
                  economizar, dando nova vida a dispositivos que ainda têm
                  potencial. Com upgrades de hardware e ajustes no sistema, é
                  possível melhorar o desempenho, prolongar a vida útil e
                  contribuir para a redução do lixo eletrônico.
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <FontAwesomeIcon
                    icon={faLaptop}
                    style={{ color: "#04F46B", fontSize: "34px" }}
                  />
                  <strong>Backup Seguro</strong> Fazer backup é essencial para
                  proteger seus arquivos mais importantes contra imprevistos
                  como falhas no sistema ou exclusões acidentais. Utilizar
                  soluções integradas ao Windows, como o Google Drive ou o
                  OneDrive, torna esse processo ainda mais fácil e seguro. Com o
                  backup automático na nuvem, seus dados ficam sempre acessíveis
                  e protegidos, garantindo tranquilidade e praticidade no dia a
                  dia.
                </li>
              </SwiperSlide>
            </Swiper>
          </ul>
        </section>
      </section>
    </section>
  );
}
