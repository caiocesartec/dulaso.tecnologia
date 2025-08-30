import "./ServicesWeb.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faRocket,
  faLaptopCode,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function ServicesWeb() {
  return (
    <section className="servicesSection">
      <section className="servicesSectionContainer">

        <section className="box box-web">

          <div className="service-title">
          </div>

          <ul>
            <Swiper
              slidesPerView={2}
              centeredSlides={true}
              loop={true}
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
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <li>
                  <FontAwesomeIcon
                    icon={faRocket}
                    style={{ color: "#04F46B", fontSize: "34px" }}
                  />
                  <strong>Sites / Landing Pages         
                    <img
                      src="ico-swipe.png"
                      className="animate-blink-bounce"
                    />
                  </strong> Ter um site é como
                  abrir as portas da sua empresa para o mundo. Ele aumenta sua
                  presença online, transmite profissionalismo e facilita o
                  contato com clientes. Além disso, funciona 24h por dia,
                  ajudando a divulgar seus serviços, atrair novos públicos e
                  fortalecer sua marca.
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    style={{ color: "#04F46B", fontSize: "34px" }}
                  />
                  <strong>E-commerce</strong> Com um e-commerce, sua loja
                  funciona todos os dias, a qualquer hora, alcançando clientes
                  de qualquer lugar. Ele facilita as vendas, organiza os
                  produtos e oferece praticidade tanto para quem compra quanto
                  para quem vende. Ideal para expandir o negócio e aumentar os
                  lucros.
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <FontAwesomeIcon
                    icon={faLaptopCode}
                    style={{ color: "#04F46B", fontSize: "34px" }}
                  />
                  <strong>Sistemas</strong> Um sistema corporativo integra todas
                  as áreas da empresa, automatizando processos e organizando
                  informações em um só lugar. Isso reduz erros, melhora a tomada
                  de decisões e aumenta a produtividade. Ideal para quem busca
                  profissionalismo e crescimento com gestão inteligente.
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <FontAwesomeIcon
                    icon={faSquareInstagram}
                    style={{ color: "#04F46B", fontSize: "34px" }}
                  />
                  <strong>Presença Online</strong>Ter uma presença online forte
                  — com site, Google e redes sociais como o Instagram — é
                  essencial para ser encontrado, lembrado e escolhido. Isso
                  aumenta a visibilidade, atrai novos clientes e fortalece a
                  credibilidade do seu negócio no mercado digital.
                </li>
              </SwiperSlide>
            </Swiper>
          </ul>
        </section>
      </section>
    </section>
  );
}
