import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './customSwiperComponent.css';

function CustomSwiperComponent() {
  return (
    <div className="swiper-container">
       <div className="section-title">
        <h2>Consejales</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={0}
      loop={true}
      slidesPerView={3}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={false}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="custom-swiper"
      breakpoints={{
        // Cuando el ancho de la pantalla sea de 1120px o menos
        1120: {
          slidesPerView: 3, // Mostrar un solo slide por vista
        },
        // Cuando el ancho de la pantalla sea de 690px o menos
        690: {
          slidesPerView: 1, // Mostrar un solo slide por vista
        },
        320: {
          slidePerView: 1,
        }
      }}
    >
   
      <SwiperSlide>
        <div className="testimonial-slide">
          <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
            <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
            <h3>Ruben Dario Di Martino</h3>
            <h4>Presidente</h4>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial-slide">
          <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
            <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
            <h3>Sara Wilsson</h3>
            <h4>Designer</h4>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial-slide">
          <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
            <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
            <h3>Jena Karlis</h3>
            <h4>Store Owner</h4>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial-slide">
          <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
            <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
            <h3>Matt Brandon</h3>
            <h4>Freelancer</h4>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
}

export default CustomSwiperComponent;
