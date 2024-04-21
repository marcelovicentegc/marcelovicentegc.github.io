import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://marcelovicentegc.com/",
  author: "Marcelo Cardoso",
  desc: "Hi, I'm Marcelo! A versatile software engineer with a passion for building things.",
  title: "@marcelovicentegc",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/marcelovicentegc",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/marcelovicentegc",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:marcelovicentegc@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];

export const INTRO = {
  name: "Marcelo Cardoso",
  email: "marcelovicentegc@gmail.com",
  phone: "+55 71 999977711 (WhatsApp only)",
  location: "Currently @ Wellington, New Zealand",
};

export const TAGS = [
  // Languages
  "Javascript",
  "Typescript",
  "Python",
  "Golang",

  // Frameworks
  "React",
  "Node",
  "Next.js",
  "Django",
  "Cypress",
  "LangChain",
  "Gatsy",
  "Astro",

  // Tools
  "Docker",
  "Kubernetes",
  "AWS",
  "Prometheus",
  "Open Telemetry",
  "Grafana",
  "PostgreSQL",
  "MongoDB",
  "Redis",

  // Concepts and fields of study
  "Distributed systems",
  "Micro-services",
  "Micro-frontends",
  "Frontend infrastructure",
  "Automated testing",
  "Automation in general",
  "CI/CD",
  "LLMs",
];
