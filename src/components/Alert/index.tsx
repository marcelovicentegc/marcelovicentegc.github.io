import React from "react"
import { StyledAlert } from "./styles"

interface AlertProps {
  children: React.ReactNode
}

export const Alert: React.SFC<AlertProps> = ({ children }) => (
  <StyledAlert px={[8, 16]} py={[16]} my={[8, 16]}>
    {children}
  </StyledAlert>
)
