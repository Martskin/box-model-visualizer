import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import LogoBMV from "../components/logoBMV"
import { css } from "@emotion/core"
import tokens from "../data/tokens"
import { StaticQuery, graphql } from "gatsby"
import buttonModelExample from "../images/button-model-example.png"
import cardModelExample from "../images/card-model-example.png"
import headingModelExample from "../images/heading-model-example.png"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query SiteIndexQuery {
        site {
          siteMetadata {
            title,
            description
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" />
        <div className="layout-container">
          <div className="layout__hero">
            <h1 className="layout__heading">
              <div css={css({
                width: '100px',
                margin: `0 auto ${tokens.space.lg}px`,
                svg: {
                  width: 100,
                  height: 'auto',
                }
              })}>
                <LogoBMV />
              </div>
              {data.site.siteMetadata.title}
            </h1>
            <p className="layout__lead">
              {data.site.siteMetadata.description}
            </p>
            <Button
              variant="primary"
              size="large"
              label="Create a model"
              onClick={() => window.location = "/model"}
            />
          </div>
  
          <div className="layout__grid">
            <div>
              <img
                src={buttonModelExample} alt="button model example"
                onClick={() => window.location = "/model?mt=0&mr=16&mb=0&ml=0&mlb=margin&mbc=%23ff3f53&mlbc=%23303030&mlbv=true&mlbp=orm&muc=%23ffffff&mtuv=false&mruv=true&mbuv=false&mluv=false&bt=1&br=1&bb=1&bl=1&blb=border&bbc=%23ff8f00&blbc=%23303030&blbv=false&blbp=itl&buc=%23303030&btuv=false&bruv=false&bbuv=false&bluv=false&pt=8&pr=8&pb=8&pl=8&plb=padding&pbc=%2328e070&plbc=%23303030&plbv=true&plbp=itl&puc=%23303030&ptuv=true&pruv=true&pbuv=true&pluv=true&ew=150&eh=75&elb=button&ebc=%2300beff&elbc=%23ffffff&elbv=true&elbp=imc&euc=%23303030&ewuv=false&ehuv=false"}
              />
              <Button
                label="Button model example"
                onClick={() => window.location = "/model?mt=0&mr=16&mb=0&ml=0&mlb=margin&mbc=%23ff3f53&mlbc=%23303030&mlbv=true&mlbp=orm&muc=%23ffffff&mtuv=false&mruv=true&mbuv=false&mluv=false&bt=1&br=1&bb=1&bl=1&blb=border&bbc=%23ff8f00&blbc=%23303030&blbv=false&blbp=itl&buc=%23303030&btuv=false&bruv=false&bbuv=false&bluv=false&pt=8&pr=8&pb=8&pl=8&plb=padding&pbc=%2328e070&plbc=%23303030&plbv=true&plbp=itl&puc=%23303030&ptuv=true&pruv=true&pbuv=true&pluv=true&ew=150&eh=75&elb=button&ebc=%2300beff&elbc=%23ffffff&elbv=true&elbp=imc&euc=%23303030&ewuv=false&ehuv=false"}
              />
            </div>

            <div>
              <img
                src={cardModelExample}
                alt="card model example"
                onClick={() => window.location = "/model?mt=0&mr=0&mb=32&ml=0&mlb=margin&mbc=%23ff3f53&mlbc=%23ffffff&mlbv=true&mlbp=ibl&muc=%23ffffff&mtuv=false&mruv=false&mbuv=true&mluv=false&bt=4&br=4&bb=4&bl=4&blb=border&bbc=%23ff8f00&blbc=%23303030&blbv=true&blbp=otl&buc=%23303030&btuv=false&bruv=false&bbuv=false&bluv=false&pt=16&pr=4&pb=16&pl=4&plb=padding&pbc=%2328e070&plbc=%23303030&plbv=true&plbp=ibl&puc=%23303030&ptuv=true&pruv=true&pbuv=true&pluv=true&ew=250&eh=150&elb=card&ebc=%2300beff&elbc=%23ffffff&elbv=true&elbp=itl&euc=%23303030&ewuv=true&ehuv=true"}
              />
              <Button
                label="Card model example"
                onClick={() => window.location = "/model?mt=0&mr=0&mb=32&ml=0&mlb=margin&mbc=%23ff3f53&mlbc=%23ffffff&mlbv=true&mlbp=ibl&muc=%23ffffff&mtuv=false&mruv=false&mbuv=true&mluv=false&bt=4&br=4&bb=4&bl=4&blb=border&bbc=%23ff8f00&blbc=%23303030&blbv=true&blbp=otl&buc=%23303030&btuv=false&bruv=false&bbuv=false&bluv=false&pt=16&pr=4&pb=16&pl=4&plb=padding&pbc=%2328e070&plbc=%23303030&plbv=true&plbp=ibl&puc=%23303030&ptuv=true&pruv=true&pbuv=true&pluv=true&ew=250&eh=150&elb=card&ebc=%2300beff&elbc=%23ffffff&elbv=true&elbp=itl&euc=%23303030&ewuv=true&ehuv=true"}
              />
            </div>

            <div>
              <img
                src={headingModelExample}
                alt="heading model example"
                onClick={() => window.location = "/model?mt=8&mr=0&mb=16&ml=0&mlb=margin&mbc=%23ff3f53&mlbc=%23ffffff&mlbv=true&mlbp=ibl&muc=%23ffffff&mtuv=true&mruv=false&mbuv=true&mluv=false&bt=0&br=0&bb=0&bl=0&blb=border&bbc=%23ff8f00&blbc=%23303030&blbv=false&blbp=itl&buc=%23303030&btuv=false&bruv=false&bbuv=false&bluv=false&pt=0&pr=0&pb=0&pl=0&plb=padding&pbc=%2328e070&plbc=%23303030&plbv=false&plbp=ibl&puc=%23303030&ptuv=false&pruv=false&pbuv=false&pluv=false&ew=300&eh=50&elb=heading&ebc=%2300beff&elbc=%23ffffff&elbv=true&elbp=imc&euc=%23303030&ewuv=false&ehuv=false"}
              />
              <Button
                label="Heading model example"
                onClick={() => window.location = "/model?mt=8&mr=0&mb=16&ml=0&mlb=margin&mbc=%23ff3f53&mlbc=%23ffffff&mlbv=true&mlbp=ibl&muc=%23ffffff&mtuv=true&mruv=false&mbuv=true&mluv=false&bt=0&br=0&bb=0&bl=0&blb=border&bbc=%23ff8f00&blbc=%23303030&blbv=false&blbp=itl&buc=%23303030&btuv=false&bruv=false&bbuv=false&bluv=false&pt=0&pr=0&pb=0&pl=0&plb=padding&pbc=%2328e070&plbc=%23303030&plbv=false&plbp=ibl&puc=%23303030&ptuv=false&pruv=false&pbuv=false&pluv=false&ew=300&eh=50&elb=heading&ebc=%2300beff&elbc=%23ffffff&elbv=true&elbp=imc&euc=%23303030&ewuv=false&ehuv=false"}
              />
            </div>
          </div>
        </div>
      </Layout>
    )}
  />
)

export default IndexPage
