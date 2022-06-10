import Image from "next/image";
import Link from "next/link";

export default function WorkItem({ work }) {
  return (
    <Link href={`works/${work.slug}`} key={work.name}>
      <a className="group text-center hover:text-primary focus:text-primary">
        <div className="relative aspect-video max-w-xs shadow-xl transition group-hover:brightness-75 group-focus:brightness-75">
          <Image
            src={`/images/${work.slug}/${work.thumbnail}`}
            alt={work.name}
            layout="fill"
            priority
          />
        </div>
        <h3 className="mt-4 font-semibold">{work.name}</h3>
        <p className="mt-2">{work.description}</p>
      </a>
    </Link>
  );
}
