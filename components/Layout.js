import Head from "next/head";
import Link from "next/link";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoMail,
} from "react-icons/io5";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} - Saleh Zaidan`
            : "Saleh Zaidan - AI, IoT, and Web Dev enthusiast"}
        </title>
        <meta
          name="description"
          content="Saleh Zaidan - AI, IoT, and Web Dev enthusiast"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <header className="bg-dark py-8 text-white">
        <nav className="mx-auto flex max-w-screen-sm justify-end gap-8 px-4">
          <Link href="/">
            <a className="hover:text-primary-400 focus:text-primary-400">
              Home
            </a>
          </Link>
          <Link href="/works">
            <a className="hover:text-primary-400 focus:text-primary-400">
              Works
            </a>
          </Link>
          <Link href="/skills">
            <a className="hover:text-primary-400 focus:text-primary-400">
              Skills
            </a>
          </Link>
        </nav>
      </header>

      <main className="min-h-screen bg-darker text-white">{children}</main>

      <footer className="bg-dark py-8 text-white">
        <ul className="mx-auto flex justify-center gap-4">
          <li>
            <a
              href="mailto:salehzaidan64@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary-400 focus:text-primary-400"
            >
              <IoMail size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/saleh-zaidan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary-400 focus:text-primary-400"
            >
              <IoLogoLinkedin size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/salehzaidan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary-400 focus:text-primary-400"
            >
              <IoLogoGithub size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/salehzaidan_"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary-400 focus:text-primary-400"
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
    </>
  );
}
