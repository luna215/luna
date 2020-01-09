import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import Bio from "./bio"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
            {title}
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header style={{
          background: `orange`,
          width: `100%`
        }}>
          {header}
          <Bio />
        </header>
        
        <main>
          {children}
        </main>
        <footer>
          © {new Date().getFullYear()}
          {` `}
          <a href="https://metsli.com/">metsli</a>
        </footer>
      </div>
    )
  }
}

export default Layout
