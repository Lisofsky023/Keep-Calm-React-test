import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper";
import ProtoTypes from 'prop-types';
import TitleSwiper from './TitleSwiper';
import "swiper/scss";
import "swiper/scss/pagination";
import "../../index.css";
import '../swiper/product-images-slider.scss';
import "swiper/css/bundle";
import 'swiper/scss/manipulation';


export default function ProductImagesSlider(props) {
  return (
    <div className="swiper__wrapper">
        <TitleSwiper />
          <Swiper
            className="mySwiper"
            spaceBetween={40}
            direction={"horizontal"}
            freeMode={true}
            mousewheel={true}
            modules={[FreeMode, Mousewheel]}
            breakpoints={{
              320: {
                slidesPerView: 1.5,
                slidesOffsetBefore: 20,
                slidesOffsetAfter: 20,
                mousewheel: false,
              },
              750: {
                slidesOffsetBefore: 100,
                slidesOffsetAfter: 100,
              },
              1200: {
                slidesOffsetBefore: 261,
                slidesOffsetAfter: 261,
                slidesPerView: 5.4,
              }
            }}
          >
            {
              props.images.map((item, index) => (
                <SwiperSlide
                key={index}
                className='swiper__slide swiper-scrollbar-horizontal'
                >
                  <img src={item} alt="Swiper Images" />
                </SwiperSlide>
              ))
            }
          </Swiper>
    </div>
  );
}

ProductImagesSlider.protoTypes = {
  images: ProtoTypes.array.isRequired
}
