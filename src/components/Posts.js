import React from "react"
import styled from "styled-components"

export function Posts({ children }) {
  const StyledPosts = styled.ul`
    margin: 0;
    padding: 0;
  `

  return <StyledPosts>{children}</StyledPosts>
}

export function Post({ children }) {
  const StyledPost = styled.li`
    margin: 0 0 24px 0;
    padding: 0 0 24px 0;
    list-style: none;
    font-weight: lighter;
    border-bottom: 1px solid #cccccc;
  `
  return <StyledPost>{children}</StyledPost>
}

export function PostTitle({ children }) {
  const StyledPostTitle = styled.h2`
    font-weight: normal;
    font-size: 18px;
  `
  return <StyledPostTitle>{children}</StyledPostTitle>
}

export function PostDescription({ children }) {
  const Style = styled.p`
    margin: 0 0 24px 0;
    strong {
      font-weight: normal;
    }
    a {
      color: #504f54;
      font-weight: normal;
    }
  `
  return <Style dangerouslySetInnerHTML={{ __html: children }} />
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
