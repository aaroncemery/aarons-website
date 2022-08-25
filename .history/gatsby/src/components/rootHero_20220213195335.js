/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import styled from "styled-components"
import { device } from "./device"

// Hero Styling
const StyledHeroWrapper = styled.div`
  display: grid;
  place-content: center;
  background: #6D41F2;
  min-height: 500px;
  width: 100vw;
  padding: 2rem 0;

  h1, h2, h3, p {
    color: var(--white);
    text-align: center;
  }

  h1 .rotate {
    transform: scale(-1) perspective(0);
  }
`

const StyledGifWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2em;
  padding: 0 1em;
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1em;
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2em;
    max-width: 60em;
  }
  img {
    &:nth-of-type(2), &:nth-of-type(3) {
      display: none;
    }
    @media ${device.tablet} {
      &:nth-of-type(2) {
        display: block;
      }
    }
    @media ${device.laptop} {
      &:nth-of-type(3) {
        display: block;
      }
    }
  }
`

const StyledGif = styled.img`
  display: block;
  margin: 0 auto;
  border-radius: 8px;
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: top;
`

const RootHero = () => {

  return (
    <StyledHeroWrapper>
      <h1>Screaming into the abyss</h1>
      <h3>Unpolished behavior in an ever increasing polished society</h3>
      <StyledGifWrapper>
        <StyledGif src='https://media.giphy.com/media/2oUfvvUgQHnLsQWFMW/giphy.gif' alt='dwight schrute screaming' />
        <StyledGif src='https://media.giphy.com/media/l0HlCqV35hdEg2GUo/giphy.gif' alt='person yelling' />
        <StyledGif src='https://media.giphy.com/media/xU9TT471DTGJq/giphy.gif' alt='homer simpson screaming' />
      </StyledGifWrapper>
    </StyledHeroWrapper>
  )
}

export default RootHero
