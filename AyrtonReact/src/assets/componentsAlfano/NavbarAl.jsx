import { Navbar } from '@material-tailwind/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons'

import Logo from 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/imagesAlfano/Alfano.png';

export default function Navbars() {
  return (
    <Navbar id='navbar' className="rounded-none border-none bg-black">
      <div className="flex py-2 justify-center">
        <LazyLoadImage
          src={Logo}
          alt="Logo"
          effect="blur"
          className="w-[45%] h-[100%] mx-auto lazy-load-image"
          wrapperClassName="lazy-load-image-wrapper"
        />
        <a
          href="https://www.instagram.com/alfano_argentina/"
          target="_blank"
          rel="noopener noreferrer"
          className='absolute top-0 right-0 mt-6 mr-7'
        >
          <FontAwesomeIcon icon={faInstagram} className='rounded-full border-2 p-1 border-white w-6 h-6 hover:border-alfano hover:text-alfano'/>
        </a>

      </div>
    </Navbar>
  );
}
