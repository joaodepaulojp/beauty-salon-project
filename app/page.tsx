import GridServices from "@/components/grid-services";
import LogoComponent from "@/components/logo-component";
import SidebarSheet from "@/components/sidebar-sheet";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className=" justify-between flex flex-row gap-3  p-5">
        <LogoComponent />

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="secondary">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </div>

      <div className="text-center mt-8">
        <h1 className="text-7xl text-accent">
          Releve a beleza
          <br /> de ser você!
        </h1>
      </div>

      <div className="text-center p-8">
        <p className="text-lg">Nossos Serviços</p>
      </div>

      <div>
        <GridServices />
      </div>
    </div>
  );
}
