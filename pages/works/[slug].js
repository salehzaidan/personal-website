import Image from "next/image";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import { fetchSlugs, fetchWork } from "../../lib/works";

export default function Work({ work }) {
  const router = useRouter();
  const { slug } = router.query;
  const year = new Date(work.date).getFullYear();

  return (
    <Layout>
      <section className="mx-auto max-w-screen-sm space-y-8 py-7 px-4 sm:py-28">
        <div className="mb-4 flex justify-between font-semibold text-primary">
          <h2 className="text-2xl">{work.name}</h2>
          <p className="text-xl">{year}</p>
        </div>
        <p>{work.description}</p>
        <div className="flex flex-wrap gap-4">
          {work.stack.map((stack) => (
            <div
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-darker"
              key={stack}
            >
              {stack}
            </div>
          ))}
        </div>
        {work.images.map((image) => (
          <div
            className="relative mx-auto aspect-video shadow-xl"
            key={image.src}
          >
            <Image
              src={`/images/${slug}/${image.src}`}
              alt={image.alt}
              layout="fill"
            />
          </div>
        ))}
      </section>
    </Layout>
  );
}

export function getStaticPaths() {
  return {
    paths: fetchSlugs().map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export function getStaticProps({ params }) {
  return {
    props: { work: fetchWork(params.slug) },
  };
}
