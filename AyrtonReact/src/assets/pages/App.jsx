import 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/App.css';
import { Suspense, lazy } from 'react';

import Loader from '../components/Loader'

const Navbar = lazy (() => import ('../components/Navbar'));
const Rightbar = lazy (() => import ('../components/Rightbar'));
const Sidebar = lazy (() => import ( '../components/Sidebar'));
const Slider = lazy (() => import ( '../components/Slider'));
const Encabezado = lazy (() => import ( '../components/Tituloprops'));
const Card = lazy (() => import ( '../components/Card'));
const Pilotos = lazy (() => import ( '../components/Pilotos'));
const Icon = lazy (() => import ( '../components/Icon'));
const Footer = lazy (() => import ( '../components/Footer'));
const Partners = lazy (() => import ( '../components/Partners'));
const Brands = lazy (() => import ( '../components/Brands'));
const Sublevel = lazy (() => import ( '../components/Sublevel'));
const ButtonEn = lazy (() => import ('../components/ButtonEn'))

import Quetitulo from '../images/encabezados/foto.webp';
import QuetituloMobile from '../images/encabezados/foto-mobile.webp'
import pilotosTitulo from '../images/encabezados/pilotos.webp';
import PilotosTituloMobile from '../images/encabezados/pilotos-mobile.webp'

function App() {
  return (
    <Suspense fallback={<Loader />}>
    <div>
      <Navbar />
      <ButtonEn />
      <Rightbar />
      <Sidebar />
      <Slider />
      <Encabezado foto={Quetitulo} fotoMobile={QuetituloMobile} titulo='¿Qué hacemos?'/>
      <Card />
      <Encabezado foto={pilotosTitulo} fotoMobile={PilotosTituloMobile} titulo='Pilotos'/>
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
