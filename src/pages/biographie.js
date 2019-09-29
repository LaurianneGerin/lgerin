import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const biographiePage = () => {
    return (
      <Layout>
        <div className="biographie-page">
          <SEO title="Biographie" keywords={[`gatsby`, `application`, `react`]}/>
          <p>Coucou la bio</p>
        </div>
      </Layout>
    )
  }

export default biographiePage