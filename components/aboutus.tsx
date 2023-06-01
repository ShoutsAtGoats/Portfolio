import Link from "next/link";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section
      className={`flex flex-col bg-white py-20 text-3xl md:text-4xl min-h-screen`}
    >
      <div className='container mx-auto px-11'>
        <div className='leading-tight max-w-5xl mx-auto text-4xl tracking-tight'>
          <div className='mt-2 text-[2.05rem] leading-[2.05rem] font-[600]'>
            <strong>Professional and responsive websites.</strong>
          </div>
          <div className='mt-10 text-4xl text-justify text-[2.6vmin] font-[500]'>
            I&apos;m a software engineer who is passionate about designing and
            building the best experience for my users and clients. I am
            constantly learn and/or researching new technologies and improve my
            skills in order to accomplish this. It is always my goal to create
            every platform in a way that is user friendly, with modern
            functionality, contemporary design, and while being mobile friendly.
          </div>

          <div className='mt-10 text-4xl text-justify text-[2.6vmin] font-[500]'>
            {/* <div className='mt-10 text-4xl'> */}
            This website is hosted on <b>Amazon&apos;s AWS</b> platform. using
            the <b>React</b> framework with a <b>Next.js</b> backend. It&apos;s
            written in
            <b>TypeScript</b>, and styled using <b>TailwindCSS</b>, while having
            a backend written in <b>Node.js</b>.
          </div>
        </div>
      </div>
      <div className='container mx-auto px-11 text-center mt-28'>
        <h2>My Work:</h2>
        <div className='mt-4'> &ldquo;Vanilla&rdquo; Projects</div>
        <div className='mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-20'>
          <div>Landing Page</div>
          <div>
            {" "}
            <Link href='https://grocedj.github.io/landingPage/' className=''>
              Click here
            </Link>
          </div>
          <div>Rock, Paper, Scissors</div>
          <Link href='https://grocedj.github.io/landingPage/rps.html'>
            Click here
          </Link>
          <div>Calculator</div>
          <Link
            href='https://grocedj.github.io/landingPage/calculator.html'
            className=''
          >
            Click here
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
