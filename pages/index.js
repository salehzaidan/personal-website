import Head from "next/head";
import Image from "next/image";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoMail,
} from "react-icons/io5";

import ProfilePicture from "../assets/zaidan.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <section className="flex flex-col items-center justify-center bg-dark pt-8 text-white sm:flex-row sm:pt-0">
          <div className="shrink-0">
            <h2 className="text-[2.5rem] leading-tight">
              Hi there!
              <br />
              I&apos;m{" "}
              <span className="text-5xl font-semibold text-primary">
                Zaidan
              </span>
            </h2>
            <p className="mt-4 text-xl font-semibold">
              AI and Web Dev
              <br />
              enthusiast
            </p>
            <p className="mt-2 text-xl">from Indonesia</p>
          </div>
          <Image
            src={ProfilePicture}
            alt="Profile Picture"
            width={416}
            height={416}
          />
        </section>

        <section className="bg-darker py-7 text-white sm:py-28">
          <div className="mx-auto max-w-screen-sm px-4">
            <h2 className="mb-4 text-xl font-semibold text-primary">
              About me
            </h2>
            <p className="text-justify">
              Zaidan is an Engineering Physics undergraduate student with great
              interest in technology. He has some experience in artificial
              intelligence (mostly in computer vision and deep learning),
              fullstack web development, and other areas related to the current
              technology trends. However there are still a lot of knowledge to
              be learned so he is very open and eager to learn more.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-dark py-8 text-white">
        <ul className="mx-auto flex justify-center gap-4">
          <li>
            <a
              href="mailto:salehzaidan64@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary focus:text-primary"
            >
              <IoMail size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/saleh-zaidan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary focus:text-primary"
            >
              <IoLogoLinkedin size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/salehzaidan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary focus:text-primary"
            >
              <IoLogoGithub size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/salehzaidan_"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary focus:text-primary"
            >
              <IoLogoInstagram size={20} />
            </a>
          </li>
        </ul>
        <p className="mt-4 text-center text-sm">
          &copy; 2022 Saleh Zaidan <br />
          All rights reserved
        </p>
      </footer>
    </div>
  );
}
