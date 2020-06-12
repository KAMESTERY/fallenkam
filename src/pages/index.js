import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../tachyons.scss';
import Card from '../components/card';
import Chip from '@material-ui/core/Chip';
import FavoriteIcon from '@material-ui/icons/Favorite';

const IndexPage = () => (
    <Layout>
      <SEO title="Home"/>
      <div className="mw9 center">
        <div className="cf mb6">
          <div className="fl mt5 mt0-ns w-100 mb5 pa2">
            <h1 className="fw6 tc center f3 f2-ns lh-title mt0 mb5">
              Remember the <span className="dark-red">Fallen</span>
            </h1>
            <div className="br2 justify-center flex-ns">
              <img
                  src="//cdn.cnn.com/cnnnext/dam/assets/200527194814-george-floyd-police-minneapolis-minnesota-dead-protests-00021927-exlarge-169.jpg"
                  className="db h5 w-50-ns br3 fit-cover"
                  alt="Photo of George Floyd"/>

              <article className="pl4-ns mw-3  w-50-ns mv3">
                <div>
                  <h1 className="f4">George Floyd</h1>
                </div>
                <p className="lh-copy mr5 f6">
                  George Perry Floyd Jr. (October 14, 1973 – May 25, 2020) was
                  an African-American man who was killed
                  by police during an arrest in Minneapolis on May 25, 2020.
                  Protests in response to both Floyd's death,
                  and more broadly to police violence against black people,
                  quickly spread across the United States and internationally.
                </p>
                <div className="mt4">
                  <Chip label="Support"
                        icon={<FavoriteIcon/>}
                        component="a" target="_blank"
                        href="///www.gofundme.com/f/georgefloyd" clickable/>
                </div>

              </article>
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
