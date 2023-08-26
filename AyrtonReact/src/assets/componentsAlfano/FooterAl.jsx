import { Typography } from "@material-tailwind/react";
 
export default function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-black text-white py-6 px-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal uppercase ml-4">
        &copy; 2023 Alfano Argentina | Accesorios de Karting
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="https://api.whatsapp.com/send?phone=5491157012499"
            color="blue-gray"
            className="font-normal transition-colors"
          >
            Whatsapp
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="https://www.instagram.com/alfano_argentina/"
            color="blue-gray"
            className="font-normal transition-colors mr-4"
          >
            Instagram
          </Typography>
        </li>
      </ul>
    </footer>
  );
}