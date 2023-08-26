import 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/App.css';
import { Suspense, lazy } from 'react';

import Loader from '../components/Loader'

const Navbar = lazy (() => import ('../components/Navbar'));
const Rightbar = lazy (() => import ('../components/Rightbar'));
const SidebarEn = lazy (() => import ( '../componentsEn/SidebarEn'));
const Slider = lazy (() => import ( '../components/Slider'));
const Encabezado = lazy (() => import ( '../components/Tituloprops'));
const CardEn = lazy (() => import ( '../componentsEn/CardEn'));
const Pilotos = lazy (() => import ( '../components/Pilotos'));
const Icon = lazy (() => import ( '../components/Icon'));
const FooterEn = lazy (() => import ( '../componentsEn/FooterEs'));
const PartnersEn = lazy (() => import ( '../componentsEn/PartnersEn'));
const Brands = lazy (() => import ( '../components/Brands'));
const Sublevel = lazy (() => import ( '../components/Sublevel'));
const ButtonEs = lazy (() => import ( '../componentsEn/ButtonEs'));

import Quetitulo from '../images/encabezados/foto.webp';
import QuetituloMobile from '../images/encabezados/foto-mobile.webp'
import pilotosTitulo from '../images/encabezados/pilotos.webp';
import PilotosTituloMobile from '../images/encabezados/pilotos-mobile.webp'

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
