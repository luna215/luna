/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <p
        style={{
          width: `40%`,
          marginLeft: `11%`,
          fontSize: `0.8rem`,
          marginBottom: `5%`
        }}
      >
      Hi! I am a software engineer for DealerControl, accomplished traveler (I’ve only been to, like, two countries lol), and thoughtful engineer.  As an engineer, I strive to listen first, understand second, and talk last. During the weekends, I am usually volunteering for the DIY Girls organization. (Check them out/contribute, they are doing some amazing stuff!)
        {` `}
      </p>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `100%`,
        }}
      />
    </div>
  )
}

export default Bio
