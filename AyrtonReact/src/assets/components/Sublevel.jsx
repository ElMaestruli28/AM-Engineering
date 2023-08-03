import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

import 'swiper/swiper-bundle.css';
import 'tailwindcss/tailwind.css';

import Img1 from 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/Logos/14.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';

SwiperCore.use([Autoplay, Pagination]);

const Sublevel = () => {
  const subData = [
    { imagen: Img1 }
  ];

  const Base = ({ imagen }) => {
    return (
      <div className='bg-black'>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className='max-w-[12rem] max-h-[6rem]'
        >
          {imagen.map((item, index) => (
            <SwiperSlide key={index} className='h-full flex justify-center items-center'>
              <div className='relative h-full'>
                <LazyLoadImage
                effect='blur'
                src={item.imagen} className='w-full h-full object-cover' alt={`Imagen ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  return (
    <div id='sublevel'>
      <Base imagen={subData} />
    </div>
  );
};

export default Sublevel;
