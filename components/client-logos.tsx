import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";

const ClientLogos: React.FC = () => {
  return (
    <>
      <SliderContainer initialOffsetX={0} className={""} contentWidth={1290}>
        <SliderItem width={1290}>
          <Image
            src="/assets/logos/javascriptLogo.png"
            width={150}
            height={50}
            alt="Javascript"
            objectFit="contain"
          />
          <Image
            src="/assets/logos/cssLogo.png"
            width={150}
            height={50}
            alt="Javascript"
            objectFit="contain"
          />
          <Image
            src="/assets/logos/typeLogo.png"
            width={150}
            height={50}
            alt="Javascript"
            objectFit="contain"
          />
          <Image
            src="/assets/logos/solidityLogo.png"
            width={150}
            height={50}
            alt="Javascript"
            objectFit="contain"
          />
          <Image
            src="/assets/logos/html5Logo.png"
            width={150}
            height={50}
            alt="Javascript"
            objectFit="contain"
          />
          <Image
            src="/assets/logos/snowpackLogo.png"
            width={150}
            height={50}
            alt="Javascript"
            objectFit="contain"
          />
          <Image
            src="/assets/logos/nextLogo.svg"
            width={150}
            height={50}
            alt="Javascript"
            objectFit="contain"
          />
          <Image
            src="/assets/logos/nodeLogo.png"
            width={150}
            height={50}
            alt="Javascript"
            objectFit="contain"
          />
          <Image
            src="/assets/logos/reactLogo.png"
            width={150}
            height={50}
            alt="Javascript"
            objectFit="contain"
          />
          <Image
            src="/assets/logos/gitLogo.png"
            width={150}
            height={50}
            alt="Javascript"
            objectFit="contain"
          />
          <Image
            src="/assets/logos/mongodbLogo.png"
            width={150}
            height={50}
            alt="Javascript"
            objectFit="contain"
          />
        </SliderItem>
      </SliderContainer>
    </>
  );
};

export default ClientLogos;
