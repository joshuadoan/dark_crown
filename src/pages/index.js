import React, { useEffect, useState } from "react"
import { parseString } from "xml2js"

import {
  Posts,
  Post,
  PostTitle,
  PostDescription,
  PostAudio,
} from "@components/Posts"

import { Description } from "@components/Description"
import { Page } from "@components/Page"
import { Title } from "@components/Title"

import { GlobalStyle } from "@styles/GlobalStyle"

export default function Home() {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const { copyright, description, title, item: posts = [] } = data

  async function handleResponse(response) {
    const xml = await response.text()

    parseString(xml, function (err, result = {}) {
      const { rss = {} } = result
      const {
        channel: [data],
      } = rss
      setData(data)
      setIsLoading(false)
    })
  }

  useEffect(() => {
    setIsLoading(true)
    fetch("https://adultingwell.libsyn.com/rss").then(handleResponse)
  }, [])

  return isLoading ? (
    <p>loading...</p>
  ) : (
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
