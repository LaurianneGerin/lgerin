import React from "react"
import { graphql, Link } from 'gatsby'

import SEO from "../components/seo"
import Img from "gatsby-image"

const IndexPage = ({data}) => (
  <div className="home-page">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* <Img fluid={data.imageTwo.childImageSharp.fluid} style={{ width: '100%', height: '100%', position: 'absolute', top: '0' }} /> */}
    <div className="home-page-header">
      <Img fluid={data.imageOne.childImageSharp.fluid} style={{ width: '200px' }}/>
      <h1>Développeur front-end</h1>
      <h3>Enthousiaste de design</h3>
    </div>
    <div className="introduction">
      <h3 className="intro-header">tl;dr</h3>
      <p>Développeur depuis 2 ans, j'ai travaillé en start-up en tant que concepteur et intégrateur de sites web, de features sur application avant de collaborer un an sur un projet informatique d'une grande entreprise (Norauto).</p>
      <p>Mon expertise s’axe autour des langages JS et CSS et je maîtrise également les logiciels de design Sketch et Photoshop.</p>
      <p>J'attache de l'importance à l'esthétique de mes réalisations et adapte ma méthodologie de travail à chaque nouveau projet. Mon objectif est d'accroître la visibilité de mes clients et d'offrir une expérience optimale à leurs utilisateurs.</p>
    </div>
    <div className="home-page-footer">
      <div className="footer-menu">        
        <Link className="footer-link biographie-link" to={ '/biographie/' }> Biographie </Link>
        <Link className="footer-link experience-link" to={ '/experiences/' }> Expériences </Link>
        <Link className="footer-link work-link" to={ '/work/' }> Réalisations </Link>
        <Link className="footer-link contact-link" to={ '/contact/' }> Contact </Link>
      </div>
      <div className="footer-icons">
        <a href={'https://www.linkedin.com/in/laurianne-gerin/'}><i className="fab fa-linkedin"></i></a>
        <a href={'tel:0650952789'}><i className="fas fa-phone-square-alt"></i></a>
        <a href={'mailto:laurianne.gerin@gmail.com'}><i className="fas fa-envelope-square"></i></a>
      </div>
     </div>
  </div>
)

export const pageQuery = graphql `
  query IndexQuery {
    imageOne: file(relativePath: { eq: "LG.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    imageTwo: file(relativePath: { eq: "home-background.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
export default IndexPage
