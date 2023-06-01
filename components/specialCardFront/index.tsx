import React from "react";
import Image from "next/image";

type FrontCardProps = {
  hover: boolean;
  handleHover: () => void;
  subtitle: { word: string; delay: string }[];
  hoverStyle: React.CSSProperties;
  initialStyle: React.CSSProperties;
};
const SpecialFront: React.FC<FrontCardProps> = (props) => {
  const { hover, handleHover, subtitle, hoverStyle, initialStyle } = props;
  return (
    <div
      id='card'
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className='border-[rgb(3,169,244)] group aspect-[1/1.6] border-[0.5vmin] cursor-pointer relative w-[56vmin] hover:border-transparent hover:shadow-2xl transition-all duration-500 ease-in-out hover:before:bg-[100%_100%] hover:before:scale-[1.08,1.03] backface-hidden'
    >
      <div
        className={`absolute inset-0 z-10 transition-all duration-500 ease-in-out transform ${
          hover ? "scale-[1.08,1.03] bg-gradient-to-r" : " bg-transparent"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(130deg, transparent 0% 33%, rgb(98, 0, 234) 66%, rgb(236, 64, 122) 83.5%, rgb(253, 216, 53)100%)",
          backgroundSize: hover ? "150% 150%" : "300% 300%",
          // backgroundSize: hover ? "0% 0%" : "100% 100%",
          backgroundPosition: hover ? "100% 100%" : "0% 0%",
          // transition: hover ? "backgroundImage 0.5s ease-in-out" : "",
        }}
      ></div>

      {/* <div id='card-content' className=" group-hover:bg-[-10%,0%]"> */}
      <div
        id='card-content'
        className='relative h-[calc(100%-0vmin)] p-[5vmin] w-[calc(100%-0vmin)] 
             z-10 transition-all duration-500 ease-in-out group-hover:bg-[-10%,0%]'
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.2) 8%, transparent 8%)",
          backgroundPosition: hover ? "-10% 0%" : "0% 0%",
          backgroundSize: "5vmin 5vmin",
        }}
      >
        <h3 id='card-title' className=' text-white font-[400] m-0 text-[6vmin]'>
          Twitch.tv Clone
        </h3>
        <h4
          id='card-subtitle'
          className=' text-white font-[400] m-0 mt-[2vmin] text-[3vmin] backface-hidden'
        >
          {subtitle.map((word, index) => (
            <span
              // className={`inline-block relative m-[0vmin_0.3vmin] group-hover:opacity-1 group-hover:translate-y-0 transition-none`}
              className={`inline-block relative m-[0vmin_0.3vmin] transition-none`}
              style={{
                ...(hover ? hoverStyle : initialStyle),
                transitionDelay: `${word.delay}`,
              }}
            >
              {word.word}
            </span>
          ))}
        </h4>
      </div>
      <div
        id='card-icon'
        className='absolute bottom-0 left-0 z-20 transition-transform duration-500 ease-in'
        style={{
          color: "rgba(255, 255, 255, 0.5)",
          fontSize: "7vmin",
          margin: "5vmin",
        }}
      >
        <Image
          src={`/assets/devLogo${hover ? "white" : "white"}.png`}
          width={50}
          height={50}
          className='group-hover:invert'
        />
      </div>
    </div>
  );
};

export default SpecialFront;
