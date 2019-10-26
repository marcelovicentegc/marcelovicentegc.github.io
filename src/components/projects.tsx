import React from "react"
import styled from "styled-components"
import Project from "./project"
import { useStaticQuery, graphql } from "gatsby"

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background: #000;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

const FadeTop = styled.div`
  position: absolute;
  top: 101px;
  width: 100%;
  height: 27px;
  background-image: linear-gradient(to top, rgba(255, 255, 255, 0), #ffffff);
`

interface Repository {
  name: string
  description: string
  url: string
  stargazers: {
    totalCount: number
  }
  forkCount: number
}

interface Data {
  github: {
    viewer: {
      repositories: {
        nodes: Repository[]
      }
    }
  }
}

const Projects: React.FC = () => {
  const data: Data = useStaticQuery(graphql`
    query GetRepositories {
      github {
        viewer {
          repositories(
            privacy: PUBLIC
            first: 100
            isFork: false
            orderBy: { field: UPDATED_AT, direction: DESC }
          ) {
            nodes {
              name
              description
              url
              stargazers {
                totalCount
              }
              forkCount
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <FadeTop />
      <ProjectsWrapper>
        {data.github.viewer.repositories.nodes.map(repo => {
          return (
            <Project
              title={repo.name}
              url={repo.url}
              about={[repo.description]}
              stargazersCount={repo.stargazers.totalCount}
              forkCount={repo.forkCount}
            />
          )
        })}
      </ProjectsWrapper>
    </>
  )
}

export default Projects
