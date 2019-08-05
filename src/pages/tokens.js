import React from "react"
import Layout from "../components/layout"
import CodeSnippet from "../components/codeSnippet"
import tokens from "../data/tokens"

const TokensPage = () => (
  <Layout>
    <h1>
      Tokens
    </h1>

    <CodeSnippet code={JSON.stringify(tokens, null, 2)} language="json" />
  </Layout>
)

export default TokensPage
