import React from "react"
import styled from "styled-components"

const StyledPage = styled.div`
  margin: 44px;
`

export function Page({ children }) {
  return <StyledPage>{children}</StyledPage>
}
