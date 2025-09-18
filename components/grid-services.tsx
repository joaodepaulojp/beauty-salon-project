import Image from "next/image";
import { Card } from "./ui/card";

const GridServices = () => {
  const services = [
    { title: "CABELEIREIROS", img: "/cabeleireiros.png" },
    { title: "HIDRATAÇÃO & TRATAMENTOS", img: "/hidratacao.png" },
    { title: "QUÍMICAS", img: "/quimicas.png" },
    { title: "MANICURE & PEDICURE", img: "/manicure.png" },
  ];

  return (
    <div className="grid grid-cols-2 gap-7 md:flex md:items-center px-5 place-items-center">
      {services.map((service) => (
        <Card
          key={service.title}
          className="w-[160px] h-[190px] sm:w-[320px] sm:h-[380px]  rounded-2xl p-0 bg-secondary border-solid border-2 border-secondary"
        >
          <div className="relative w-full h-full p-0">
            <Image
              fill
              className="object-cover rounded-lg opacity-50"
              src={service.img}
              alt={service.title}
            />

            <div className="absolute inset-0 flex items-center justify-center px-2 text-center">
              <p className="text-white font-semibold text-sm">
                {service.title}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default GridServices;
