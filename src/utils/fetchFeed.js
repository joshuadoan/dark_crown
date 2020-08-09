import { parseString } from "xml2js"
export async function fetchFeed(feedUrl, onResults) {
  let response = await fetch(feedUrl)
  const xml = await response.text()

  parseString(xml, function (err, result = {}) {
    const { rss = {} } = result
    const { channel } = rss
    channel && channel.length && onResults(channel[0])
  })
}
