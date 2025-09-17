import { BookHeartIcon, HomeIcon, ScissorsIcon } from "lucide-react";
import { Button } from "./ui/button";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

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
    </SheetContent>
  );
};

export default SidebarSheet;
