import * as React from "react"
import { useEffect, useState } from 'react'
import moment from 'moment'

const Gif = ({ className }) => {
  const [downsizedImage, setDownsizedImage] = useState([])
  const [title, setTitle] = useState([])
  const [gifData, setGifData] = useState(null)
  const [runDate, setRunDate] = useState(new Date())
  const today = new Date()
  let gifArray = []

  useEffect(() => {
    if (moment(runDate).isSameOrAfter(today)) {
      console.log('running giphy call...');
      fetch(`https://api.giphy.com/v1/gifs/search?q=scream&api_key=${process.env.GATSBY_GIPHY_API}&limit=3`)
      .then(response => response.json())
      .then(responseData => setGifData(responseData))
      .catch(error => {
        console.log('Error fetching and parsing data', error)
      })
      setRunDate(today)
    }
  },[])

  return (
    <>
    <h1>hellllppppp</h1>
    <div>{console.log(gifData)}</div>
      {/* <img src={gifArray["url"]} alt={gifArray['title']} className={className} /> */}
    </>
  )
}

export default Gif