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
      "I'm one of the key players responsible for enabling dozens of teams within VTEX to ship fast applications to the VTEX Admin (a large micro-frontend framework), fast, by providing them with the necessary tools and infrastructure.",
      "This includes delivering a tool that reduced time-to-market of Admin Apps by 10x, a design system that abstracts most of the complexity of building Admin Apps UIs, used by hundreds of developers, and defining the architecture, provisioning and best practices for building Admin Apps.",
      "I've shipped products and features of all kinds, from CLI tools and JavaScript libraries, to Node.js services and React applications. For instance, I've shipped a Global Search feature on the Admin that saves 360h of our customers' time per month, a CLI that automated the migration of +100k accounts into the new Admin version and a micro-service that streamlined observability data ingestion for front-end applications from at least 5 times into VTEX's intricate observability platform, and much more!",
      "Last but not least, I've experimented with new technologies and tools as part of product discoveries, such as creating an AI Chatbot using LangChain and applying RAG to it, as well as developing a notifications system to enable real-time communication between Admin Apps and customers.",
    ],
    href: "https://vtex.com",
  },
  {
    title: "Creator",
    company: "Eu tive um sonho",
    period: "August/2022 - Present",
    achievements: [
      "This social network is a personal endeavor that I've been working on in my free time. It's a platform where users can share their dreams (the ones we have while sleeping), and connect with others through their dreams.",
      "This project is a way for me to learn new technologies and experiment with ideas and tools, especially in the AI and NLP fields. I'm using GPT-3 to generate dream interpretations and most recently I've been exploring techniques to improve the quality of the interpretations, such as Human-in-the-Loop, RAG and usage of open-source AI models.",
    ],
    href: "https://eutiveumsonho.com",
  },
  {
    title: "Software Engineer",
    company: "Cubos",
    period: "May/2019 - January/2021",
    achievements: [
      "At Cubos, I had the chance to work and contribute to a variety of projects on the ecommerce, fintech and edtech industries, using frameworks and technologies such as React, Node.js and Django, among others.",
      "While at Cubos, I developed the ecommerce of the largest dancing platform from Brazil, FitDance, and enabled them to efficiently manage their ecommerce operations for their (at the time) +200k customers.",
      `I was also responsible for developing a series of backend services and frontend platforms for the largest "Crédito Consignado" (Payroll Deduction Loan) platform of Brazil's public sector workforce on the Northeast Region, Credcesta, enabling the company to manage and process thousands of loans per month for their (at the time) 40k customers.`,
    ],
    href: "https://cubos.io",
  },
];
