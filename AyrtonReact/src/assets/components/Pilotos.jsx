import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import 'tailwindcss/tailwind.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useMediaQuery } from 'react-responsive';

SwiperCore.use([Autoplay, Pagination]);

import Alvaro from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/racer/alvaro.webp"
import Alvaromobile from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/racer/alvaro-mobile.webp"
import Catania from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/racer/catania.webp";
import Cataniamobile from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/racer/catania-mobile.webp";
import Dore from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/racer/dore.webp";
import Doremobile from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/racer/dore-mobile.webp";
import Maschio from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/racer/maschio.webp";
import Maschiomobile from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/racer/maschio-mobile.webp";
import Moretta from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/racer/moretta.webp";
import Morettamobile from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/racer/moretta-mobile.webp";
import Ramos from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/racer/ramos.webp";
import Ramosmobile from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/racer/ramos-mobile.webp";
import Rossotti from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/racer/rossotti.webp";
import Rossottimobile from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/racer/rossotti-mobile.webp";
import Storni from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/racer/Storni.webp"
import Stornimobile from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/racer/Storni-mobile.webp"
import Stratievsky from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/racer/stratievsky.webp";
import Stratievskymobile from "C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/racer/stratievsky-mobile.webp";

function Pilotos() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div id="pilotos" className="h-screen max-lg:h-full">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="h-full swiper-container"
      >
        <SwiperSlide className="h-screen max-lg:h-full flex justify-center items-center">
          <div className="relative h-full">
            <div className="absolute top-0 left-0 w-full h-full z-30 bg-black opacity-50"></div>
            {isMobile ? (
              <LazyLoadImage
                effect="blur"
                className="object-cover h-full w-full z-50"
                src={Alvaromobile}
                alt="Alvaro Mobile"
              />
            ) : (
              <LazyLoadImage
                effect="blur"
                className="object-cover h-full w-full z-50"
                src={Alvaro}
                alt="Alvaro"
              />
            )}
            <a
              href="https://www.instagram.com/dieguitoalvaro"
              target="_blank"
              rel="noopener noreferrer"
              className="font-oswald font-semibold z-40 uppercase text-center text-5xl tracking-tight absolute text-white top-2/4 left-0 right-0 max-md:text-3xl"
            >
              Alvaro
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen max-lg:h-full flex justify-center items-center">
          <div className="relative h-full">
            <div className="absolute top-0 left-0 w-full h-full z-30 bg-black opacity-50"></div>
            {isMobile ? (
              <LazyLoadImage
                effect="blur"
                className="object-cover h-full w-full z-50"
                src={Cataniamobile}
                alt="Catania Mobile"
              />
            ) : (
              <LazyLoadImage
                effect="blur"
                className="object-cover h-full w-full z-50"
                src={Catania}
                alt="Catania"
              />
            )}
            <a
              href="https://www.instagram.com/agustinncatania"
              target="_blank"
              rel="noopener noreferrer"
              className="font-oswald font-semibold z-40 uppercase text-center text-5xl tracking-tight absolute text-white top-2/4 left-0 right-0 max-md:text-3xl"
            >
              Catania
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen max-lg:h-full flex justify-center items-center">
          <div className="relative h-full">
            <div className="absolute top-0 left-0 w-full h-full z-30 bg-black opacity-50"></div>
            {isMobile ? (
              <LazyLoadImage
                effect="blur"
                className="object-cover h-full w-full z-50"
                src={Doremobile}
                alt="Dore Mobile"
              />
            ) : (
              <LazyLoadImage
                effect="blur"
                className="object-cover h-full w-full z-50"
                src={Dore}
                alt="Dore"
              />
            )}
            <a
              href="https://www.instagram.com/santino_doreok"
              target="_blank"
              rel="noopener noreferrer"
              className="font-oswald font-semibold z-40 uppercase text-center text-5xl tracking-tight absolute text-white top-2/4 left-0 right-0 max-md:text-3xl"
            >
              Dore
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen max-lg:h-full flex justify-center items-center">
          <div className="relative h-full">
            <div className="absolute top-0 left-0 w-full h-full z-30 bg-black opacity-50"></div>
            {isMobile ? (
              <LazyLoadImage
                effect="blur"
                className="object-cover h-full w-full z-50"
                src={Maschiomobile}
                alt="Maschio Mobile"
              />
            ) : (
              <LazyLoadImage
                effect="blur"
                className="object-cover h-full w-full z-50"
                src={Maschio}
                alt="Maschio"
              />
            )}
            <a
              href="https://www.instagram.com/valenmaschio__"
              target="_blank"
              rel="noopener noreferrer"
              className="font-oswald font-semibold z-40 uppercase text-center text-5xl tracking-tight absolute text-white top-2/4 left-0 right-0 max-md:text-3xl"
            >
              Maschio
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen max-lg:h-full flex justify-center items-center">
          <div className="relative h-full">
            <div className="absolute top-0 left-0 w-full h-full z-30 bg-black opacity-50"></div>
            {isMobile ? (
              <LazyLoadImage
                effect="blur"
                className="object-cover h-full w-full z-50"
                src={Morettamobile}
                alt="Moretta Mobile"
              />
            ) : (
              <LazyLoadImage
                effect="blur"
                className="object-cover h-full w-full z-50"
                src={Moretta}
                alt="Moretta"
              />
            )}
            <a
              href="https://www.instagram.com/pablomoretta"
              target="_blank"
              rel="noopener noreferrer"
              className="font-oswald font-semibold z-40 uppercase text-center text-5xl tracking-tight absolute text-white top-2/4 left-0 right-0 max-md:text-3xl"
            >
              Moretta
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen max-lg:h-full flex justify-center items-center">
          <div className="relative h-full">
            <div className="absolute top-0 left-0 w-full h-full z-30 bg-black opacity-50"></div>
            {isMobile ? (
              <LazyLoadImage
                effect="blur"
                className="object-cover h-full w-full z-50"
                src={Ramosmobile}
                alt="Ramos Mobile"
              />
            ) : (
              <LazyLoadImage
                effect="blur"
                className="object-cover h-full w-full z-50"
                src={Ramos}
                alt="Ramos"
              />
            )}
            <a
              href="https://www.instagram.com/julianramos.e"
              target="_blank"
              rel="noopener noreferrer"
              className="font-oswald font-semibold z-40 uppercase text-center text-5xl tracking-tight absolute text-white top-2/4 left-0 right-0 max-md:text-3xl"
            >
              Ramos
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen max-lg:h-full flex justify-center items-center">
          <div className="relative h-full">
            <div className="absolute top-0 left-0 w-full h-full z-30 bg-black opacity-50"></div>
            {isMobile ? (
              <LazyLoadImage
                effect="blur"
                className="object-cover h-full w-full z-50"
                src={Rossottimobile}
                alt="Rossotti Mobile"
              />
            ) : (
              <LazyLoadImage
                effect="blur"
                className="object-cover h-full w-full z-50"
                src={Rossotti}
                alt="Rossotti"
              />
            )}
            <a
              href="https://www.instagram.com/joacocamporino"
              target="_blank"
              rel="noopener noreferrer"
              className="font-oswald font-semibold z-40 uppercase text-center text-5xl tracking-tight absolute text-white top-2/4 left-0 right-0 max-md:text-3xl"
            >
              Rossotti
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen max-lg:h-full flex justify-center items-center">
          <div className="relative h-full">
            <div className="absolute top-0 left-0 w-full h-full z-30 bg-black opacity-50"></div>
            {isMobile ? (
              <LazyLoadImage
                effect="blur"
                className="object-cover h-full w-full z-50"
                src={Stornimobile}
                alt="Storni Mobile"
              />
            ) : (
              <LazyLoadImage
                effect="blur"
                className="object-cover h-full w-full z-50"
                src={Storni}
                alt="Storni"
              />
            )}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="font-oswald font-semibold z-40 uppercase text-center text-5xl tracking-tight absolute text-white top-2/4 left-0 right-0 max-md:text-3xl"
            >
              Storni
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen max-lg:h-full flex justify-center items-center">
          <div className="relative h-full">
            <div className="absolute top-0 left-0 w-full h-full z-30 bg-black opacity-50"></div>
            {isMobile ? (
              <LazyLoadImage
                effect="blur"
                className="object-cover h-full w-full z-50"
                src={Stratievskymobile}
                alt="Stratievsky Mobile"
              />
            ) : (
              <LazyLoadImage
                effect="blur"
                className="object-cover h-full w-full z-50"
                src={Stratievsky}
                alt="Stratievsky"
              />
            )}
            <a
              href="https://www.instagram.com/arielstrat"
              target="_blank"
              rel="noopener noreferrer"
              className="font-oswald font-semibold z-40 uppercase text-center text-5xl tracking-tight absolute text-white top-2/4 left-0 right-0 max-md:text-3xl"
            >
              Stratievsky
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Pilotos;
