import * as React from "react"
import { useEffect, useState } from 'react'

const Gif = ({ className }) => {
  const [downsizedImage, setDownsizedImage] = useState([])
  const [title, setTitle] = useState([])

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/random?&limit=2&tag=scream&api_key=${process.env.GATSBY_GIPHY_API}`)
    .then(response => response.json())
    .then(responseData => {
      setDownsizedImage(responseData.data.images.downsized)
      setTitle(responseData.data.title)
    })
    .catch(error => {
        console.log('Error fetching and parsing data', error)
      })
  },[])

  return (
    <>
      <img src={downsizedImage.url} alt={title} className={className} />
    </>
  )
}

export default Gif