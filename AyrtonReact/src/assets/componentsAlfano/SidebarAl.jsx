import { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,

} from "@material-tailwind/react";
import {
  PhoneIcon,
  NewspaperIcon,
  WrenchScrewdriverIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";


export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [backgroundOpen, setBackgroundOpen] = useState(false);


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
        className="fixed text-white hover:text-alfano rounded-full z-30 transition"
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
          <hr className="my-2 border-blue-gray-50" />
          <ListItem>
            <ListItemPrefix>
              <PhoneIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Typography color="blue-gray" className="text-white hover:text-alfano">
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
              className="text-white hover:text-alfano"
            >
              Noticias
            </a>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <WrenchScrewdriverIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link
              to="/"
              color="blue-gray"
              className="text-white hover:text-am"
            >
              AM Engineering
            </Link>
          </ListItem>
        </List>
      </Card>
    </div>
    </>
  );
}
