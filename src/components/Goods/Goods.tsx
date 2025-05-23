import "./Goods.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faEye,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

// Import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Goods: React.FC = () => {
  return (
    <section className="goodsSection">
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="box">
            <FontAwesomeIcon
              icon={faBullseye}
              style={{ color: "#04F46B", fontSize: "34px" }}
            />
            <h3>Missão</h3>
            <p>
              Oferecer soluções tecnológicas acessíveis e inovadoras que
              capacitem microempreendedores a{" "}
              <strong>expandir seus negócios</strong>, aumentando sua
              competitividade e presença digital de forma simples e eficiente.
            </p>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="box">
            <FontAwesomeIcon
              icon={faEye}
              style={{ color: "#04F46B", fontSize: "34px" }}
            />
            <h3>Visão</h3>
            <p>
              Ser referência nacional em{" "}
              <strong>transformação digital para microempreendedores</strong>,
              promovendo <strong>inclusão tecnológica</strong> e impulsionando o{" "}
              <strong>crescimento sustentável</strong> de pequenos e médios
              negócios.
            </p>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="box">
            <FontAwesomeIcon
              icon={faHandshake}
              style={{ color: "#04F46B", fontSize: "34px" }}
            />
            <h3>Valores</h3>
            <ul>
              <li>
                <strong>Agilidade:</strong> Buscamos sempre soluções que
                entregam o maior valor possível no menor tempo viável.
              </li>
              <li>
                <strong>Compromisso:</strong> Trabalhamos com dedicação para o
                sucesso dos microempreendedores.
              </li>
              <li>
                <strong>Acessibilidade:</strong> Tornamos a tecnologia simples e
                disponível para todos.
              </li>
              <li>
                <strong>Ética:</strong> Atuamos com transparência, respeito e
                responsabilidade.
              </li>
              <li>
                <strong>Parceria:</strong> Valorizamos relações de confiança e
                colaboração duradouras.
              </li>
            </ul>
          </section>
        </SwiperSlide>
      </Swiper>

      <section className="goodsSectionContainer"></section>
    </section>
  );
};

export default Goods;
