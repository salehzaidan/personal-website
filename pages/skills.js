import { Icon } from "@iconify/react";
import fs from "fs";
import { useState } from "react";
import YAML from "yaml";

import Layout from "../components/Layout";
import SectionHeading from "../components/SectionHeading";

export default function Skills({ skills }) {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <Layout title="My skills">
      <section className="mx-auto max-w-screen-sm py-16">
        <SectionHeading>Skills</SectionHeading>
        <div className="grid auto-cols-fr grid-flow-col gap-8">
          {skills.map((skill) => (
            <button
              className={`flex min-h-[7.625rem] flex-col items-center justify-center gap-2.5 rounded bg-dark p-3 shadow-md hover:text-primary-400 hover:brightness-90 ${
                skill === activeSkill ? "text-primary-400 brightness-90" : ""
              }`}
              onClick={() => {
                setActiveSkill(skill);
              }}
              key={skill.slug}
            >
              <Icon icon={skill.icon} className="h-12 w-12" />
              <h3 className="text-center text-sm font-semibold">
                {skill.name}
              </h3>
            </button>
          ))}
        </div>
        {activeSkill && (
          <p className="mt-8 text-justify">{activeSkill.description}</p>
        )}
      </section>
    </Layout>
  );
}

export function getStaticProps() {
  const skills = fs
    .readdirSync("assets/skills", "utf-8")
    .map((filename) => {
      const rawSkill = fs.readFileSync(`assets/skills/${filename}`, "utf-8");
      const skill = YAML.parse(rawSkill);
      const slug = filename.replace(/\.yaml/, "");
      return {
        ...skill,
        slug,
      };
    })
    .sort((a, b) => a.order - b.order);

  return {
    props: { skills },
  };
}
