import * as React from "react"
import { useEffect, useState } from 'react'

const Gif = ({ className }) => {
  const [results, setResults] = useState([])

  useEffect(() => {
    fetch('https://api.giphy.com/v1/gifs/random?&limit=1&tag=scream&api_key=xkoZuUAmey3Q8b8qELw8KU9lkeqO0loi')
    .then(response => response.json())
    .then(responseData => setResults(responseData.data))
    .catch(error => {
        console.log('Error fetching and parsing data', error)
      })
  },[])

  return (
    <img src={results.image_url} alt={results.title} className={className} />
  )
}

export default Gif