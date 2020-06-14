import React from 'react';
import {filterMediaByTag} from '../utils/media-utils';

const Card = ({data}) => {
  const mediaFtImage = filterMediaByTag(data.Media, '#headerimage');
  return (
      <div className="fl w-100 w-50-m w-25-ns pa2">
        <article className="hide-child relative center">
          <img
              src={mediaFtImage === undefined || mediaFtImage.length === 0
                  ? "//via.placeholder.com/350x150" : mediaFtImage[0].FileUrl}

              className="db w-100 h5 br3 fit-cover" alt={'Photo of ' + data.Title}/>
          <div>
            <a className="f4 mv3 db link light-gray hover-dark-red" href="#">
              {data.Title}
            </a>
          </div>
          <a className="child absolute top-1 right-1 ba bw1 black-40 grow no-underline br-100 w1 h1 pa2 lh-solid b"
             href="#">×</a>
        </article>
      </div>
  )
};

export default Card;
