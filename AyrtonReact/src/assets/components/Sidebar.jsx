import { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PhoneIcon,
  NewspaperIcon,
  UserCircleIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  ChevronDownIcon,
  Bars3Icon,
  UsersIcon,
} from "@heroicons/react/24/solid";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";


export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [backgroundOpen, setBackgroundOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);

  const handleClick = (event, targetId) => {
    event.preventDefault();

    // Obtenemos el elemento objetivo mediante el ID
    const targetElement = document.getElementById(targetId);

    // Realizamos el desplazamiento suave hasta el elemento objetivo
    targetElement.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const toggleSidebar = () => {
    setOpen(!open);
    setBackgroundOpen(!open);
  };

  return (
    <>
    {backgroundOpen && (
      <div
        className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-black opacity-70"
        onClick={toggleSidebar}
      />
    )}
    <div className="fixed top-5 left-7 z-10 max-sm:top-3 max-[640px]:left-3">
      <button
        className="fixed text-white hover:text-am rounded-full z-30 transition"
        onClick={toggleSidebar}
      >
        <Bars3Icon className="h-10 w-10 max-md:h-7"></Bars3Icon>
      </button>
      <Card
        className={`fixed top-0 left-0 rounded-r-xl rounded-l-none h-full w-full max-w-[21rem] p-4 shadow-xl bg-black transition-transform ${
          open ? "translate-x-0" : "-translate-x-full duration-300"
        }`}
      >
        <div className="mb-2 flex items-center gap-4 p-4">
        </div>
        <List>
        <Accordion open={accordionOpen === 1}>
  <ListItem className="p-0" selected={open === 1}>
    <AccordionHeader
      onClick={() => setAccordionOpen(accordionOpen === 1 ? false : 1)} // Toggle the accordionOpen state when the header is clicked
      className="border-b-0 p-3"
    >
      <ListItemPrefix>
        <UserCircleIcon className="h-5 w-5" />
      </ListItemPrefix>
      <Typography color="blue-gray" className="mr-auto font-normal text-white hover:text-am">
        Redes Sociales
      </Typography>
      <ChevronDownIcon
        strokeWidth={2.5}
        className={`ml-auto h-4 w-4 transition-transform ${
          accordionOpen === 1 ? "rotate-180" : ""
        }`}
      />
    </AccordionHeader>
  </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <FontAwesomeIcon icon={faInstagram} strokeWidth={5} className="h-5 w-5" />
                  </ListItemPrefix>
                  <a
                    href="https://www.instagram.com/amastrangelo.engineering/"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="blue-gray"
                    className="text-white hover:text-am"
                  >
                    Instagram
                  </a>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <FontAwesomeIcon icon={faLinkedin} strokeWidth={5} className="h-5 w-5" />
                  </ListItemPrefix>
                  <a
                    href="https://ar.linkedin.com/in/ayrton-mastrángelo-616469162"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="blue-gray"
                    className="text-white hover:text-am"
                  >
                    Linkedin
                  </a>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <FontAwesomeIcon icon={faWhatsapp} strokeWidth={5} className="h-5 w-5" />
                  </ListItemPrefix>
                  <a
                    href="https://wa.me/541149730446"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="blue-gray"
                    className="text-white hover:text-am"
                  >
                    Whatsapp
                  </a>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          <hr className="my-2 border-blue-gray-50" />
          <ListItem>
            <ListItemPrefix>
              <PhoneIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Typography color="blue-gray" className="text-white hover:text-am">
              <a href="https://wa.me/541149730446">Contacto</a>
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <NewspaperIcon className="h-5 w-5" />
            </ListItemPrefix>
            <a
              href="https://www.instagram.com/amastrangelo.engineering/"
              target="_blank"
              rel="noopener noreferrer"
              color="blue-gray"
              className="text-white hover:text-am"
            >
              Noticias
            </a>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <QuestionMarkCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            <a
                href="#cards"
                onClick={(event)=> handleClick(event, 'cards')}
                color="blue-gray"
                className="text-white scroll-smooth hover:text-am"
              >
              Sobre Nosotros
            </a>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <UserGroupIcon className="h-5 w-5" />
            </ListItemPrefix>
            <a
              href="#pilotos"
              onClick={(event)=> handleClick(event, 'pilotos')}
              color="blue-gray"
              className="text-white hover:text-am"
            >
              Pilotos
            </a>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <UsersIcon className="h-5 w-5" />
            </ListItemPrefix>
            <a
              href="#partners"
              onClick={(event)=> handleClick(event, 'partners')}
              color="blue-gray"
              className="text-white hover:text-am"
            >
              Socios
            </a>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <WrenchScrewdriverIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link
              to="/soporte"
              color="blue-gray"
              className="text-white hover:text-alfano"
            >
              Soporte Alfano
            </Link>
          </ListItem>
        </List>
      </Card>
    </div>
    </>
  );
}
