import React from "react";
import ProtoTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Thumbs } from "swiper";
import TitleSwiper from './TitleSwiper';
import '../swiper/product-images-slider.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';
import 'swiper/css/scrollbar';

const ProductImagesSlider = props => {
  return (
    <>
    
  <div className="swiper">
    <div>
      <TitleSwiper />
      <Swiper
      loop={true}
      spaceBetween={10}
      navigation={true}
      modules={[false]}
      grabCursor={true}
      slidesPerView={5.5}

      // centeredSlides={true}
      // slidesOffsetBefore={192}
      // slidesPerColumn={1}
      // marginRight={10}
      
      className='swiper__product-images'
    >
      {
        props.images.map((item, index) => (
          <SwiperSlide style={{
            width:'320px',
          }}
          className="swiper__slide"
          key={index}>
            <img className="swiper__img" src={item} alt="Swiper Images" />
          </SwiperSlide>
        ))
      }
    </Swiper>
    </div>
  </div>
  </>
  )
}

ProductImagesSlider.protoTypes = {
  images: ProtoTypes.array.isRequired
}

export default ProductImagesSlider;