import React from "react"
import styled from "styled-components"

const StyledPosts = styled.ul`
  margin: 0;
  padding: 0;
`

export function Posts({ children }) {
  return <StyledPosts>{children}</StyledPosts>
}

const StyledPost = styled.li`
  margin: 0 0 24px 0;
  padding: 24px;
  list-style: none;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
`

export function Post({ children }) {
  return <StyledPost>{children}</StyledPost>
}

export function PostTitle({ children }) {
  return <h3>{children}</h3>
}

export function PostDescription({ children }) {
  return <p dangerouslySetInnerHTML={{ __html: children }} />
}

export function PostAudio({ children, enclosure }) {
  const { $ } = enclosure
  return (
    $ && (
      <audio controls>
        <source src={$.url} type="audio/mpeg" />
        <track kind="captions" />
        Your browser does not support the audio element.
      </audio>
    )
  )
}
