import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import SEO from "../components/seo"
import YAMLData from "../../content/experiences.yaml"
import Layout from "../components/layout"

const experiencesPage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "png" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className="experience-list">
        <SEO title="Experiences" keywords={[`gatsby`, `application`, `react`]}/>
        {YAMLData.map((experienceList, index) => {

          const imagePath = data.allFile.edges
            .filter((node) => {
              return node.node.name === experienceList.experience.name
            })[0].node.publicURL
          
          return (
            <div className={`${experienceList.experience.name}`} key={index}>
              <img src={imagePath} alt={experienceList.experience.name} className="experience-image"/>
              <div className="experience-details">
                <h4 className="company-name">{experienceList.experience.company}</h4>
                <div className="experience-dates">
                  <i className="far fa-calendar-alt calendar-icon"></i>
                  {experienceList.experience.date}
                </div>
                <p className="company-short-description">{experienceList.experience.short}</p>
                <ul className="experience-skills-list">
                  {experienceList.experience.skills.map((skill, index) => {
                    return (
                      <li key={`skill_${index}`}>{skill}</li>
                    )
                  })}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default experiencesPage