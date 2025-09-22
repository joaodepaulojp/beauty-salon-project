import { MapPinIcon, PhoneCallIcon } from "lucide-react";
import LogoComponent from "./logo-component";
import { Card, CardContent } from "./ui/card";

const Footer = () => {
  return (
    <footer>
      <Card className="rounded-0xl p-0 text-center items-center">
        <CardContent className="mt-5 flex flex-col items-center">
          <LogoComponent />

          <div>
            <p className="text-[12px] flex items-center text-secondary mt-4 gap-1">
              <MapPinIcon size={14} /> Centro, Catunda(CE)
            </p>
            <p className="text-[12px] flex items-center text-secondary gap-1">
              <PhoneCallIcon size={14} /> (88) 99999-9999
            </p>
          </div>

          <p className="text-[10px] text-secondary mt-5 mb-5">
            © 2025 Copyright{" "}
            <span className="font-bold">
              Instituto de Beleza Joana de Paulo
            </span>
          </p>
        </CardContent>
      </Card>
    </footer>
  );
};

export default Footer;
