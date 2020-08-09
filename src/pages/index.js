import React, { useEffect, useState } from "react"
import { fetchFeed } from "@utils/fetchFeed"
import { Posts, Post, PostTitle, PostDescription } from "@components/Posts"

export default function Home() {
  const [feed, setFeed] = useState({})
  const { copyright, description, title, item: posts } = feed

  useEffect(() => {
    fetchFeed("https://adultingwell.libsyn.com/rss", setFeed)
  }, [])

  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <Posts>
        {posts &&
          posts.length &&
          posts.map((post, i) => {
            const { title, description } = post
            return (
              <Post>
                <PostTitle>{title}</PostTitle>
                <PostDescription>{ description }</PostDescription>
              </Post>
            )
          })}
      </Posts>
      <footer>{copyright} </footer>
    </div>
  )
}
