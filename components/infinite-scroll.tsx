"use client";

import LogoLoop from "./LogoLoop";

const imageLogos = [
  {
    src: "/wella-logo.png",
    alt: "Wella",
  },
  {
    src: "/itallian-logo.png",
    alt: "Itallian Color",
  },
  {
    src: "/truss-logo.svg",
    alt: "Truss",
  },
  {
    src: "/alfaparf-logo.png",
    alt: "Truss",
  },
  {
    src: "/loreal-logo.png",
    alt: "Loreal",
  },
];

export default function InfiniteScroll() {
  return (
    <div style={{ height: "100px", position: "relative", overflow: "hidden" }}>
      <LogoLoop
        logos={imageLogos}
        speed={40}
        direction="left"
        logoHeight={32}
        gap={40}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}
