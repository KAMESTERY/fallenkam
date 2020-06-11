import React from 'react';
import Button from '@material-ui/core/Button';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import '../tachyons.scss';

const IndexPage = () => (
    <Layout>
      <SEO title="Home"/>
      <h1 className="purple">Hello World</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
        <Image/>
      </div>
      <Button variant="contained" href="/page-2/">Go to page 2 </Button>
    </Layout>
);

export default IndexPage;
