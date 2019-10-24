import React from "react"
import styled from "styled-components"
import Project from "./project"

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 8px;
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
  top: 104px;
  width: 100%;
  height: 27px;
  background-image: linear-gradient(to top, rgba(255, 255, 255, 0), #ffffff);
`

const Projects: React.FC = () => {
  return (
    <>
      <FadeTop />
      <ProjectsWrapper>
        <Project
          title={"🈚 typescript-graphql-api"}
          url={"https://github.com/marcelovicentegc/typescript-graphql-api"}
          about={[
            "A node server featuring Typescript, GraphQL, TypeORM, PostgreSQL and Express.",
          ]}
        />
        <Project
          title={"🦷 toothbrush"}
          url={"https://github.com/marcelovicentegc/toothbrush"}
          about={["A web-app that extracts text patterns from texts."]}
        />
        <Project
          title={"🈵 fullstack-typescript"}
          url={"https://github.com/marcelovicentegc/fullstack-typescript"}
          about={["A Typescript, React, MobX and GraphQL starter kit."]}
        />
        <Project
          title={"🏎 formula-sae"}
          url={"https://github.com/marcelovicentegc/formula-sae"}
          about={["Code related to the KRT FormulaSAE electronics team."]}
        />
        <Project
          title={"⚽ client-socket"}
          url={"https://github.com/marcelovicentegc/client-socket"}
          about={[
            "A collection of client sockets written in C, Go, Python and Lua.",
          ]}
        />
        <Project
          title={"💪 gym-model"}
          url={"https://github.com/marcelovicentegc/gym-model"}
          about={["A gym-themed website model."]}
        />
      </ProjectsWrapper>
    </>
  )
}

export default Projects
