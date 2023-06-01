import React, { useEffect, useState } from "react";
import classNames from "../../utils/classNames";

type Props = {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  flipped: boolean;
  //   handleFlip?: () => void;
};

const FlipCard: React.FC<Props> = ({ flipped, frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  //   useEffect(() => {
  //     console.log("isFlipped", isFlipped);
  //   }, [isFlipped]);

  return (
    <div
      className='relative flex w-full h-full items-center justify-center cursor-pointer'
      style={{ perspective: 1000 }}
      // onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className='absolute  flex items-center justify-center'
        style={{
          backfaceVisibility: "hidden",
          transform: `rotateY(${flipped ? 180 : 0}deg)`,
          transition: "transform 0.6s",
        }}
      >
        {frontContent}
      </div>

      <div
        className='absolute  flex items-center justify-center'
        style={{
          backfaceVisibility: "hidden",
          transform: `rotateY(${flipped ? 0 : -180}deg)`,
          transition: "transform 0.6s",
        }}
      >
        {backContent}
      </div>
    </div>
  );
};

export default FlipCard;
