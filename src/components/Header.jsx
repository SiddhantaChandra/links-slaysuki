import React from "react";
import logo from "../assets/logo.webp";

const Header = () => {
  return (
    <div>
      <header className="flex flex-col items-center mt-8">
        <div className="w-24 h-24">
          <img
            className="w-full h-full object-contain rounded-full border-2 border-neutral-700"
            src={logo}
            alt="Slaysuki Logo"
            loading="lazy"
          />
        </div>
        <h1 className="text-2xl font-medium tracking-tight uppercase mt-4">
          Slaysuki
        </h1>
        <p className="text-neutral-400">Swirls & Chase</p>
      </header>
    </div>
  );
};

export default Header;
