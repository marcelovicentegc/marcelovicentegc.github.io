import React from "react"
import { Inner, Box } from "../System"
import { Text, H1 } from "../../typography"

interface PageHeaderProps {
  title: string
  subTitle?: string
}

export const PageHeader: React.SFC<PageHeaderProps> = ({ title, subTitle }) => (
  <Inner>
    <Box pt={[24, 48]} pb={[8, 16]}>
      <H1>{title}</H1>
      {subTitle ? <Text fontSize={[0, 1, 2]}>{subTitle}</Text> : null}
    </Box>
  </Inner>
)
