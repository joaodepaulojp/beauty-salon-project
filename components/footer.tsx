import LogoComponent from "./logo-component";
import { Card, CardContent } from "./ui/card";

const Footer = () => {
  return (
    <footer>
      <Card className="rounded-0xl p-0 text-center ">
        <CardContent className="mt-5">
          <LogoComponent />
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
