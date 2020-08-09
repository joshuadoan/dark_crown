import React, { useEffect, useState } from "react"
import { fetchFeed } from '@utils/fetchFeed'

export default function Home() {
  const [feed, setFeed] = useState({})
  const {
    copyright
  } = feed;

  console.log(feed)

  useEffect(() => {
    fetchFeed("https://adultingwell.libsyn.com/rss", setFeed)
  }, [])

  return (
    <div>
      <h1>Adulting Well</h1>
    </div>
  )
}
