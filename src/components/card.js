import React, {useState} from 'react';
import {filterMediaByTag} from '../utils/media-utils';
import {Link} from 'gatsby';

const Card = ({data}) => {
  const mediaFtImage = filterMediaByTag(data.Media, '#headerimage');
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  let hoverClass = hovered ? '' : 'grayscale-img';
  return (
      <div className="fl w-100 w-50-m w-25-ns pa2"
           onMouseEnter={toggleHover}
           onMouseLeave={toggleHover}>
        <article className="hide-child relative center">
          <Link to="/article/" state={{data: data}}>
            <img style={{cursor: 'pointer'}}
                 src={mediaFtImage === undefined || mediaFtImage.length === 0
                     ? '//via.placeholder.com/350x150' : mediaFtImage[0].FileUrl}
                 className={'db w-100 h5 br3 fit-cover ' + hoverClass}
                 alt={'Photo of ' + data.Title}/>
          </Link>
          <div>
            <Link to="/article/"
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
