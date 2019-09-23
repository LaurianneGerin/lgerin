import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        logo: file(relativePath: { eq: "LG.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        <Link className="header-link biographie-link" to={ '/biographie/' }> Biographie </Link>
        <Link className="header-link experience-link" to={ '/experiences/' }> Expériences </Link>
        <Link className="header-link work-link" to={ '/work/' }> Réalisations </Link>
        <Link className="header-link contact-link" to={ '/contact/' }> Contact </Link>
        <Link className="home-link" to={ '/' }>
          <Img fluid={data.logo.childImageSharp.fluid}/>
        </Link>
      </header>
    )}
  />
)