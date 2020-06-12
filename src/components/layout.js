/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';

import Header from './header';

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      datakam {
        getdocument(
          dockey:
          {
            DocumentID: "com.kamestery.devdata:##:africa:##:project-kam" 
            Topic: "com.kamestery.devdata:##:africa"
          })
        {Title}
      }
    }
  `);

  return (
      <>
        <Header siteTitle={data.datakam.getdocument.Title}/>
        <div className="ph3 mt-4 mt6-ns">
          <main style={{min_height: "45rem"}}>{children}</main>
          <footer className="fixed bottom-0 pv4 w-100 bg-black">
            <small className="f6 db tc">© 2020 <b className="ttu">OUTCASTGEEK-TECH INC</b>., All Rights Reserved</small>
            <div className="tc mt3">
              <a href="/language/" title="Language"
                 className="f6 dib ph2 link mid-gray dim">Language</a>
              <a href="/terms/" title="Terms"
                 className="f6 dib ph2 link mid-gray dim">Terms of Use</a>
              <a href="/privacy/" title="Privacy"
                 className="f6 dib ph2 link mid-gray dim">Privacy</a>
            </div>
          </footer>
        </div>
      </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
