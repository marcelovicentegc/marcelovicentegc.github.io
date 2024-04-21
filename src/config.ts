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
    href: "mailto:marcelovicentegc@pm.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
