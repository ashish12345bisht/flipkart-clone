import React, { useState, useEffect } from "react";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import DemoProduct from "./DemoProduct";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function ProductCarousel({data}) {
  //console.log(data);
  return (
    <div className="product__slider">
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={6}
        slidesPerGroup={3}
        navigation
      >
      {data?.map((item)=>{
        return <SwiperSlide>
          <DemoProduct item={item} />
        </SwiperSlide>;
      })}
      </Swiper>
    </div>
  );
}

export default ProductCarousel;
