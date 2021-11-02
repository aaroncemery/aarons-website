/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { device } from "./device"

// Page Styling
const StyledAboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  align-items: center;
`

const StyledImage = styled(GatsbyImage)`
  border-radius: 50%;
  border: .5em solid magenta;
  max-width: 300px;
  max-height: 300px;
  margin: 0 auto;
  @media ${device.laptop} {
    border-width: 1em;
    margin: 0;
    max-width: 500px;
    max-height: 500px;
  }
`
const StyledContentWrapper =styled.div`
  position: relative;
  background: var(--opaque-white);
  padding-top: var(--spacing-2);
  padding-bottom: var(--spacing-2);
  border-radius: 8px;
  @media ${device.laptop} {
    margin-left: 25%;
    margin-top: -200px; 
    border: 4px solid rgba(0, 255, 0, 0.68);
    box-shadow: 0 0 8px rgba(0, 255, 0, 0.99);
    padding-left: var(--spacing-4);
  }
`

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
      desktop: file(relativePath: { eq: "profile-pic.JPEG" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            height: 500
            transformOptions: {
              cropFocus: ENTROPY
            }
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const imageData = data.desktop.childImageSharp.gatsbyImageData

  return (
    <StyledAboutWrapper className="about">
      <StyledImage image={imageData} alt={author.name} />
      <StyledContentWrapper>
        <h2>😬 These are just so awkward</h2>
        <p>Let's not pretend this isn't a little weird. Here I am, trying to write some words about myself that are a mixture of self promotion and self deprication (you know, to keep it entertaining). Here you are reading these words either because:</p>
        <ol>
          <li>You were in a meeting with me and just googled me</li>
          <li>You found some dev stuff that I was engaged in and are looking me up to see what I'm all about</li>
          <li>You're wondering if I'm a good fit to work with you, or</li>
          <li>You're just doing some general stalking because we used to know one another and you're bored wondering what happened to me (spoiler alert: I don't 🏃‍♂️ or go to ⛪ anymore...I'm fine)</li>
        </ol>
      </StyledContentWrapper>
    </StyledAboutWrapper>
  )
}

export default About
