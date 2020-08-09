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
  padding: 0 0 24px 0;
  list-style: none;
  font-weight: lighter;
  border-bottom: 1px solid #cccccc;
`

export function Post({ children }) {
  return <StyledPost>{children}</StyledPost>
}

const StyledPostTitle = styled.h2`
  font-weight: normal;
  font-size: 18px;
`

export function PostTitle({ children }) {
  return <StyledPostTitle>{children}</StyledPostTitle>
}

const StyledPostDescription = styled.p`
  margin: 0 0 24px 0;
  strong {
    font-weight: normal;
  }
  a {
    color: #504f54;
    font-weight: normal;
  }
`

export function PostDescription({ children }) {
  return (
    <StyledPostDescription dangerouslySetInnerHTML={{ __html: children }} />
  )
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
