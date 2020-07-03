import React from 'react';
import Chip from '@material-ui/core/Chip';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {filterMediaByTag} from '../utils/media-utils';
import base64 from 'base-64';

function isUndefinedOrEmpty(list) {
  return list === undefined || list.length === 0;
}

export default class FeaturedArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: parseInt(props.startTimeInSeconds, 10) || 0,
      idx: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 8000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1,
      idx: this.props.data.length - 1 === state.idx ? 0 : state.idx + 1,
    }));
  }

render(){
  const document = this.props.data[this.state.idx];
  const mediaItems = document.Media;
  const mediaLink = filterMediaByTag(mediaItems, '#link');
  const mediaFtImage = filterMediaByTag(mediaItems, '#headerimage');
  return (
      <>
        <div className="br2 justify-between flex-l">
          <img
              src={isUndefinedOrEmpty(mediaFtImage) ? '#' : mediaFtImage[0].FileUrl}
              className="db w-100 mr3-l h6-l w-50-l br3 fit-cover"
              alt="Photo of George Floyd"/>
          <article className="pl4-l mw-3 ml2-l w-50-l mv3">
            <div>
              <h1 className="f2 dark-red">{document.Title}</h1>
            </div>
            <p className="lh-copy mr5-l f6">
              {base64.decode(document.Body)}
            </p>
            <div className="mt4">
              <Chip label="Support"
                    icon={<FavoriteIcon/>}
                    component="a" target="_blank"
                    href={isUndefinedOrEmpty(mediaLink) ? '#' : mediaLink[0].FileUrl}
                    clickable/>
            </div>
          </article>
        </div>
      </>
  );
}
};
