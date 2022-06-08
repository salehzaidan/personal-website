import fs from "fs";
import YAML from "yaml";

const WORKS_DIR = "works";

export function fetchWorks(limit) {
  const filenames = fs.readdirSync(WORKS_DIR, "utf-8");
  const works = filenames
    .map((filename) => {
      const rawData = fs.readFileSync(`${WORKS_DIR}/${filename}`, "utf-8");
      const slug = filename.replace(/\.yaml/, "");
      return {
        ...YAML.parse(rawData),
        slug,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return works.slice(0, limit || works.length);
}
