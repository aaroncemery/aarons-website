import * as React from "react"
import { useEffect, useState } from 'react'
import moment from 'moment'

const Gif = ({ className }) => {
  const [gifData, setGifData] = useState([])
  const [runDate, setRunDate] = useState(new Date())
  const today = new Date()

  useEffect(() => {
    if (moment(runDate).isSameOrBefore(today)) {
      let offset = Math.floor(Math.random() * (2000 - 1) + 1)
      console.log(offset);
      console.log('running giphy call...');
      fetch(`https://api.giphy.com/v1/gifs/search?q=scream&api_key=${process.env.GATSBY_GIPHY_API}&limit=3&offset=${offset}`)
      .then(response => response.json())
      .then(responseData => {
        setGifData(responseData.data)
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error)
      })
      setRunDate(today)
    }
  },[])

  return (
    <>
      {
        gifData.map(data => {
          return <img src={data.images.downsized.url} alt={data.title} className={className} />
        })
      }
    </>
  )
}

export default Gif