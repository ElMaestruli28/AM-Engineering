import './App.css';
import { Suspense, lazy } from 'react';

import Loader from './assets/components/Loader'

const Navbar = lazy (() => import ('./assets/components/Navbar'));
const Rightbar = lazy (() => import ('./assets/components/Rightbar'));
const Sidebar = lazy (() => import ( './assets/components/Sidebar'));
const Slider = lazy (() => import ( './assets/components/Slider'));
const Encabezado = lazy (() => import ( './assets/components/Tituloprops'));
const Card = lazy (() => import ( './assets/components/Card'));
const Pilotos = lazy (() => import ( './assets/components/Pilotos'));
const Icon = lazy (() => import ( './assets/components/Icon'));
const Footer = lazy (() => import ( './assets/components/Footer'));
const Partners = lazy (() => import ( './assets/components/Partners'));
const Brands = lazy (() => import ( './assets/components/Brands'));
const Sublevel = lazy (() => import ( './assets/components/Sublevel'));
const ButtonEn = lazy (() => import ('./assets/components/ButtonEn'))

import Quetitulo from './assets/images/encabezados/foto.webp';
import QuetituloMobile from './assets/images/encabezados/foto-mobile.webp'
import pilotosTitulo from './assets/images/encabezados/pilotos.webp';
import PilotosTituloMobile from './assets/images/encabezados/pilotos-mobile.webp'

function App() {
  return (
    <Suspense fallback={<Loader />}>
    <div>
      <Navbar />
      <ButtonEn />
      <Rightbar />
      <Sidebar />
      <Slider />
      <Encabezado foto={Quetitulo} fotoMobile={QuetituloMobile} titulo='¿Qué hacemos?' />
      <Card />
      <Encabezado foto={pilotosTitulo} fotoMobile={PilotosTituloMobile} titulo='Pilotos' />
      <Pilotos />
      <Icon />
      <Footer />
      <Partners />
      <Brands />
      <Sublevel />
    </div>
    </Suspense>
  );
}

export default App;
