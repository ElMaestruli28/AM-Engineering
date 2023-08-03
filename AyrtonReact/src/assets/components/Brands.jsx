import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

import 'swiper/swiper-bundle.css';
import 'tailwindcss/tailwind.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Img1 from 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/Logos/7.webp';
import Img2 from 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/Logos/8.webp';
import Img3 from 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/Logos/9.webp';
import Img4 from 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/Logos/10.webp';
import Img5 from 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/Logos/11.webp';
import Img6 from 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/Logos/12.webp';
import Img7 from 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/Logos/13.webp';

SwiperCore.use([Autoplay, Pagination]);

const Brands = () => {
  const brandsData = [
    { imagen: Img1 },
    { imagen: Img2 },
    { imagen: Img3 },
    { imagen: Img4 },
    { imagen: Img5 },
    { imagen: Img6 },
    { imagen: Img7 },
  ];

const Base = ({ imagen }) => {
    return (
      <div className='h-full bg-black pt-10'>
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className='max-w-[36rem] max-h-[18rem]'
        >
          {imagen.map((item, index) => (
            <SwiperSlide key={index} className='h-full flex justify-center items-center'>
              <div className='relative h-full'>
                <LazyLoadImage src={item.imagen}
                effect='blur'
                className='w-full h-full object-cover' alt={`Imagen ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='max-w-[40rem] mx-auto border-b-2 pt-10 border-white'></div>
      </div>
    );
  };

return (
    <div id='brands'>
      <Base imagen={brandsData} />
    </div>
  );
};

export default Brands;