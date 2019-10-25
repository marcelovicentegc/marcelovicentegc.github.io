import React from "react"
import styled from "styled-components"

interface Props {
  title: string
  about: string[]
  url: string
  demo?: React.ReactNode
}

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 16px 22px 16px;
`

const Title = styled.h3``

const About = styled.div``

const Paragraph = styled.p`
  text-align: center;
`

const DemoWrapper = styled.div``

const Project: React.FC<Props> = ({ title, about, url, demo }) => {
  return (
    <ProjectWrapper>
      <Title>
        <a href={url} target="_blank">
          {title}
        </a>
      </Title>
      <About>
        {about.length > 0 &&
          about.map(paragraph => {
            return <Paragraph>{paragraph}</Paragraph>
          })}
      </About>
      {demo && <DemoWrapper>{demo}</DemoWrapper>}
    </ProjectWrapper>
  )
}

export default Project
