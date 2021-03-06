import React from "react"
import styled from "styled-components"

const StyledTitle = styled.h2`
  font-weight: lighter;
  margin: 0 0 24px 0;
  font-size: 18px;
`

export function Description({ children }) {
  return <StyledTitle>{ children }</StyledTitle>
}
