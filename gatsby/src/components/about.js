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
import BlockContent from '@sanity/block-content-to-react'

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
const StyledContentWrapper =styled(BlockContent)`
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
  const data = useStaticQuery(AboutQuery)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  console.log(data.allSanityAuthor.nodes[0].image);
  const author = data.site.siteMetadata?.author
  const authorImage = data.allSanityAuthor.nodes[0].image.asset.gatsbyImageData
  const content = data.allSanityAbout.nodes[0]._rawContent
  console.log(content);

  const serializers = {
    types: {
      block: props => {
        const { style = 'normal' } = props.node
        if (style === 'h2') {
          return <h2>{props.children}</h2>
        }
        return BlockContent.defaultSerializers.types.block(props);
      },
      list: (props) =>
        console.log("list", props) ||
        (props.type === "bullet" ? (
          <ul>{props.children}</ul>
        ) : (
          <ol>{props.children}</ol>
        )),
      listItem: (props) =>
        console.log("list", props) ||
        (props.type === "bullet" ? (
          <li>{props.children}</li>
        ) : (
          <li>{props.children}</li>
        )),
      marks: {
        strong: (props) =>
          console.log("strong", props) || <strong>{props.children}</strong>,
        em: (props) => console.log("em", props) || <em>{props.children}</em>,
        code: (props) => console.log("code", props) || <code>{props.children}</code>
      }
    },
  }

  return (
    <StyledAboutWrapper className="about">
      <StyledImage image={authorImage} alt={author.name} imgStyle={{ borderRadius: '50%' }} />
      <StyledContentWrapper blocks={content} serializers={serializers} />
    </StyledAboutWrapper>
  )
}

export default About

const AboutQuery = graphql`
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
    allSanityAuthor {
      nodes {
        name
        slug {
          current
        }
        image {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
    }
    allSanityAbout {
      nodes {
        image {
          asset {
            gatsbyImageData
          }
        }
        _rawContent
      }
    }
  }
`
