import {
  BookHeartIcon,
  HomeIcon,
  MapPinIcon,
  PhoneCallIcon,
  ScissorsIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import LogoComponent from "./logo-component";

const SidebarSheet = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left text-2xl">Menu</SheetTitle>
      </SheetHeader>
      <div className="flex flex-col gap-2 border-b border-solid py-4">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost">
            <HomeIcon size={18} />
            Inicio
          </Button>
        </SheetClose>
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost">
            <BookHeartIcon size={18} />
            Sobre Nós
          </Button>
        </SheetClose>
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost">
            <ScissorsIcon size={18} />
            Serviços
          </Button>
        </SheetClose>
      </div>
      <div className="p-4">
        <LogoComponent />
      </div>

      <div className="items-center flex flex-col">
        <p className="text-[12px] flex items-center text-secondary mt-4 gap-1">
          <MapPinIcon size={14} /> Centro, Catunda(CE)
        </p>
        <p className="text-[12px] flex items-center text-secondary gap-1">
          <PhoneCallIcon size={14} /> (88) 99999-9999
        </p>
      </div>
    </SheetContent>
  );
};

export default SidebarSheet;
