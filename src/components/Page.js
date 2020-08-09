import React from "react"
import styled from "styled-components"

const StyledPage = styled.div`
  margin: 24px;
`

export function Page({ children }) {
  return <StyledPage>{children}</StyledPage>
}
