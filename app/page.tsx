import GridServices from "@/components/grid-services";
import InfiniteScroll from "@/components/infinite-scroll";
import LogoComponent from "@/components/logo-component";
import SidebarSheet from "@/components/sidebar-sheet";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className=" justify-between flex flex-row p-5 gap-3">
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

      <div className="mb-5">
        <GridServices />
      </div>

      <div className="bg-white">
        <div className="text-center py-5">
          <h2 className="text-3xl text-accent ">
            As melhores marcas do mercado
          </h2>
        </div>
        <div>
          <InfiniteScroll />
        </div>
      </div>
    </div>
  );
}
