import Layout from "../../components/Layout";
import WorkItem from "../../components/WorkItem";
import { fetchWorks } from "../../lib/works";

export default function Works({ works }) {
  return (
    <Layout>
      <section className="mx-auto max-w-screen-sm py-32">
        <h2 className="mb-4 text-xl font-semibold text-primary-400">
          My works
        </h2>
        <div className="grid grid-cols-[minmax(0,_320px)] justify-center gap-8 sm:grid-cols-2">
          {works.map((work) => (
            <WorkItem work={work} key={work.slug} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export function getStaticProps() {
  return {
    props: { works: fetchWorks() },
  };
}
