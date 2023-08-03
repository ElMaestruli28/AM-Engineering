import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import Img1 from 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/Cards/imagen1.webp';
import Img2 from 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/Cards/imagen2.webp';
import Img3 from 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/Cards/imagen3.webp';

const Tarjeta = ({ imagen, titulo, subtitulo }) => {
  return (
    <Card
      shadow={false}
      className="relative grid h-screen max-md:h-[45vh] w-1/3 rounded-none items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 h-full w-full rounded-none bg-cover bg-center"
        style={{
          backgroundImage: `url(${imagen})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-7 md:px-12">
        <Typography className="mb-5 text-white font-medium text-3xl leading-[1.5] max-sm:text-xl">
          {titulo}
        </Typography>
        <Typography className="mb-4 text-gray-400 text-xl max-md:text-sm">
          {subtitulo}
        </Typography>
      </CardBody>
    </Card>
  );
};

const Cards = () => {
  const cardsData = [
    {
      imagen: Img1,
      titulo: 'Data Acquisition',
      subtitulo: 'Racing car and kart setup and development',
    },
    {
      imagen: Img2,
      titulo: 'Teams and Drivers’ Coaching',
      subtitulo: ' Performance improvement plan and Onboard videos analysis',
    },
    {
      imagen: Img3,
      titulo: 'Racing Telemetry Services',
      subtitulo: 'Real-time aquisition, analysis, and improvement',
    },
  ];

  return (
    <div id="cards" className="flex">
      {cardsData.map((card, index) => (
        <Tarjeta
          key={index}
          imagen={card.imagen}
          titulo={card.titulo}
          subtitulo={card.subtitulo}
        />
      ))}
    </div>
  );
};

export default Cards;
