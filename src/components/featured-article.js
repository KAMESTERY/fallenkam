import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Chip from '@material-ui/core/Chip';
import FavoriteIcon from '@material-ui/icons/Favorite';

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

  function containsTag(inputTag) {
    return (media) =>
        media.Tags.some((tag) => tag === inputTag);
  }

  function filterMediaByTag(mediaItems, inputTag) {
    return mediaItems.filter(containsTag(inputTag)).map(media => {
      return Object.assign({}, media, {
        Tags: media.Tags.filter(tag => tag === inputTag),
      });
    });
  }

  const mediaLink = filterMediaByTag(mediaItems, '#link');
  const mediaFtImage = filterMediaByTag(mediaItems, '#headerimage');

  return (
      <>
        <div className="br2 justify-center flex-l">
          <img
              src={mediaFtImage.isEmpty ? '#' : mediaFtImage[0].FileUrl}
              className="db h5-l w-30-l br3 fit-cover"
              alt="Photo of George Floyd"/>
          <article className="pl4-l mw-3 w-50-l mv3">
            <div>
              <h1 className="f4 dark-red">{data.datakam.getdocument.Title}</h1>
            </div>
            <p className="lh-copy mr4-l f6">
              {window.atob(data.datakam.getdocument.Body)}
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
