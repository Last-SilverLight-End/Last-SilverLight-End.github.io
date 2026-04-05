import "server-only";
import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import type { PortfolioData } from "@/types/portfolio";

const YAML_PATH = path.join(process.cwd(), "data", "portfolio.yaml");

let cache: PortfolioData | null = null;

export function getPortfolioData(): PortfolioData {
  if (cache && process.env.NODE_ENV === "production") {
    return cache;
  }
  const raw = fs.readFileSync(YAML_PATH, "utf8");
  cache = yaml.load(raw) as PortfolioData;
  return cache;
}
