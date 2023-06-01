import React, { useEffect } from "react";
import Image from "next/image";
// import ViSitePrev2.movdeo from 'next/video'
import Link from "next/link";
import classNames from "../../utils/classNames";
import twitchGif from "../../public/assets/SitePrev.gif";
// import ReactPlayer from "react-player";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(
  () => import("react-player/youtube"),
  { ssr: false } // This will load the component only on client side
);

type BackCardProps = {
  hover: boolean;
  handleHover: () => void;
  subtitle: { word: string; delay: string }[];
  hoverStyle: React.CSSProperties;
  initialStyle: React.CSSProperties;
  flipped: boolean;
};
const SpecialBack: React.FC<BackCardProps> = (props) => {
  const { hover, handleHover, flipped, subtitle, hoverStyle, initialStyle } =
    props;
  console.log("flipped", flipped);
  useEffect(() => {
    console.log("flipped", flipped);
  }, [flipped]);
  return (
    <div
      id='card'
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={classNames(
        flipped ? "visible" : "invisible",
        "border-[rgb(3,169,244)] group aspect-[1/1.6] border-[0.5vmin] cursor-pointer relative w-[56vmin] hover:border-transparent hover:shadow-2xl transition-all duration-500 ease-in-out hover:before:bg-[100%_100%] hover:before:scale-[1.08,1.03] bg-white"
      )}
    >
      {/* <div
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
      ></div> */}

      {/* <div id='card-content' className=" group-hover:bg-[-10%,0%]"> */}
      <div
        id='card-content'
        className={classNames(
          !flipped
            ? "opacity-0 transition-opacity duration-[100ms] ease-in-out"
            : "opacity-100",
          " relative h-[calc(100%-0vmin)] p-[3.5vmin] w-[calc(100%-0vmin)] z-10 transition-all duration-500 ease-in-out group-hover:bg-[-10%,0%] overflow-x-scroll scrollbar-hide"
        )}
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.2) 8%, transparent 8%)",
          backgroundPosition: hover ? "-10% 0%" : "0% 0%",
          backgroundSize: "5vmin 5vmin",
        }}
      >
        <div className=' flex flex-col w-full items-start justify-center pt-3'>
          <h3
            id='card-title'
            className=' text-black font-[600] m-0 text-[2.5vmin]'
          >
            Twitch Clone Project Description
          </h3>
          <div className=' text-[1.05rem] text-justify pt-2'>
            The purpose of this project was to demonstrate my acquired
            competencies from the Odin Project and further advance my
            understanding through independent exploration. While the assignment
            required the replication of a frequently used social media platform,
            I opted for twitch.tv as my model, given my extensive engagement
            within numerous streaming communities during and post-college.{" "}
            <br></br>
            <br></br>
            The cornerstone of my development skill progression has been the T3
            Stack, which is not part of the Odin Project's curriculum but has
            served as a critical resource throughout my learning journey. The
            stack comprises Next.js, Tailwind, PrismaDb, tRPC, next-Auth,
            react-query, among others.<br></br>
            <div className='float-right  flex  ml-1 mr-1 mt-1'>
              {/* <Image
                // src={`/assets/SitePrev.gif`}
                src={twitchGif}
                className='object-cover transform translate-x-[0.0rem] w-[22.2vmin]'
                // width={"2rem"}
                // height={"2rem"}
                // className='w-full flex object-cover'
              /> */}
              {/* <video
                // src='/assets/SitePrev2.mov'
                loop
                muted
                autoPlay={true}
                playsInline
                controls={false}
                className='object-cover transform translate-x-[0.0rem] w-[52.2vmin]'
              > */}
              <ReactPlayer
                // url='https://youtu.be/KF4LE-BMMe8'
                url='https://www.youtube.com/watch?v=KF4LE-BMMe8'
                controls={false}
                playing={true}
                loop={true}
                width='100%'
                height='100%'
              />
              {/* <iframe
                width='560'
                // className='object-cover transform translate-x-[0.0rem] w-[52.2vmin]'
                className='w-full aspect-w-16 aspect-h-9'
                height='315'
                src='https://www.youtube.com/embed/KF4LE-BMMe8'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              ></iframe> */}
              {/* </video> */}
            </div>
            <br></br>
            <div className=' text-start text-[1.05rem]'>
              A significant learning milestone was the realization of SQL's
              power despite its perceived complexity compared to no-SQL. Despite
              this, time constraints led me to adopt tRPC and Prisma,
              {/* <div className='flex w-[75%] pl-1'> */}
              {/* <div className='float-left overflow-hidden flex h-[36vmin] mr-4 w-[40.2vmin]'> */}
              enabling me to utilize my foundational knowledge of databases
              while benefiting from next auth's user-friendliness and
              TypeScript's type safety.<br></br>
              <br></br>
              The Twitch clone can be segmented into three main components for
              brevity, even though the user pages technically offer infinite
              possibilities.
            </div>
          </div>
        </div>
        <div className='pt-3 flex flex-col w-full items-start justify-center text-justify'>
          <div className='flex w-full justify-start items-end'>
            <h4
              id='card-title'
              className=' text-black font-[500] m-0 text-[2.5vmin] whitespace-nowrap'
            >
              Home Page
            </h4>
            {/* <div className='flex w-full pl-1'>
              <Image
                // src={`/assets/SitePrev.gif`}
                src={twitchGif}
                // width={"2rem"}
                // height={"2rem"}
                // className='w-full flex object-cover'
              />
            </div> */}
          </div>
          <p className='pt-2 text-[1.05rem]'>
            Constructing the user interface (UI) proved more intricate than
            initially anticipated, especially the creation of the spotlight
            slider and the card-lift effect for suggested streamers and game
            category cards. Despite several refreshes and asynchronous data
            calls, I successfully ensured smooth data flow and component
            construction using lazy loading and skeleton components. tRPC and
            Prisma played crucial roles in facilitating back-end operations,
            enabling easier site modifications and augmentations compared to
            solely relying on Express or Next.js' default routes.
          </p>
        </div>
        <div className=' pt-3 flex flex-col w-full items-start justify-center text-justify'>
          <h5
            id='card-title'
            //   className=' text-black font-[400] m-0 text-[4.5vmin]'
            className=' text-black font-[500] m-0 text-[2.5vmin]'
          >
            Stream Page
          </h5>
          <p className='pt-2 text-[1.05rem]'>
            This section can be succinctly described as a result of "Webhooks
            and Websockets". My introduction to these technologies came about
            while developing the site, particularly in managing the data flow
            when a user uploads a video, which requires storage of a temporary
            value in the database, handled by the webhook. The chatroom's speed
            and efficiency were greatly enhanced by Pusher, enabling the
            seamless handling of a large volume of messages in a cost-effective
            manner.
          </p>
        </div>
        <div className=' pt-3 flex flex-col w-full items-start justify-center text-justify'>
          <h6
            id='card-title'
            className=' text-black font-[500] m-0 text-[2.5vmin]'
          >
            Mobile Page
          </h6>
          <p className='pt-2 text-[0.95rem]'>
            The Mobile Home posed a unique challenge, as I initially struggled
            to replicate Twitch's device recognition and sizing due to devtools
            usage. However, I eventually managed to closely emulate Twitch's
            device management strategies.
          </p>
        </div>
        <div className=' flex flex-col w-full items-start justify-center pt-3'>
          <a
            id='card-title'
            className=' text-black font-[500] m-0 text-[2.5vmin]'
          >
            Closing Notes
          </a>
          <p className='pt-2 text-[1.05rem] text-justify'>
            A primary focus throughout this project was maintaining a
            lightweight codebase without compromising the application's
            integrity, significantly influencing my choice of technologies.
            Although this project was initially daunting, the learning
            experience and outcome have been profoundly rewarding. There's a
            long list of pending updates, improvements, and modifications that I
            plan to address. For further insights into the project criteria or
            other student submissions, please follow this{" "}
            <Link
              href={"https://www.theodinproject.com/lessons/nodejs-odin-book"}
            >
              link
            </Link>
            .
          </p>
        </div>
        {/* <h4
          id='card-subtitle'
          className=' text-white font-[400] m-0 mt-[2vmin] text-[3vmin]'
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
        </h4> */}
      </div>
      {/* <div
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
      </div> */}
    </div>
  );
};

export default SpecialBack;
