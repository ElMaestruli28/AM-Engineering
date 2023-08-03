import 'tailwindcss/tailwind.css';

import { useMediaQuery } from 'react-responsive';


function Encabezado (props) {
  const { titulo, foto, fotoMobile } = props;
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black/80"></div>
      { isMobile ? (
      <img src={fotoMobile} alt={titulo} className="w-full h-full" />
      ):(
        <img src={foto} alt={titulo} className="w-full h-full" />
      )}
      <h1 className="font-oswald font-semibold text-6xl uppercase text-center tracking-tight absolute text-gray-perfect top-2/4 left-0 right-0 max-md:text-3xl max-[768px]:top-1/4">
        {titulo}
      </h1>
    </div>
  );
}

export default Encabezado;
