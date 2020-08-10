import React from "react"
import styled from "styled-components"
import Skeleton from "react-loading-skeleton"

const StyledTitle = styled.h1`
  font-weight: normal;
`

export function Loading() {
  return (
    <>
      <p>
        <Skeleton count={1} />
      </p>
      <p>
        <Skeleton count={5} />
      </p>
    </>
  )
}
