import React from 'react'
import { Link } from 'gatsby'

import Layout from 'src/components/layout'
import Image from 'src/components/image'
import SEO from 'src/components/seo'
import 'twin.macro'

const IndexPage: React.FC = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div tw="mb-2 max-w-xs">
            <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to Using TypeScript</Link>
    </Layout>
)

export default IndexPage
