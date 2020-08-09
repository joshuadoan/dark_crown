import React, { useEffect, useState } from "react"
import { fetchFeed } from "@utils/fetchFeed"
import {
  Posts,
  Post,
  PostTitle,
  PostDescription,
  PostAudio,
} from "@components/Posts"

import { Title } from "@components/Title"
import { Description } from "@components/Description"
import { Page } from "@components/Page"
import { GlobalStyle } from "@styles/GlobalStyle"

export default function Home() {
  const [feed, setFeed] = useState({})
  const { copyright, description, title, item: posts = [] } = feed

  useEffect(() => {
    fetchFeed("https://adultingwell.libsyn.com/rss", setFeed)
  }, [])

  return (
    <>
      <GlobalStyle />
      <Page>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Posts>
          {posts.map(
            (
              {
                title: [title],
                description: [description],
                enclosure: [enclosure],
              },
              i
            ) => {
              return (
                <Post key={`post-${i}`}>
                  <PostTitle>{title}</PostTitle>
                  <PostDescription>{description}</PostDescription>
                  <PostAudio enclosure={enclosure} />
                </Post>
              )
            }
          )}
        </Posts>
        <footer>{copyright} </footer>
      </Page>
    </>
  )
}
