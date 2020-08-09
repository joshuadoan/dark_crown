import React from "react"

export function Posts({ children }) {
  return <ul>{children}</ul>
}

export function Post({ children }) {
  return <li>{children}</li>
}

export function PostTitle({ children }) {
  return <h3>{children}</h3>
}

export function PostDescription({ children }) {
  return <p dangerouslySetInnerHTML={{ __html: children }} />
}

export function PostAudio({ children, enclosure }) {
  const { $ } = enclosure;
  return $ && (
    <audio controls>
      <source src={$.url} type="audio/mpeg" tracks={1} />
      Your browser does not support the audio element.
    </audio>
  )
}
