import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import 'tailwindcss/tailwind.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useMediaQuery } from 'react-responsive';

SwiperCore.use([Autoplay, EffectFade, Pagination]);

import imagen1 from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/encabezados/primera.webp";
import imagen2 from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/encabezados/2.webp";
import imagen3 from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/encabezados/3.webp";
import imagen4 from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/encabezados/4.webp";
import imagen5 from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/encabezados/5.webp";
import imagen6 from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/encabezados/6.webp";
import imagen1mobile from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/encabezados/primera-mobile.webp";
import imagen2mobile from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/encabezados/2-mobile.webp";
import imagen3mobile from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/encabezados/3-mobile.webp";
import imagen4mobile from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/encabezados/4-mobile.webp";
import imagen5mobile from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/encabezados/5-mobile.webp";
import imagen6mobile from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/encabezados/6-mobile.webp";

function Slider() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="h-screen max-lg:h-full">
      <Swiper
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="h-full swiper-container"
      >
        <SwiperSlide className="h-screen max-lg:h-full flex justify-center items-center">
          <div className="relative h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            {isMobile ? (
              <LazyLoadImage
                effect="blur"
                className="h-full w-full object-cover"
                src={imagen1mobile}
                alt='Slider1'
              />
            ) : (
              <LazyLoadImage
                effect="blur"
                className="h-full w-full object-cover"
                src={imagen1}
                alt='Slider1'
              />
            )}
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen max-lg:h-full flex justify-center items-center">
          <div className="relative h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            {isMobile ? (
              <LazyLoadImage
                effect="blur"
                className="h-full w-full object-cover"
                src={imagen2mobile}
                alt='Slider2'
              />
            ) : (
              <LazyLoadImage
                effect="blur"
                className="h-full w-full object-cover"
                src={imagen2}
                alt='Slider2'
              />
            )}
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen max-lg:h-full flex justify-center items-center">
          <div className="relative h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            {isMobile ? (
              <LazyLoadImage
                effect="blur"
                className="h-full w-full object-cover"
                src={imagen3mobile}
                alt='Slider3'
              />
            ) : (
              <LazyLoadImage
                effect="blur"
                className="h-full w-full object-cover"
                src={imagen3}
                alt='Slider3'
              />
            )}
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen max-lg:h-full flex justify-center items-center">
          <div className="relative h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            {isMobile ? (
              <LazyLoadImage
                effect="blur"
                className="h-full w-full object-cover"
                src={imagen4mobile}
                alt='Slider4'
              />
            ) : (
              <LazyLoadImage
                effect="blur"
                className="h-full w-full object-cover"
                src={imagen4}
                alt='Slider4'
              />
            )}
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen max-lg:h-full flex justify-center items-center">
          <div className="relative h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            {isMobile ? (
              <LazyLoadImage
                effect="blur"
                className="h-full w-full object-cover"
                src={imagen5mobile}
                alt='Slider5'
              />
            ) : (
              <LazyLoadImage
                effect="blur"
                className="h-full w-full object-cover"
                src={imagen5}
                alt='Slider5'
              />
            )}
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen max-lg:h-full flex justify-center items-center">
          <div className="relative h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            {isMobile ? (
              <LazyLoadImage
                effect="blur"
                className="h-full w-full object-cover"
                src={imagen6mobile}
                alt='Slider6'
              />
            ) : (
              <LazyLoadImage
                effect="blur"
                className="h-full w-full object-cover"
                src={imagen6}
                alt='Slider6'
              />
            )}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
