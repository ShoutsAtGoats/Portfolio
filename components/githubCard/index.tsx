import { Card, CardContent, CardWrapper } from "../card";

export const GithubCard: React.FC = () => (
  <CardWrapper numOfPages={1}>
    <CardContent>
      <Card
        page={0}
        renderContent={({ progress }) => (
          <div className='bg-red-500 absolute w-3/4 rounded-lg p-8'>
            <div className='text-3xl md:text-5xl lg:text-6xl tracking-tight font-semibold aspect-[1.6/1]'>
              <div className='leading-[1.15]'>Placeholder card</div>
            </div>
          </div>
        )}
      />
    </CardContent>
  </CardWrapper>
);
// import React, { useRef, useContext, useEffect, useState } from "react";
// import s from "../../styles/githubCard.module.css";
// import { ScrollContext } from "../../utils/use-animation-frame";
// import SpecialCard from "../specialCard";
// // import SpecialCard from './SpecialCard'; // Assuming the path is correct

// const GithubCard: React.FC = () => {
//   const { scrollY } = useContext(ScrollContext);
//   const refContainer = useRef<HTMLDivElement>(null);
//   const [cardTop, setCardTop] = useState("-50vh");

//   const numOfPages = 3;
//   let progress = 0;

//   useEffect(() => {
//     const { current: elContainer } = refContainer;
//     if (elContainer) {
//       const { clientHeight, offsetTop } = elContainer;
//       const screenH = window.innerHeight;
//       const halfH = screenH / 2;
//       const percentY =
//         Math.min(
//           clientHeight + halfH,
//           Math.max(-screenH, scrollY - offsetTop) + halfH
//         ) / clientHeight;
//       progress = Math.min(
//         numOfPages - 0.5,
//         Math.max(0.5, percentY * numOfPages)
//       );

//       let cardTopValue = Math.max(-50, scrollY / 10 - 50);
//       setCardTop(`${cardTopValue}vh`);
//     }
//   }, [scrollY]);

//   return (
//     <div style={{ position: "relative", height: "200vh" }}>
//       <div
//         ref={refContainer}
//         className='bg-black text-white '
//         style={{ position: "absolute", top: cardTop }}
//       >
//         <div
//           className='min-h-screen max-w-5xl mx-auto px-10 lg:px-20
//         py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center
//         text-3xl md:text-5xl lg:text-6xl tracking-tight font-semibold'
//         >
//           <div className='leading-[1.15]'>
//             <SpecialCard />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GithubCard;

// import React, { useRef, useContext } from "react";
// import s from "../../styles/githubCard.module.css";
// import { ScrollContext } from "../../utils/use-animation-frame";

// const opacityForBlock = (sectionProgress: number, blockNo: number) => {
//   const progress = sectionProgress - blockNo;
//   if (progress >= 0 && progress < 1) return 1;
//   return 0.2;
// };

// const GithubCard: React.FC = () => {
//   const { scrollY } = useContext(ScrollContext);
//   const refContainer = useRef<HTMLDivElement>(null);

//   const numOfPages = 3;
//   let progress = 0;

//   const { current: elContainer } = refContainer;
//   if (elContainer) {
//     const { clientHeight, offsetTop } = elContainer;
//     const screenH = window.innerHeight;
//     const halfH = screenH / 2;
//     const percentY =
//       Math.min(
//         clientHeight + halfH,
//         Math.max(-screenH, scrollY - offsetTop) + halfH
//       ) / clientHeight;
//     progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
//   }
//   console.log(scrollY);
//   console.log(scrollY);
//   return (
//     <div ref={refContainer} className='bg-black text-white '>
//       <div
//         className='min-h-screen max-w-5xl mx-auto px-10 lg:px-20
//       py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center
//       text-3xl md:text-5xl lg:text-6xl tracking-tight font-semibold'
//       >
//         <div className='leading-[1.15]'>
//           <div
//             className={s.skillText}
//             style={{
//               opacity: opacityForBlock(progress, 0),
//             }}
//           >
//             {/* Working hard to provide customer satisfaction. */}
//             Building scalable apps, with thoughtful UI and UX.
//           </div>
//           <span
//             className={`${s.skillText} inline-block after:content-['_']`}
//             style={{
//               opacity: opacityForBlock(progress, 0.75),
//             }}
//           >
//             All products have a responsive designed with both cost and
//             scalabilty in mind.
//           </span>
//           <span
//             className={`${s.skillText} inline-block`}
//             style={{
//               opacity: opacityForBlock(progress, 1.5),
//             }}
//           >
//             Finding the right balance of plain javascript, native React apps,
//             and 3rd party plugins is one that involves constant learning. I have
//             worked with a wide range of platforms and continue to update my
//             knowledge and understanding of web development every day. Thank you
//             for taking the time to view my work.
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GithubCard;
