/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import styled from "styled-components"

// Hero Styling
const StyledHeroWrapper = styled.div`
  display: grid;
  place-content: center;
  background-image: linear-gradient(45deg, #6D41F2, pink);
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

const Hero = (props) => {
  const { title, subtitle, image } = props

  return (
    <StyledHeroWrapper>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </StyledHeroWrapper>
  )
}

export default Hero
