import React from "react"
import styled from "styled-components"
import Octicon, { Star, RepoForked } from "@primer/octicons-react"

interface Props {
  title: string
  about: string[]
  url: string
  stargazersCount: number
  forkCount: number
}

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 16px 22px 16px;
  width: 90%;
`

const Title = styled.h3``

const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Paragraph = styled.p`
  text-align: center;
`

const StarsAndForksWrapper = styled.div`
  display: flex;
`
const Stars = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 4px;
  }
`

interface IForks {
  withMarginLeft: boolean
}

const Forks = styled.div<IForks>`
  display: flex;
  align-items: center;
  margin-left: ${props => (props.withMarginLeft ? "16px" : "")};

  span {
    margin-left: 4px;
  }
`

const Project: React.FC<Props> = ({
  title,
  about,
  url,
  stargazersCount,
  forkCount,
}) => {
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
        <StarsAndForksWrapper>
          {stargazersCount > 0 && (
            <Stars>
              <Octicon icon={Star} />
              <span>{stargazersCount}</span>
            </Stars>
          )}
          {forkCount > 0 && (
            <Forks withMarginLeft={stargazersCount > 0}>
              <Octicon icon={RepoForked} />
              <span>{forkCount}</span>
            </Forks>
          )}
        </StarsAndForksWrapper>
      </About>
    </ProjectWrapper>
  )
}

export default Project
