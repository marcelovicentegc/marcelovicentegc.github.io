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
      "I played a significant role in implementing the new Admin version redesign, which substantially enhanced VTEX's product appeal. Its state-of-the-art design greatly eased the selling process for VTEX.",
      "I spearheaded numerous product discoveries that led to vital product developments that optimized our system efficiency and user interface.",
      "I was instrumental in creating and maintaining a micro-service to ingest observability data from frontend clients, enabling various teams to have a better understanding of their applications' performance and make data-driven decisions to improve their products.",
      "I took measures to bolster system security by instrumenting the Admin services and creating alarms and dashboards. These tools significantly improved our responsiveness and accuracy during system outages, thereby minimizing downtime and maintaining high service quality.",
      "I equipped the application with analytics data ingestion which generated valuable insights into product usage for the team.",
      "My explorations into micro-frontend architecture and frontend cloud technologies led to the creation of complex MVPs (Minimum Viable Products). These MVPs proved instrumental in guiding key decisions aimed at bolstering system efficiency and improving the developer experience.",
      "I also developed a suite of internal tools designed to automate mundane tasks, thereby boosting efficiency and productivity across various teams. These tools not only streamlined daily operations but also generated valuable insights that were utilized by product managers, designers, and engineers for refining product offerings.",
    ],
    href: "https://vtex.com",
  },
  {
    title: "Creator",
    company: "Eu tive um sonho",
    period: "August/2022 - Present",
    achievements: [
      "As a testament to my passion for creativity and technical experimentation, I founded Eu tive um sonho (eutiveumsonho.com), a unique social network with dreams as its core focus. It serves as a playground for me to continually refine my technical skills and explore innovative ideas.",
      "Despite not being primarily intended for mass user acquisition, the network has organically grown to over 100+ users, with more than 200+ dreams recorded, demonstrating its appeal and user-friendly design.",
      "I've incorporated robust metrics tracking and system health monitoring capabilities to ensure the network's reliability and to glean insights into user behavior and engagement.",
      "While this venture started as a fun project, it has become an invaluable tool for self-improvement and learning in my technology career.",
    ],
    href: "https://eutiveumsonho.com",
  },
  {
    title: "Software Engineer",
    company: "Cubos",
    period: "May/2019 - January/2021",
    achievements: [
      "I spearheaded the implementation of Fitdance's ecommerce frontend, orchestrating a comprehensive transition from the storefront to the backoffice. This strategic migration led to the streamlining of their operations onto a more efficient platform.",
      "My contributions were broad and diverse, encompassing feature development for a range of products in sectors including fintech, edtech, and constitutional websites.",
      "At Credcesta, even as an intern, I exhibited a high level of commitment and competency. I was involved in frontend and backend development, stakeholder management, and team onboarding, reflecting my multifaceted role within the team.",
      "I played a pivotal role in creating Credcesta's portal, enabling customers to create credit cards and manage their accounts seamlessly. This crucial development facilitated the expansion of Credcesta's payroll loans program.",
      "My role extended to a migration of their constitutional website to Django. This transition empowered non-technical users to modify the website interface, improving accessibility and usability.",
      "As a mentor and educator, I took the initiative to guide and teach team members on how to write unit tests for React, thereby fostering a culture of quality code and enhancing the team's technical prowess.",
    ],
    href: "https://cubos.io",
  },
];
