/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "./device"

const RootHeader = ({title}) => {

  // Header Styling
  const StyledHeader = styled.div`
    margin: 0 1rem;
    @media ${device.laptop} {
      max-width: 960px;
    }
    @media ${device.laptopL} {
      max-width: 1440px;
    }
  `

  return (
    <StyledHeader>
      <h1 className="header-link-home">
        <Link to="/">{title}</Link>
      </h1>
    </StyledHeader>
  )
}

export default RootHeader
