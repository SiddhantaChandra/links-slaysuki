import { ArrowBendDoubleUpRightIcon } from "@phosphor-icons/react";
import CharizardImg from "../assets/Pokemon/charizard.webp";

const Link = ({ items }) => {
  return (
    <div className="min-w-full flex flex-col gap-4 text-white ">
      {items.map((el) => {
        return (
          <a
            href={el.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group py-4 px-6 min-w-full flex justify-between border border-white/70 rounded-lg opacity-85 hover:opacity-100 hover:-translate-y-0.5 hover:scale-x-102 overflow-hidden relative"
          >
            <div className="flex gap-4 items-center">
              {el.icon}
              {el.label}
            </div>
            <img
              src={CharizardImg}
              alt="Charizard"
              className="absolute h-16 left-[50%] top-1/2 
    translate-y-[200%] opacity-0
    group-hover:-translate-y-1/2 group-hover:opacity-100
    transition-all duration-300"
            />
            <ArrowBendDoubleUpRightIcon size={24} />
          </a>
        );
      })}
    </div>
  );
};

export default Link;
