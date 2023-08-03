import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Icon() {
  return (
    <div className="fixed bottom-12 z-50 right-12 bg-green-500 rounded-full px-4 py-3 max-md:right-6 max-[768px]:bottom-6">
      <a href="https://wa.me/541149730446" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} className="text-white text-4xl max-md:text-xl" />
      </a>
    </div>
  );
}

export default Icon;
