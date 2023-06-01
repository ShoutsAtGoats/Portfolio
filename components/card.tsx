import React, { useRef, useContext, useState, useEffect } from "react";
import { ScrollContext } from "../utils/scroll-observer";
type CardProps = {
  children?: React.ReactNode;
};

interface CardContextValue {
  numOfPages: number;
  currentPage: number;
}

export const CardContext = React.createContext<CardContextValue>({
  numOfPages: 0,
  currentPage: 0,
});

interface CardWrapperProps {
  children?: React.ReactNode;
  numOfPages: number;
}

export const CardWrapper: React.FC<CardWrapperProps> = ({
  numOfPages,
  children,
}) => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);
  let currentPage = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-halfH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    currentPage = percentY * numOfPages;
  }

  return (
    <CardContext.Provider value={{ numOfPages, currentPage }}>
      <div
        ref={refContainer}
        className='relative h-screen overflow-hidden bg-black'
        style={{
          height: numOfPages * 200 + "vh",
        }}
      >
        {children}
      </div>
    </CardContext.Provider>
    //     <CardContext.Provider value={{ numOfPages, currentPage }}>
    //     <div ref={refContainer} className='relative bg-black text-white' style={{ height: numOfPages * 100 + "vh" }}>
    //       {children}
    //     </div>
    //   </CardContext.Provider>
  );
};

export const CardContent: React.FC<CardProps> = ({ children }) => {
  return <div className='sticky top-0 h-full overflow-hidden'>{children}</div>;
};

interface CardProps_ {
  page: number;
  renderContent: (props: { progress: number }) => JSX.Element;
}

interface CardProps_ {
  page: number;
  renderContent: (props: { progress: number }) => JSX.Element;
}

export const Card: React.FC<CardProps_> = ({ page, renderContent }) => {
  const { currentPage, numOfPages } = useContext(CardContext);
  const [lastPos, setLastPos] = useState<number>(0); // Initialize state here
  const progress = Math.max(0, currentPage - page);

  useEffect(() => {
    if (progress <= 1) {
      let cardTopValue = Math.max(0, 10 + progress * 150);
      setLastPos(cardTopValue); // Update state here
    }
  }, [progress]); // Include progress as a dependency

  let cardTop =
    progress > 1 ? `${lastPos}vh` : `${Math.max(0, 10 + progress * 150)}vh`;
  //   let cardLeftValue = -50 + progress * 250;
  let cardLeftValue = Math.min(0, -90 + progress * 200);

  let cardLeft = `${cardLeftValue}vw`;
  return (
    <div
      className='absolute top-0 min-w-[100vw] flex justify-center'
      style={{
        top: cardTop,
        left: cardLeft,
        height: "100vh",
        // maxWidth: "600px",
      }}
    >
      {renderContent({ progress })}
    </div>
  );
};

// export const Card: React.FC<CardProps_> = ({ page, renderContent }) => {
//   const { currentPage, numOfPages } = useContext(CardContext);
//   const progress = Math.max(0, currentPage - page);
//   let cardTop = "-10vh";

//   //   let cardTopValue = Math.min(50, 10 + progress * 60);
//   //   let cardTopValue = Math.min(50, 10 + (1 - progress) * 60);
//   //   let cardTopValue = Math.max(0, 10 + progress * 150);
//   let cardTopValue =
//     progress > 1
//       ? // ? Math.max(0, 10 + progress * 150 * (1 + progress))
//         90
//       : Math.max(0, 10 + progress * 150);
//   //   let cardTopValue = Math.min(90, Math.max(0, 10 + progress * 150));

//   cardTop = `${cardTopValue}vh`;
//   console.log(progress);
//   return (
//     <div
//       className='absolute top-0 w-full'
//       style={{ top: cardTop, height: "100vh", maxWidth: "600px" }}
//     >
//       {renderContent({ progress })}
//     </div>
//   );
// };
