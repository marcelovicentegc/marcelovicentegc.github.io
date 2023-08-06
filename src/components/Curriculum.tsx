import { Experience, experiences } from "@content/experience";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
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
    fontSize: 24,
    marginBottom: 10,
  },
  content: {
    fontSize: 14,
  },
  jobTitle: {
    fontSize: 20,
    marginBottom: 5,
  },
  jobCompany: {
    fontSize: 16,
    marginBottom: 5,
  },
  jobPeriod: {
    fontSize: 14,
    marginBottom: 10,
  },
  jobDescription: {
    fontSize: 12,
  },
  tag: {
    fontSize: 12,
    marginRight: 5,
    marginBottom: 5,
    padding: 5,
    backgroundColor: "#f0f0f0",
  },
  introText: {
    fontSize: 14,
    lineHeight: 1.5,
  },
});

Font.register({
  family: "IBM Plex Mono",
  src: "https://fonts.gstatic.com/s/ibmplexmono/v2/-F6sfjptAgt5VM-kVkqdyU8n1ioSJlR1gMoQPttozw.woff2",
});

function JobExperience({ title, company, period, achievements }: Experience) {
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
          {experiences.map(experience => {
            return <JobExperience {...experience} />;
          })}
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
