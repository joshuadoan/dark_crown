import React, { useEffect, useState } from "react"
import { fetchFeed } from "@utils/fetchFeed"
import { feeds } from "@utils/feeds"
import Select from "react-select"
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
  const [data, setData] = useState({})
  const [feed, setFeed] = useState(feeds[0])
  const { copyright, description, title, item: posts = [] } = data

  useEffect(() => {
    fetchFeed(feed.value, setData)
  }, [feed.value])

  return (
    <>
      <GlobalStyle />
      <Page>
        <Select
          options={feeds}
          onChange={setFeed}
          defaultValue={feeds[0]}
          isSearchable
        />
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
