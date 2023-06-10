import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Scrollbar, A11y } from "swiper";
import "./Carousel.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import img1 from "src/assets/banner_img1.jpg";
import img2 from "src/assets/banner_img2.jpg";
import img3 from "src/assets/banner_img3.jpg";
import img4 from "src/assets/banner_img4.jpg";
SwiperCore.use([Pagination, Autoplay]);
export const Carousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop
      speed={2000}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img src={img1} alt="banner1" className="banner_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="banner2" className="banner_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="banner3" className="banner_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="banner4" className="banner_image" />
      </SwiperSlide>
    </Swiper>
  );
};
