import FightScene from "../assets/FightScene1.webp";

const ImageBlock = () => {
  return (
    <img
      src={FightScene}
      alt="The best fight scene in pokemon"
      className="h-full w-full grayscale rounded-xl"
      loading="lazy"
      decoding="async"
    />
  );
};

export default ImageBlock;
