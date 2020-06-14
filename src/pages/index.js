import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../tachyons.scss';
import CardGrid from '../components/card-grid';
import FeaturedArticle from '../components/featured-article';

const IndexPage = () => (
    <Layout>
      <SEO title="Home"/>
      <div className="mw9 center">
        <div className="cf mb6">
          <div className="fl mt5 mt0-ns w-100 mb5 pa2">
            <h1 className="fw6 tc center f3 f2-ns lh-title mt0 mb5">
              Remember the <span className="dark-red">Fallen</span>
            </h1>
            <FeaturedArticle/>
          </div>
          <CardGrid data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}/>
        </div>
      </div>
    </Layout>
);

export default IndexPage;
