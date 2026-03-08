import Link from "./Link";
import WebsiteLogo from "../assets/SLAYSUKI.webp";
import InstagramLogo from "../assets/instagram-logo.webp";


const WebsiteLogoIcon = () => {
  return <img src={WebsiteLogo} alt="Slaysuki Website Logo" className="h-8 w-8" />;
};

const InstagramLogoIcon = () => {
  return <img src={InstagramLogo} alt="Instagram Logo" className="h-8 w-8" />;
};

const Links = () => {
  const items = [
    {
      id: 1,
      label: "Website",
      url: "https://slaysuki.com",
      icon: <WebsiteLogoIcon />,
    },
    {
      id: 2,
      label: "Instagram",
      url: "https://www.instagram.com/slaysuki_tcg/",
      icon: <InstagramLogoIcon />,
    },
  ];
  return <div className="mt-8"><Link items={items} /></div>;
};

export default Links;
