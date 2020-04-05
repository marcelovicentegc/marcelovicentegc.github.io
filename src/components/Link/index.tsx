import React from "react"
import { Link as GatsbyLink } from "gatsby"

interface LinkProps {
  children: React.ReactNode
  className: string | string[]
  to: string
}

export const Link: React.SFC<LinkProps> = ({ children, className, to }) => {
  return (
    <GatsbyLink className={[`link`].concat(className || []).join(" ")} to={to}>
      {children}
    </GatsbyLink>
  )
}
