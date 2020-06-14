import React, { useState } from 'react';
import {filterMediaByTag} from '../utils/media-utils';

const Card = ({data}) => {
  const mediaFtImage = filterMediaByTag(data.Media, '#headerimage');
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  let hoverClass = hovered ? '' : 'grayscale-img';
  return (
      <div className="fl w-100 w-50-m w-25-ns pa2">
        <article className="hide-child relative center">
          <img
              style={{cursor: 'pointer'}}
              src={mediaFtImage === undefined || mediaFtImage.length === 0
                  ? "//via.placeholder.com/350x150" : mediaFtImage[0].FileUrl}
              className={"db w-100 h5 br3 fit-cover " + hoverClass}
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}

              alt={'Photo of ' + data.Title}/>
          <div>
            <a className="f4 mv3 db link light-gray hover-dark-red" href="#">
              {data.Title}
            </a>
          </div>
        </article>
      </div>
  )
};

export default Card;
