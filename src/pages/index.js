import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../styles.scss';
import CardGrid from '../components/card-grid';
import FeaturedArticle from '../components/featured-article';
import {graphql, useStaticQuery} from 'gatsby';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query FallenDocumentList {
      datakam {
        fallen:querydocument(
          query:
          {
            Name: "com.kamestery.devdata:##:fallen"
          })
        {Title Body Slug Media {MediaID FileUrl Tags}}
      }
    }
  `);
  return (
      <Layout>
        <SEO title="Home"/>
        <div className="mw9 center">
          <div className="cf mb6">
            <div className="fl mt5 mt0-ns w-100 mb5 pa2">
              <h1 className="fw6 tc center f1 f2-ns mt0 mb5">
                Remember the <span className="dark-red">Fallen </span>
              </h1>
              <FeaturedArticle/>
            </div>
            {/*{JSON.stringify(data.datakam.fallen)}*/}
            <CardGrid data={data.datakam.fallen}/>
          </div>
        </div>
      </Layout>
  );
};

export default IndexPage;
