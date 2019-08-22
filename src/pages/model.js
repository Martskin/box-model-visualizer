import React from "react"
import Layout from "../components/layout"
import BoxModelVisualizer from "../components/boxModelVisualizer"
import SEO from "../components/seo"

const ModelPage = () => (
  <Layout>
    <SEO title="Control Panel" />
    <div>
      <BoxModelVisualizer />
    </div>
  </Layout>
)

export default ModelPage
