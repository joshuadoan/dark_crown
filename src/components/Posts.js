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
