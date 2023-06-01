import React from "react";
import { Tile, TileWrapper, TileContent, TileBackground } from "./tile";
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight,
} from "./work";
import Image from "next/image";

const Works = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer progress={progress}>
            <WorkLeft progress={progress}>
              <div>Building today&apos;s</div>
              <div className='text-3xl md:text-4xl font-semi-bold tracking-tight'>
                <WorkLink href={""}>Mobile ready app&apos;s</WorkLink>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div>
                <Image
                  src='/assets/mobile1.png'
                  layout='responsive'
                  width={820}
                  height={1631}
                ></Image>
              </div>
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkContainer progress={progress}>
            <WorkLeft progress={progress}>
              <div>Maintaining multiple</div>
              <div className='text-3xl md:text-4xl font-semi-bold tracking-tight'>
                <WorkLink href={""}>community projects.</WorkLink>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div>
                <Image
                  src='/assets/logos/zmLogo.png'
                  layout='responsive'
                  width={510}
                  height={117}
                ></Image>
              </div>
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <WorkContainer progress={progress}>
            <WorkLeft progress={progress}>
              <div>Alumni of:</div>
              <div className='text-3xl md:text-4xl font-semi-bold tracking-tight'>
                <WorkLink href={""}>The University of Missouri</WorkLink>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div>
                <Image
                  src='/assets/logos/mizzouLogo.png'
                  layout='responsive'
                  width={768}
                  height={858}
                ></Image>
              </div>
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;
