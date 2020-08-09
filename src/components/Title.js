import React from "react"
import styled from "styled-components"

const StyledTitle = styled.h1`
  font-weight: normal;
`

export function Title({ children }) {
  return <StyledTitle>{ children }</StyledTitle>
}
