import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Chip from '@material-ui/core/Chip';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {filterMediaByTag} from '../utils/media-utils';
import base64 from 'base-64'

const FeaturedArticle = ({}) => {
  const data = useStaticQuery(graphql`
    query FeaturedArticleQuery {
      datakam {
        getdocument(
          dockey:
          {
            DocumentID: "com.kamestery.devdata:##:fallen:##:george-floyd" 
            Topic: "com.kamestery.devdata:##:fallen"
          })
        {Title Body Media {MediaID FileUrl Tags}}
      }
    }
  `);

  const mediaItems = data.datakam.getdocument.Media;

  const mediaLink = filterMediaByTag(mediaItems, '#link');
  const mediaFtImage = filterMediaByTag(mediaItems, '#headerimage');

  return (
      <>
        <div className="br2 justify-between flex-l">
          <img
              src={mediaFtImage === undefined || mediaFtImage.length === 0
                  ? '#' : mediaFtImage[0].FileUrl}

              className="db img h6-l w-50-l br3 fit-cover"
              alt="Photo of George Floyd"/>
          <article className="pl4-l mw-3 w-50-l mv3">
            <div>
              <h1 className="f2 dark-red">{data.datakam.getdocument.Title}</h1>
            </div>
            <p className="lh-copy mr5-l f6">
              {base64.decode(data.datakam.getdocument.Body)}
            </p>
            <div className="mt4">
              <Chip label="Support"
                    icon={<FavoriteIcon/>}
                    component="a" target="_blank"
                    href={mediaLink.isEmpty ? '#' : mediaLink[0].FileUrl}
                    clickable/>
            </div>
          </article>
        </div>
      </>
  );
};

export default FeaturedArticle;
