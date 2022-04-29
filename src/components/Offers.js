import React from 'react';
import { Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


function Offers() {
  return (
    <div className="offer__slider">
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide>
          <img src="https://rukminim2.flixcart.com/flap/1688/280/image/951df9700e7e72ec.jpg?q=50" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://rukminim2.flixcart.com/flap/1688/280/image/13663a8300d0c5b6.jpg?q=50" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://rukminim2.flixcart.com/flap/1688/280/image/f178ebd4a29bba0b.jpg?q=50" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://rukminim2.flixcart.com/flap/1688/280/image/444356f48f2646c3.jpg?q=50" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Offers