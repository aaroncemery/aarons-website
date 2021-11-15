import * as React from "react"
import { Link } from "gatsby"
import RootHeader from "./rootHeader"
import RootHero from "./rootHero"
import Hero from "./hero"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const blogPath= `${__PATH_PREFIX__}/blog`
  const isRootPath = location.pathname === rootPath
  const isBlogPath = location.pathname === blogPath
  let header

  if (isRootPath) {
    header = (
      <React.Fragment>
        <RootHeader title={title} />
        <RootHero />
      </React.Fragment>
    )
  } else if (isBlogPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <React.Fragment>
      <header className="global-header">{header}</header>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
      </div>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </React.Fragment>
  )
}

export default Layout
