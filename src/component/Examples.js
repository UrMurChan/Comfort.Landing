import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from "../img/img1.png"
import img2 from "../img/img2.png"
import img3 from "../img/img3.png"
import img4 from "../img/img4.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import Swiper styles
import 'swiper/css';
import { EffectCoverflow, Pagination,Navigation } from "swiper";
export default function Examples() {
  return (     
  <>
  <Swiper
  breakpoints={{
    0: {
      slidesPerView:1,
      spaceBetween:10,
      coverflowEffect:{
        rotate: 30,
        stretch: 10,
        depth: 10,
        modifier: 1,
        slideShadows: false,
      }
    },
    1001: {
      slidesPerView:3,
      spaceBetween:150,
      coverflowEffect:{
        rotate: 30,
        stretch: 10,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }
    },
  }}

        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination,Navigation]}
        className="mySwiper"
      >
      <SwiperSlide><img src={img1}/></SwiperSlide>
      <SwiperSlide><img src={img2}/></SwiperSlide>
      <SwiperSlide><img src={img3}/></SwiperSlide>
      <SwiperSlide><img src={img4}/></SwiperSlide>
      ...
    </Swiper>
   </>
 );
}