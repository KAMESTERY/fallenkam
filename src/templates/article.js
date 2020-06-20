import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import base64 from 'base-64';
import Chip from '@material-ui/core/Chip';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {filterMediaByTag} from '../utils/media-utils';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link} from 'gatsby';

function arrayNotEmpty(mediaItem) {
  return mediaItem === undefined || mediaItem.length === 0;
}

function getFileUrl(mediaItem, defaultUrl) {
  return arrayNotEmpty(mediaItem)
      ? defaultUrl : mediaItem[0].FileUrl;
}

export default function Article(props) {

  const {pageContext} = props;
  const {document} = pageContext;
  console.log('====================================');
  console.log(`This is a item injected from pageContext:${JSON.stringify(pageContext)}`);
  console.log('====================================');

  const mediaItems = document.Media;
  const mediaLink = filterMediaByTag(mediaItems, '#link');
  const mediaFtImage = filterMediaByTag(mediaItems, '#headerimage');
  const title = document.Title;

  return (
      <Layout>
        <SEO title={'Fallen | ' + title}/>
        <section className="mw7 center">
          <div className="nt4 white mb3">
            <Breadcrumbs aria-label="breadcrumb">
              <Link className="f4 mv3 db link mid-gray hover-dark-red"
                    to="/">Fallen
              </Link>
              <p className="f4 mv3 db link light-gray">
                {title}
              </p>
            </Breadcrumbs>
          </div>
          <div className="br2">
            <img
                src={getFileUrl(mediaFtImage)}
                className="db  br3 fit-cover"
                alt={'Photo of George Floyd' + title}/>
            <article className=" mw-3 mv3">
              <div>
                <h1 className="f2 dark-red">{title}</h1>
                <div className="mt4">
                  {Object.keys(mediaLink).length === 0 ?
                      '' : <Chip label="Support"
                                 icon={<FavoriteIcon/>}
                                 component="a" target="_blank"
                                 href={getFileUrl(mediaLink, '#')}
                                 clickable/>}
                </div>
              </div>
              <p className="lh-copy  f6">
                {base64.decode(document.Body)}
              </p>
            </article>
          </div>
        </section>

      </Layout>
  );
};

// export const query = graphql`
//   query($documentID: String!) {
//       datakam {
//         getdocument(
//           dockey:
//           {
//             DocumentID: $documentID
//             Topic: "com.kamestery.devdata:##:fallen"
//           })
//         {Title Body Media {MediaID FileUrl Tags}}
//       }
//   }
// `;
