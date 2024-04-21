export interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  href: string;
}

export const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "VTEX",
    period: "January/2021 - Present",
    achievements: [
      "I've been deeply involved in the evolution of the VTEX Admin Platform and its application development toolkit, key components of the VTEX ecosystem.",
      "I was responsible for enabling many teams to ship fast applications to the VTEX Admin, by providing them with the necessary tools and infrastructure.",
      "I've shipped products and features spanning from design systems, dev tools, micro-frontend frameworks, messaging and data ingestion services to AI-powered features.",
    ],
    href: "https://vtex.com",
  },
  {
    title: "Creator",
    company: "Eu tive um sonho",
    period: "August/2022 - Present",
    achievements: [
      "This social network is a personal endeavor that I've been working on in my free time. It's a platform where users can share their dreams (the ones we have while sleeping), and connect with others through their dreams.",
      "This project is a way for me to learn new technologies and experiment with new ideas and tools, especially in the AI and NLP fields. I'm using GPT-3 to generate dream interpretations and most recently I've been exploring techniques to improve the quality of the interpretations, such as Human-in-the-Loop, RAG and usage of open-source AI models.",
    ],
    href: "https://eutiveumsonho.com",
  },
  {
    title: "Software Engineer",
    company: "Cubos",
    period: "May/2019 - January/2021",
    achievements: [
      "At Cubos, I had the chance to work and contribute to a variety of projects on the ecommerce, fintech and edtech industries, using a variety of frameworks such as React + Node.js and Django.",
      "I've developed the ecommerce of the largest dancing platform from Brazil, FitDance, and the backend services and frontend platforms (B2B and B2C) for the largest credit consignment platform of Brazil's Northeast Region, Credcesta.",
    ],
    href: "https://cubos.io",
  },
];
