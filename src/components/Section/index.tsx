import React, { HTMLProps } from "react"
import { StyledSection } from "./styles"
import { H2 } from "../../typography"

interface SectionProps extends Omit<HTMLProps<HTMLDivElement>, "as"> {
  children: React.ReactNode
}

export const Section: React.SFC<SectionProps> = ({ children, ...props }) => (
  <StyledSection as="section" mb={[2, 2, 3]} pb={[2, 2, 3]} {...props}>
    {children}
  </StyledSection>
)

export const SectionTitle: React.SFC<SectionProps> = ({ children }) => (
  <H2 mb={[2, 2, 2]}>{children}</H2>
)
