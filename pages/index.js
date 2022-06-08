import Image from "next/image";

import ProfilePicture from "../assets/zaidan.png";
import Layout from "../components/Layout";
import WorkItem from "../components/WorkItem";
import { fetchWorks } from "../lib/works";

export default function Home({ works }) {
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center bg-dark pt-8 text-white sm:flex-row sm:pt-0">
        <div className="shrink-0">
          <h2 className="text-[2.5rem] leading-tight">
            Hi there!
            <br />
            I&apos;m{" "}
            <span className="text-5xl font-semibold text-primary">Zaidan</span>
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

      <section className="mx-auto max-w-screen-sm space-y-16 px-4 py-7 sm:py-28">
        <div>
          <h2 className="mb-4 text-xl font-semibold text-primary">About me</h2>
          <p className="text-justify">
            Zaidan is an Engineering Physics undergraduate student with great
            interest in technology. He has some experience in artificial
            intelligence (mostly in computer vision and deep learning),
            fullstack web development, and other areas related to the current
            technology trends. However there are still a lot of knowledge to be
            learned so he is very open and eager to learn more.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold text-primary">
            My latest works
          </h2>
          <div className="grid grid-cols-[minmax(0,_320px)] justify-center gap-8 sm:grid-cols-2">
            {works.map((work) => (
              <WorkItem work={work} key={work.slug} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function getStaticProps() {
  return {
    props: { works: fetchWorks(4) },
  };
}
