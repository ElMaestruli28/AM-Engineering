import { Link } from 'react-router-dom'

import UK from '../images/media/bandera-reino-unido.webp'

function ButtonEn() {
    return (
        <Link to="/ingles" className='absolute top-7 right-40 max-[900px]:right-40 max-[768px]:right-3 max-[600px]:right-3 max-[500px]:right-3 max-[499px]:top-6 max-[450px]:right-3 max-[449px]:top-5 '>
            <img src={UK} alt="Bandera Inglesa" className="z-50 text-white h-5 mr-2 max-md:h-5 max-[400px]:h-4 max-[499px]:mx-1 " />
        </Link>
    )
}

export default ButtonEn