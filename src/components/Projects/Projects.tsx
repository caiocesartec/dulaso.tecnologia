import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules"; // Importa Autoplay

import "./Projects.css";

export default function Projects() {
  return (
    <section className="projectsDone">
      <Swiper
        slidesPerView={5}
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
          1370: {
            slidesPerView: 5,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 4,
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
        <SwiperSlide>
          <section className="projectsLogo">
            <img
              src="/logos/Projects/aga.png"
              className="logoImgProjects"
              alt=""
            />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="projectsLogo">
            <img
              src="/logos/Projects/simplie.png"
              className="logoImgProjects"
              alt=""
            />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="projectsLogo">
            <img
              src="/logos/Projects/constanzo.png"
              className="logoImgProjects"
              alt=""
            />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="projectsLogo">
            <img
              src="/logos/Projects/dendrix.png"
              className="logoImgProjects"
              alt=""
            />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="projectsLogo">
            <img
              src="/logos/Projects/imediata.svg"
              className="logoImgProjects"
              alt=""
            />
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="projectsLogo">
            <img
              src="/logos/Projects/mitrre.png"
              className="logoImgProjects"
              alt=""
            />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="projectsLogo">
            <img
              src="/logos/Projects/mono.png"
              className="logoImgProjects"
              alt=""
            />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="projectsLogo">
            <img
              src="/logos/Projects/jiu.png"
              className="logoImgProjects"
              alt=""
            />
            <h3></h3>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="projectsLogo">
            <img
              src="/logos/Projects/kairos.png"
              className="logoImgProjects"
              alt=""
            />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="projectsLogo">
            <img
              src="/logos/Projects/psicologa.png"
              className="logoImgProjects"
              alt=""
            />
          </section>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
