/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import "./layout.css"
import HomeComponent from "./home"
import AboutComponent from "./about"
import ContactComponent from "./contact"

const Layout = ({ children, pageTitle }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <title>{pageTitle}</title>
        <h1> {pageTitle}</h1>
        <ul>
          <li>
            <Link to="/" component={HomeComponent}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about/" component={AboutComponent}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact/" component={ContactComponent}>
              Contact
            </Link>
          </li>
        </ul>
        <main>{children}</main>
        {/* <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()},
         
          Blog
        </footer>  */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
