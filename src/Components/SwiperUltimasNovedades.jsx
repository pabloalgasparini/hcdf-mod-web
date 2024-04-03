import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "./swiperUltimasNovedades.css";

function SwiperUltimasNovedades() {
  return (
    <div className="swiper-container">
      <div className="section-title_swiper_novedades">
        <h2>Últimas Novedades</h2>
      </div>

      <Swiper
        effect="fade"
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide" style={{ height: "400px"}}>
          <div className="slide-content">
            <h2>El Gobernador inauguró el nuevo edificio del Concejo Deliberante de Formosa</h2>
            <p>25 de febrero de 2024</p>
          </div>
          <img
            src="/assets/img/swiper_novedades/insfran2.jpg"
            alt="Slide 1"
            className="swiper-image"
          />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide" style={{ height: "400px" }}>
          <div className="slide-content">
            <h2>El Gobernador inauguró el nuevo edificio del Concejo Deliberante de Formosa</h2>
            <p>25 de febrero de 2024</p>
          </div>
          <img
            src="/assets/img/swiper_novedades/insfraninauguracion.jpg"
            alt="Slide 2"
            className="swiper-image"
          />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide" style={{ height: "400px" }}>
          <div className="slide-content">
            <h2>Jorge Jofré inaugura el período de Sesiones Ordinarias del HCD</h2>
            <p>25 de febrero de 2024</p>
          </div>
          <img
            src="/assets/img/swiper_novedades/intendente.jpg"
            alt="Slide 3"
            className="swiper-image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperUltimasNovedades;
