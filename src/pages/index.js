import React from 'react';
import Button from '@material-ui/core/Button';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import '../tachyons.scss';

const IndexPage = () => (
    <Layout>
      <SEO title="Home"/>
      <div className="mw9 mt4 center">
        <div className="cf">
          <div className="fl w-100 w-25-ns pa2">
            <div className="outline bg-white pv4"></div>
          </div>
          <div className="fl w-100 w-25-ns pa2">
            <div className="outline bg-white pv4"></div>
          </div>
          <div className="fl w-100 w-25-ns pa2">
            <div className="outline bg-white pv4"></div>
          </div>
          <div className="fl w-100 w-25-ns pa2">
            <div className="outline bg-white pv4"></div>
          </div>
        </div>
      </div>
    </Layout>
);

export default IndexPage;
