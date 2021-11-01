/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import styled from "styled-components"
import screamGif from '../images/dwight-scream.gif'

const RootHero = () => {

  // Hero Styling
  const StyledHeroWrapper = styled.div`
    display: grid;
    place-content: center;
    background: #6D41F2;
    min-height: 60vh;
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
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
  `

  const StyledGif = styled.img`
    display: block;
    margin: 0 auto;
    border-radius: 8px;
    width: 100%;
    object-fit: cover;
    object-position: top;
  `

  return (
    <StyledHeroWrapper>
      <h1>Screaming into the abyss</h1>
      <h3>Unpolished behavior in an ever increasing polished society</h3>
      <StyledGifWrapper>
        <StyledGif src={screamGif} alt='dwight schrute screaming' />
        <StyledGif src={screamGif} alt='dwight schrute screaming' />
        <StyledGif src={screamGif} alt='dwight schrute screaming' />
      </StyledGifWrapper>
    </StyledHeroWrapper>
  )
}

export default RootHero
