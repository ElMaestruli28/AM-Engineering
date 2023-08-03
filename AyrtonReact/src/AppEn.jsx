import './App.css';
import { Suspense, lazy } from 'react';

import Loader from './assets/components/Loader'

const Navbar = lazy (() => import ('./assets/components/Navbar'));
const Rightbar = lazy (() => import ('./assets/components/Rightbar'));
const SidebarEn = lazy (() => import ( './assets/componentsEn/SidebarEn'));
const Slider = lazy (() => import ( './assets/components/Slider'));
const Encabezado = lazy (() => import ( './assets/components/Tituloprops'));
const CardEn = lazy (() => import ( './assets/componentsEn/CardEn'));
const Pilotos = lazy (() => import ( './assets/components/Pilotos'));
const Icon = lazy (() => import ( './assets/components/Icon'));
const FooterEn = lazy (() => import ( './assets/componentsEn/FooterEs'));
const PartnersEn = lazy (() => import ( './assets/componentsEn/PartnersEn'));
const Brands = lazy (() => import ( './assets/components/Brands'));
const Sublevel = lazy (() => import ( './assets/components/Sublevel'));
const ButtonEs = lazy (() => import ( './assets/componentsEn/ButtonEs'));

import Quetitulo from './assets/images/encabezados/foto.webp';
import QuetituloMobile from './assets/images/encabezados/foto-mobile.webp'
import pilotosTitulo from './assets/images/encabezados/pilotos.webp';
import PilotosTituloMobile from './assets/images/encabezados/pilotos-mobile.webp'

function App() {
  return (
    <Suspense fallback={<Loader />}>
    <div>
      <Navbar />
      <ButtonEs />
      <Rightbar />
      <SidebarEn />
      <Slider />
      <Encabezado foto={Quetitulo} fotoMobile={QuetituloMobile} titulo=' About us' />
      <CardEn />
      <Encabezado foto={pilotosTitulo} fotoMobile={PilotosTituloMobile} titulo='Racers' />
      <Pilotos />
      <Icon />
      <FooterEn />
      <PartnersEn />
      <Brands />
      <Sublevel />
    </div>
    </Suspense>
  );
}

export default App;
