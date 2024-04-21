import { experiences } from "@assets/experience";
import type { Experience } from "@assets/experience";
import { INTRO, TAGS } from "@config";
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
    margin: 8,
    padding: 4,
  },
  header: {
    fontSize: 20,
    marginBottom: 4,
  },
  content: {
    fontSize: 12,
  },
  jobCompany: {
    fontSize: 16,
    marginBottom: 4,
  },
  jobTitle: {
    fontSize: 14,
    marginBottom: 12,
  },
  jobPeriod: {
    fontSize: 12,
    marginBottom: 10,
  },
  jobDescription: {
    fontSize: 12,
  },
  tag: {
    fontSize: 12,
    marginRight: 4,
    marginBottom: 4,
    padding: 4,
    backgroundColor: "#f0f0f0",
  },
  introText: {
    fontSize: 10,
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
      <Text style={styles.jobCompany}>
        {company} | {period}
      </Text>
      <Text style={styles.jobTitle}>{title}</Text>
      {achievements.map((achievement, index) => (
        <Text
          key={index}
          style={{
            ...styles.jobDescription,
            marginBottom: 20,
          }}
        >
          {achievement}
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
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Introduction</Text>
          <Intro
            name={INTRO.name}
            email={INTRO.email}
            phone={INTRO.phone}
            location={INTRO.location}
          />
          <View style={styles.section}>
            <Text style={styles.content}>
              I'm an experienced and versatile Software Engineer playing a
              central role evolving an enterprise ecommerce platform at VTEX. I
              also founded and currently maintain a unique social network
              centered around dreams (the ones we have while sleeping),
              eutiveumsonho. I am used to build end-to-end software, from
              beautiful frontends to complex backend services and some
              infrastructure code. When I'm not writing code, you'll find me
              immersing myself in sports or spending quality time with friends.
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.header}>Experience</Text>
          {experiences.map((experience, index) => {
            return <JobExperience {...experience} key={index} />;
          })}
        </View>
        <View style={styles.section}>
          <Text style={styles.header}>Skills</Text>
          <View
            style={{
              ...styles.section,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Tags labels={TAGS} />
          </View>
        </View>
        <Text
          style={{
            fontSize: 10,
          }}
        >
          Curriculum generated at {new Date().toISOString()}
        </Text>
      </Page>
    </Document>
  );
}
