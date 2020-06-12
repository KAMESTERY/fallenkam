import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../tachyons.scss';
import Card from '../components/card';

const IndexPage = () => (
    <Layout>
      <SEO title="Home"/>
      <div className="mw9 center">
        <div className="cf mb6">
          <div className="fl w-100 mb5 pa2">
            <div className="bg-white br2">
              <img
                  src="//via.placeholder.com/950x250"
                  className="db h5 w-100" alt="Photo of Jesse Grant"/>
            </div>
          </div>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </Layout>
);

export default IndexPage;
