import fs from "fs";
import YAML from "yaml";

const WORKS_DIR = "works";

export function fetchSlugs() {
  return fs
    .readdirSync(WORKS_DIR, "utf-8")
    .map((filename) => filename.replace(/\.yaml/, ""));
}

export function fetchWorks(limit) {
  return fs
    .readdirSync(WORKS_DIR, "utf-8")
    .map((filename) => {
      const rawWork = fs.readFileSync(`${WORKS_DIR}/${filename}`, "utf-8");
      const work = YAML.parse(rawWork);
      const slug = filename.replace(/\.yaml/, "");
      return {
        ...work,
        slug,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

export function fetchWork(slug) {
  const rawWork = fs.readFileSync(`${WORKS_DIR}/${slug}.yaml`, "utf-8");
  const work = YAML.parse(rawWork);
  return work;
}
