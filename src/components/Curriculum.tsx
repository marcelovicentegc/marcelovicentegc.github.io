import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  pdf,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    margin: 10,
    padding: 10,
  },
  header: {
    fontFamily: "IBM Plex Mono",
    fontSize: 24,
    marginBottom: 10,
  },
  content: {
    fontFamily: "IBM Plex Mono",
    fontSize: 12,
  },
  jobTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  jobCompany: {
    fontSize: 14,
    marginBottom: 5,
  },
  jobPeriod: {
    fontSize: 12,
    marginBottom: 10,
  },
  jobDescription: {
    fontSize: 10,
  },
  tag: {
    fontFamily: "IBM Plex Mono",
    fontSize: 10,
    marginRight: 5,
    marginBottom: 5,
    padding: 5,
    backgroundColor: "#f0f0f0",
  },
  introText: {
    fontFamily: "IBM Plex Mono",
    fontSize: 12,
    lineHeight: 1.5,
  },
});

Font.register({
  family: "IBM Plex Mono",
  src: "https://fonts.gstatic.com/s/ibmplexmono/v2/-F6sfjptAgt5VM-kVkqdyU8n1ioSJlR1gMoQPttozw.woff2",
});

function JobExperience({ title, company, period, achievements }: any) {
  return (
    <View style={styles.section}>
      <Text style={styles.jobTitle}>{title}</Text>
      <Text style={styles.jobCompany}>{company}</Text>
      <Text style={styles.jobPeriod}>{period}</Text>
      {achievements.map((achievement: any, index: any) => (
        <Text key={index} style={styles.jobDescription}>
          - {achievement}
        </Text>
      ))}
    </View>
  );
}

function Tags({ labels }: any) {
  return labels.map((label: any, index: any) => (
    <Text style={styles.tag} key={index}>
      {label}
    </Text>
  ));
}

function Intro({ name, email, phone, location }: any) {
  return (
    <View style={styles.section}>
      <Text style={styles.introText}>Name: {name}</Text>
      <Text style={styles.introText}>Email: {email}</Text>
      <Text style={styles.introText}>Phone: {phone}</Text>
      <Text style={styles.introText}>Current location: {location}</Text>
    </View>
  );
}

/**
 * This component is a copy of Intro.astro and Experience.astro
 * It is used to generate a PDF version of the resume composed of
 * the two components above.
 */
export default function Curriculum() {
  // const render = useAsync(async () => {
  //   if (!value) return null;

  //   const blob = await pdf(value).toBlob();
  //   const url = URL.createObjectURL(blob);

  //   return url;
  // }, [value]);

  // useEffect(() => onUrlChange(render.value), [render.value]);

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Introduction</Text>
          <Intro
            name="Marcelo Cardoso"
            email="marcelovicentegc@gmail.com"
            phone="+55 71 999977711 (WhatsApp only)"
            location="Barcelona, Spain"
          />
          <Text style={styles.content}>
            Hi, I'm Marcelo! I'm a versatile Senior Software Engineer at VTEX ,
            where I play a pivotal role in evolving the VTEX Admin platform.
            Since joining VTEX in late 2020, I've been instrumental in
            developing innovative features and enhancing user experiences.
            Before VTEX, I honed my skills building software for various sectors
            including fintech, edtech, and ecommerce. As a passionate
            problem-solver, I founded and currently maintain eutiveumsonho , a
            unique social network centered around dreams (the ones we have while
            sleeping). When I'm not delving into code or dreaming up the next
            big tech solution, you'll find me immersing myself in sports or
            spending quality time with friends.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.header}>Experience</Text>
          <JobExperience
            title="Senior Software Engineer"
            company="VTEX"
            period="January/2021 - Present"
            achievements={[
              "I played a significant role in implementing the new Admin version redesign, which substantially enhanced VTEX's product appeal. Its state-of-the-art design greatly eased the selling process for VTEX.",
              "I spearheaded numerous product discoveries that led to vital product developments that optimized our system efficiency and user interface.",
              "I was instrumental in creating and maintaining a micro-service to ingest observability data from frontend clients, enabling various teams to have a better understanding of their applications' performance and make data-driven decisions to improve their products.",
              "I took measures to bolster system security by instrumenting the Admin services and creating alarms and dashboards. These tools significantly improved our responsiveness and accuracy during system outages, thereby minimizing downtime and maintaining high service quality.",
              "I equipped the application with analytics data ingestion which generated valuable insights into product usage for the team.",
              "My explorations into micro-frontend architecture and frontend cloud technologies led to the creation of complex MVPs (Minimum Viable Products). These MVPs proved instrumental in guiding key decisions aimed at bolstering system efficiency and improving the developer experience.",
              "I also developed a suite of internal tools designed to automate mundane tasks, thereby boosting efficiency and productivity across various teams. These tools not only streamlined daily operations but also generated valuable insights that were utilized by product managers, designers, and engineers for refining product offerings.",
            ]}
          />
          <JobExperience
            title="Creator"
            company="Eu tive um sonho"
            period="August/2022 - Present"
            achievements={[
              "As a testament to my passion for creativity and technical experimentation, I founded Eu tive um sonho (eutiveumsonho.com), a unique social network with dreams as its core focus. It serves as a playground for me to continually refine my technical skills and explore innovative ideas.",
              "Despite not being primarily intended for mass user acquisition, the network has organically grown to over 100+ users, with more than 200+ dreams recorded, demonstrating its appeal and user-friendly design.",
              "I've incorporated robust metrics tracking and system health monitoring capabilities to ensure the network's reliability and to glean insights into user behavior and engagement.",
              "While this venture started as a fun project, it has become an invaluable tool for self-improvement and learning in my technology career.",
            ]}
          />
          <JobExperience
            title="Software Engineer"
            company="Cubos"
            period="May/2019 - January/2021"
            achievements={[
              "I spearheaded the implementation of Fitdance's ecommerce frontend, orchestrating a comprehensive transition from the storefront to the backoffice. This strategic migration led to the streamlining of their operations onto a more efficient platform.",
              "My contributions were broad and diverse, encompassing feature development for a range of products in sectors including fintech, edtech, and constitutional websites.",
              "At Credcesta, even as an intern, I exhibited a high level of commitment and competency. I was involved in frontend and backend development, stakeholder management, and team onboarding, reflecting my multifaceted role within the team.",
              "I played a pivotal role in creating Credcesta's portal, enabling customers to create credit cards and manage their accounts seamlessly. This crucial development facilitated the expansion of Credcesta's payroll loans program.",
              "My role extended to a migration of their constitutional website to Django. This transition empowered non-technical users to modify the website interface, improving accessibility and usability.",
              "As a mentor and educator, I took the initiative to guide and teach team members on how to write unit tests for React, thereby fostering a culture of quality code and enhancing the team's technical prowess.",
            ]}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.header}>Skills</Text>
          <Text style={styles.content}>
            <Tags
              labels={[
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
                "Memchached",

                // Concepts and fields of study
                "Distributed systems",
                "Micro-services",
                "Micro-frontends",
                "Frontend clouds",
                "Automated testing",
                "CI/CD",
              ]}
            />
          </Text>
        </View>
      </Page>
    </Document>
  );
}
