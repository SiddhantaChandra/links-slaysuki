import React from "react";
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div>
      <header className="flex flex-col items-center mt-8">
        <div className="w-24 h-24 bg-white/15 rounded-full p-2 border border-neutral-700">
          <img
            className="w-full h-full object-contain"
            src={logo}
            alt="Slaysuki Logo"
          />
        </div>
        <h1 className="text-2xl font-medium tracking-tight uppercase mt-4">Slaysuki</h1>
        <p className="text-neutral-400">Swirls & Chase</p>
      </header>
    </div>
  );
};

export default Header;
