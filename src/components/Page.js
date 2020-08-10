import React from "react"
import styled from "styled-components"

const StyledPage = styled.div`
  margin: 48px;
`

export function Page({ children }) {
  return <StyledPage>{children}</StyledPage>
}
