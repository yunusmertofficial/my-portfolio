import Image from "next/image";

const DevImg = ({
  containerStyles,
  imgSrc,
}: {
  containerStyles?: string;
  imgSrc: string;
}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image
        src={imgSrc}
        fill
        priority
        className="-rotate-6"
        alt="Yunus Emre Mert"
      />
    </div>
  );
};

export default DevImg;
