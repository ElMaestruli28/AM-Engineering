import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

import 'swiper/swiper-bundle.css';
import 'tailwindcss/tailwind.css';

import Img1 from 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/Logos/1.webp';
import Img2 from 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/Logos/2.webp';
import Img3 from 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/Logos/3.webp';
import Img4 from 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/Logos/4.webp';
import Img5 from 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/Logos/5.webp';
import Img6 from 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/Logos/6.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';

SwiperCore.use([Autoplay, Pagination]);

const Partners = () => {
  const partnersData = [
    { imagen: Img1 },
    { imagen: Img2 },
    { imagen: Img3 },
    { imagen: Img4 },
    { imagen: Img5 },
    { imagen: Img6 },
  ];

  const Base = ({ imagen }) => {
    return (
      <div className='h-full bg-black'>
        <div className='w-full border-t-2 border-white'>
          <h1 className='relative font-oswald font-semibold py-10 text-4xl uppercase text-center tracking-tight text-gray-perfect top-2/4 left-0 right-0 max-md:text-3xl'>
            Partners
          </h1>
        </div>
        <Swiper
          spaceBetween={0}
          slidesPerView={2}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className='max-w-[32rem] max-h-[18rem]'
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
        <div className='max-w-[40rem] mx-auto border-b-2 pt-10 border-white'></div>
      </div>
    );
  };

  return (
    <div id='partners'>
      <Base imagen={partnersData} />
    </div>
  );
};

export default Partners;
