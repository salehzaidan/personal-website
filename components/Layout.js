import Head from "next/head";
import Link from "next/link";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoMail,
} from "react-icons/io5";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-dark py-8 text-white">
        <nav className="mx-auto flex max-w-screen-sm justify-end gap-8 px-4">
          <Link href="/">
            <a className="hover:text-primary">Home</a>
          </Link>
          <Link href="/works">
            <a className="hover:text-primary">Works</a>
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
    </>
  );
}