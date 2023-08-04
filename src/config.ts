import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://marcelovicentegc.com/",
  author: "Marcelo Cardoso",
  desc: "A versatile software engineer and code crafter.",
  title: "@marcelovicentegc",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

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
