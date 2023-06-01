import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./SpecialCard.module.css";
import { ScrollContext } from "../../utils/use-animation-frame";
import Image from "next/image";
import { useWindowSize } from "../../utils/useWindowSize";
import SpecialFront from "../specialCardFront";
import SpecialBack from "../specialCardBack";
import FlipCard from "../flipCard";
type CardWords = {
  word: string;
  delay: string;
  //   opacity: number;
  //   transform: string;
};

const SpecialCard: React.FC = () => {
  const [hover, setHover] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const { scrollY } = useContext(ScrollContext);
  const { width, height } = useWindowSize();
  const subtitleRef = useRef(null);
  const [subtitle, setSubtitle] = useState<CardWords[] | []>([]);
  const [grid, setGrid] = useState<number[][] | []>([]);
  const growStages = [1000, 1500, 2000, 2500, 3000];
  const flipStages = [4000, 4500, 5000, 5500, 6000];
  const [clicks, setClicks] = useState(0);
  const [mobileClicked, setMobileClicked] = useState(false);
  // const isMobile = window && window.innerWidth <= 768;
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  console.log(scrollY);
  const growProgress = growStages.map((stage, i, arr) =>
    Math.min(
      1,
      Math.max(0, (scrollY - (arr[i - 1] || 0)) / (stage - (arr[i - 1] || 0)))
    )
  );
  const flipProgress = flipStages.map((stage, i, arr) =>
    Math.min(
      1,
      Math.max(
        0,
        (scrollY - (arr[i - 1] || growStages[growStages.length - 1])) /
          (stage - (arr[i - 1] || growStages[growStages.length - 1]))
      )
    )
  );
  const size = 0.2 + 0.2 * growProgress.reduce((a, b) => a + b, 0);
  const opacity = 0.5 + 0.1 * growProgress.reduce((a, b) => a + b, 0);
  const flipDegrees = flipProgress.reduce((a, b) => a + b, 0) * 180;
  const flip = `rotateY(${flipDegrees}deg)`;
  const initialStyle = useRef({
    transition: `opacity 0ms, transform 200ms cubic-bezier(.90, .06, .15, .90)`,
    opacity: 0,
    transform: "translateY(40%)",
  }).current;
  const hoverStyle = useRef({
    transition: `opacity 0ms, transform 200ms cubic-bezier(.90, .06, .15, .90)`,
    opacity: 1,
    transform: "translateY(0)",
  }).current;

  const handleHover = () => {
    setHover(!hover);
  };
  const handleClick = () => {
    let newClicks = clicks + 1;
    setClicks(newClicks);

    if (isMobile) {
      switch (newClicks % 3) {
        case 1:
          // Handle first click (color animation)
          setHover(true);
          setFlipped(false);
          break;
        case 2:
          // Handle second click (card flip)
          setHover(true);
          setFlipped(true);
          break;
        case 0:
          // Handle third click (flip back)
          setHover(false);
          setFlipped(false);
          break;
        default:
          break;
      }
    } else {
      // Handle non-mobile click
      setFlipped(!flipped);
    }
  };
  // const handleClick = () => {
  //   if (isMobile) {
  //     // increment clicks
  //     setClicks(clicks + 1);
  //     // if clicks is a multiple of 3, reset to initial state
  //     if (clicks % 3 === 0) {
  //       setHover(false);
  //       setFlipped(false);
  //     }
  //     // if clicks is odd, set hover
  //     else if (clicks % 2 === 1) {
  //       setHover(true);
  //       setFlipped(false);
  //     }
  //     // if clicks is even and not a multiple of 3, set flipped
  //     else {
  //       setHover(true);
  //       setFlipped(true);
  //     }
  //   } else {
  //     setFlipped(!flipped);
  //   }
  // };

  // const handleClick = () => {
  //   console.log("isMobile", isMobile);
  //   if (isMobile) {
  //     if (hover) {
  //       setFlipped(!flipped);
  //     } else {
  //       setHover(true);
  //     }
  //   } else {
  //     setFlipped(!flipped);
  //   }
  // };
  useEffect(() => {
    console.log("flippeddd", flipped);
    if (flipped && isMobile) {
      setHover(false);
    }
  }, [flipped]);

  useEffect(() => {
    const text =
      "Or at least my attempt at one. Tap or click for details... :)";
    const words = text.split(" ").map((word, index) => ({
      word: `${word} `,
      delay: `${index * 40}ms`,
      //   opacity: 0,
      //   transform: "translateY(40%)",
    }));

    setSubtitle(words);

    if (width && height) {
      const numRows = Math.ceil(height / 50);
      const numCols = Math.ceil(width / 50);

      let tempGrid: number[][] = Array(numRows)
        .fill(null)
        .map(() => Array(numCols).fill(0));

      setGrid(tempGrid);
    }
  }, [width, height]);

  return (
    <div
      id='card-body'
      className=' bg-[rgb(10,10,10)  grid h-[100vh] m-0 p-0 place-items-center'
      onClick={handleClick}
    >
      <FlipCard
        flipped={flipped}
        frontContent={
          <SpecialFront
            hover={hover}
            handleHover={handleHover}
            subtitle={subtitle}
            hoverStyle={hoverStyle}
            initialStyle={initialStyle}
          />
        }
        backContent={
          <SpecialBack
            hover={hover}
            handleHover={handleHover}
            subtitle={subtitle}
            hoverStyle={hoverStyle}
            initialStyle={initialStyle}
            flipped={flipped}
          />
        }
      />
    </div>
  );
};

export default SpecialCard;
