import * as React from "react"
import { useEffect, useState } from 'react'

const Gif = ({ className }) => {
  const [results, setResults] = useState([])
  // const { title } = results
  let image;

  useEffect(() => {
    // fetch(`https://api.giphy.com/v1/gifs/random?&limit=1&tag=scream&api_key=${process.env.GATSBY_GIPHY_API}`)
    // .then(response => response.json())
    // .then(responseData => setResults(responseData.data))
    // .then(image = response.results.images.fixed_height_downsampled.url)
    // .catch(error => {
    //     console.log('Error fetching and parsing data', error)
    //   })
    if(Date.parse(localStorage.getItem('date')) > new Date()) {
      localStorage.setItem('date', new Date())
      localStorage.setItem('updated', 'true')
    } else {
      localStorage.setItem('updated', 'false')
    }
  },[])

  console.log(`results: ${JSON.stringify(results)}`);

  return (
    <img src={'results.images.fixed_height_downsampled.url'} alt={'results.title'} className={className} />
  )
}

export default Gif