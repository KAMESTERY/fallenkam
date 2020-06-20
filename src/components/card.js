import React, {useState} from 'react';
import {filterMediaByTag} from '../utils/media-utils';
import {Link} from 'gatsby';

const Card = ({data}) => {
  console.log(`CARD DATA:: ${JSON.stringify(data)}`);
  const mediaFtImage = filterMediaByTag(data.Media, '#headerimage');
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  let hoverClass = hovered ? '' : 'grayscale-img';
  return (
      <div className="fl w-100 w-50-m w-25-ns pa2"
           onMouseEnter={toggleHover}
           onMouseLeave={toggleHover}>
        <article className="hide-child relative center">
          <Link to={`${data.Slug}`} state={{data: data}}>
            <img style={{cursor: 'pointer'}}
                 src={mediaFtImage === undefined || mediaFtImage.length === 0
                     ? '//via.placeholder.com/350x150' : mediaFtImage[0].FileUrl}
                 className={'db w-100 h5 br3 fit-cover ' + hoverClass}
                 alt={'Photo of ' + data.Title}/>
          </Link>
          <div>
            <Link to={`${data.Slug}`}
                  className="f4 mv3 db link light-gray hover-dark-red"
                  state={{data: data}}>
              {data.Title}
            </Link>
          </div>
        </article>
      </div>
  );
};

export default Card;
