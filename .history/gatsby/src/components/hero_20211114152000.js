/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import styled from "styled-components"
import Gif from "./giphy"
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

const RootHero = () => {

  return (
    <StyledHeroWrapper>
      <h1>Screaming into the abyss</h1>
      <h3>Unpolished behavior in an ever increasing polished society</h3>
    </StyledHeroWrapper>
  )
}

export default RootHero
