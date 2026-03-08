import Link from "./Link";
import WebsiteLogo from "../assets/SLAYSUKI.webp";
import InstagramLogo from "../assets/instagram-logo.webp";
import CharizardImg from "../assets/Pokemon/charizard.webp"


const WebsiteLogoIcon = () => {
  return <img src={WebsiteLogo} alt="Slaysuki Website Logo" className="h-8 w-8" />;
};

const InstagramLogoIcon = () => {
  return <img src={InstagramLogo} alt="Instagram Logo" className="h-8 w-8" />;
};

const Charizard = () =>{
  return <img src={CharizardImg} alt="Charizard" className="absolute h-16 left-[50%]" />;
}

const Links = () => {
  const items = [
    {
      id: 1,
      label: "Website",
      url: "https:/slaysuki.com",
      icon: <WebsiteLogoIcon />,
      // poke: <Charizard />
    },
    {
      id: 2,
      label: "Instagram",
      url: "https://www.instagram.com/slaysuki_tcg/",
      icon: <InstagramLogoIcon />,
      // poke: <Charizard />
    },
  ];
  return <div className="mt-8"><Link items={items} /></div>;
};

export default Links;
