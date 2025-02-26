import fs from "fs";
import path from "path";

export async function getDictionary(locale: string) {
  const filePath = path.join(process.cwd(), "locales", `${locale}.json`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}
