import fs from "fs";
import Image from "next/image";
import YAML from "yaml";

import Layout from "../components/Layout";

export default function Works({ works }) {
  return (
    <Layout>
      <section className="mx-auto max-w-screen-sm py-32">
        <h2 className="mb-4 text-xl font-semibold text-primary">My works</h2>
        <div className="grid grid-cols-[minmax(0,_320px)] justify-center gap-8 sm:grid-cols-2">
          {works.map((work) => (
            <article className="text-center" key={work.name}>
              <div className="relative flex aspect-video items-center justify-center bg-gray-200 text-center text-xl font-semibold text-black shadow-xl">
                <Image
                  src={`/images/${work.slug}/${work.thumbnail}`}
                  alt={work.name}
                  layout="fill"
                />
              </div>
              <h3 className="mt-4 font-semibold">{work.name}</h3>
              <p className="mt-2">{work.description}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export function getStaticProps() {
  const filenames = fs.readdirSync("works", "utf-8");
  const works = filenames
    .map((filename) => {
      const rawData = fs.readFileSync(`works/${filename}`, "utf-8");
      const slug = filename.replace(/\.yaml/, "");
      return {
        ...YAML.parse(rawData),
        slug,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: { works },
  };
}
