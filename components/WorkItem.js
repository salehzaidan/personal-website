import Image from "next/image";

export default function WorkItem({ work }) {
  return (
    <article className="text-center" key={work.name}>
      <div className="relative aspect-video max-w-xs shadow-xl">
        <Image
          src={`/images/${work.slug}/${work.thumbnail}`}
          alt={work.name}
          layout="fill"
          priority
        />
      </div>
      <h3 className="mt-4 font-semibold">{work.name}</h3>
      <p className="mt-2">{work.description}</p>
    </article>
  );
}
