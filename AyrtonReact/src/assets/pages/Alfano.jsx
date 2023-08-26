import 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/App.css';
import { Suspense, lazy } from 'react';


import Loader from '../components/Loader'

const NavbarAl = lazy (() => import ('../componentsAlfano/NavbarAl'));
const CommentSystem = lazy (() => import ('../componentsAlfano/CommentSystem'));
const SidebarAl = lazy (() => import ( '../componentsAlfano/SidebarAl'));
const FooterAl = lazy (() => import ( '../componentsAlfano/FooterAl'));

function Alfano() {
  return (
    <Suspense fallback={<Loader />}>
    <div className='bg-git h-full w-full'>
        <NavbarAl/>
        <SidebarAl/>
        <h1 className='text-white text-4xl py-5 mr-auto ml-36 max-sm:ml-16'>Preguntas y Respuestas</h1>
        <hr className=' w-10/12 mx-auto' />
        <CommentSystem/>
        <FooterAl/>
    </div>
    </Suspense>
  );
}

export default Alfano;
