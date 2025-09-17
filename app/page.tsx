import SidebarSheet from "@/components/sidebar-sheet";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="justify-end flex flex-row gap-3  p-5">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="secondary">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </div>
      <div className="text-center mt-30">
        <h1 className="text-7xl text-primary">
          Releve a beleza
          <br /> de ser você!
        </h1>
      </div>
    </div>
  );
}
