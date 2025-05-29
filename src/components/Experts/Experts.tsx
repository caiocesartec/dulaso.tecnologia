"use client";
import { Pagination, Autoplay } from "swiper/modules"; // Importa Autoplay

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Experts.css";

export default function Experts() {
  return (
    <section className="mySwiperExperts">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000, // tempo entre os slides (ms)
          disableOnInteraction: false, // continua mesmo após interação
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          0: {
            slidesPerView: 1,
            centeredSlides: false,
          },
        }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide style={{ width: "auto" }}>
          <section>
            <img src="/experts/caio.png" className="logo" alt="Caio Timoteo" />
            <h3>Caio Timoteo</h3>
            <h4>Infra - Sistemas - E-commerce - Sites</h4>
          </section>
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          <section>
            <img
              src="/experts/fit.jpg"
              className="expertFoto"
              alt="Emerson Muniz"
            />
            <h3>Emerson Muniz</h3>
            <h4>E-commerce - Sistemas - Sites</h4>
          </section>
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          <section>
            <img
              src="/experts/vini.jpg"
              className="expertFoto"
              alt="Vinicius S. Alves"
            />
            <h3>Vinicius S. Alves</h3>
            <h4>ERP - Sistemas - Sites</h4>
          </section>
        </SwiperSlide>

        <SwiperSlide style={{ width: "auto" }}>
          <section>
            <img
              src="/experts/feitosa.jpg"
              className="expertFoto"
              alt="Bruno Feitosa"
            />
            <h3>Bruno Feitosa</h3>
            <h4>E-commerce - Sites</h4>
          </section>
        </SwiperSlide>

        <SwiperSlide style={{ width: "auto" }}>
          <section>
            <img
              src="/experts/arthur.jpg"
              className="logo"
              alt="Arthur Felipe"
            />
            <h3>Arthur Felipe</h3>
            <h4>E-commerce - Sites</h4>
          </section>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
