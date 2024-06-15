import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';
import 'tailwindcss/tailwind.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useMediaQuery } from 'react-responsive';
import {Autoplay, Pagination} from "swiper/modules"

SwiperCore.use([Autoplay, Pagination]);

import Catania from "../images/racer/catania.webp";
import Cataniamobile from "../images/racer/catania-mobile.webp";
import Dore from "../images/racer/dore.webp";
import Doremobile from "../images/racer/dore-mobile.webp";
import Maschio from "../images/racer/maschio.webp";
import Maschiomobile from "../images/racer/maschio-mobile.webp";
import Moretta from "../images/racer/moretta.webp";
import Morettamobile from "../images/racer/moretta-mobile.webp";
import Ramos from "../images/racer/ramos.webp";
import Ramosmobile from "../images/racer/ramos-mobile.webp";
import Rossotti from "../images/racer/rossotti.webp";
import Rossottimobile from "../images/racer/rossotti-mobile.webp";
import Stratievsky from "../images/racer/stratievsky.webp";
import Stratievskymobile from "../images/racer/stratievsky-mobile.webp";

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
