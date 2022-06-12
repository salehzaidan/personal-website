import Layout from "../../components/Layout";
import SectionHeading from "../../components/SectionHeading";
import WorkItem from "../../components/WorkItem";
import { fetchWorks } from "../../lib/works";

export default function Works({ works }) {
  return (
    <Layout title="My works">
      <section className="mx-auto max-w-screen-sm py-16">
        <SectionHeading>My works</SectionHeading>
        <div className="grid grid-cols-[minmax(0,_320px)] justify-center gap-8 sm:grid-cols-2">
          {works.map((work) => (
            <WorkItem work={work} priority={true} key={work.slug} />
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
