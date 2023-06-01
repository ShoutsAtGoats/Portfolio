import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Masthead from "../components/masthead";
import AboutUs from "../components/aboutus";
import Skills from "../components/skills";
import Works from "../components/works";
import TrustedBy from "../components/trustedby";
import ContactUs from "../components/contactus";
// import { GithubCard } from "../components/testCard";
import { GithubCard } from "../components/githubCard";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Donald Groce</title>
        <meta name='My Full Stack Site' content='Created using Next' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Masthead />
      <AboutUs />
      <Skills />
      <Works />
      <TrustedBy />
      <GithubCard />
      <ContactUs />
      <footer className='mb-3 mt-3 flex flex-col items-center justify-center'>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{" "}
          <span>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
