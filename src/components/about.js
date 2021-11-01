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
            width: 500
            aspectRatio: 1.7
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
  const social = data.site.siteMetadata?.social
  const imageData = data.desktop.childImageSharp.gatsbyImageData

  // Page Styling
  const StyledContentWrapper =styled.div`
    position: relative;
    background: var(--opaque-white);
    padding-top: var(--spacing-2);
    padding-bottom: var(--spacing-2);
    padding-left: var(--spacing-4);
    border-radius: 8px;
    border: 4px solid rgba(0, 255, 0, 0.68);
    @media ${device.laptop} {
      margin-left: 25%;
      margin-top: -200px; 
    }
  `

  return (
    <div className="about">
      <GatsbyImage image={imageData} alt={author.name} style={{borderRadius: "50%", border: "16px solid magenta"}} />
      <StyledContentWrapper>
        <h2>These are just so awkward</h2>
        <p>Let's not pretend this isn't a little weird. Here I am, trying to write some words about myself that are a mixture of self promotion and self deprication (you know, to keep it entertaining). Here you are reading these words either because:</p>
        <ol>
          <li>You were in a meeting with me and just googled me</li>
          <li>You found some dev stuff that I was engaged in and are looking me up to see what I'm all about</li>
          <li>You're wondering if I'm a good fit to work with you, or</li>
          <li>You're just doing some general stalking because we used to know one another and you're bored wondering what happened to me (spoiler alert: I don't run or go to church anymore...I'm fine)</li>
        </ol>
      </StyledContentWrapper>
    </div>
  )
}

export default About
