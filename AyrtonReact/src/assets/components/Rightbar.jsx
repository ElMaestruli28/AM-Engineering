import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Rightbar() {
  return (
    <div className="absolute top-6 right-14 max-[500px]:right-4 max-[499px]:top-5 max-md:hidden">
      <a href="https://wa.me/541149730446" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} className="text-white text-2xl mx-2 max-md:text-lg max-[600px]:mx-1 max-[400px]:text-sm max-[499px]:mx-1" />
      </a>
      <a href="https://www.instagram.com/amastrangelo.engineering/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl mx-2 max-md:text-lg max-[600px]:mx-1 max-[400px]:text-sm max-[499px]:mx-1" />
      </a>
      <a href="https://ar.linkedin.com/in/ayrton-mastrángelo-616469162" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl ml-2 max-md:text-lg max-[600px]:ml-1 max-[400px]:text-sm max-[499px]:mx-1" />
      </a>
    </div>
  );
}

export default Rightbar;
