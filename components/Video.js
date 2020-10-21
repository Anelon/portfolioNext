import { Component } from 'react';
import ReactPlayer from 'react-player';

export class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vidsrc: this.props.src,
    }
  }
  render() {
    var src = this.state.vidsrc;
    return (
      <div>
        <ReactPlayer
          className='reactPlayer'
          url={src}
          width='100%'
          height='100%'
          controls={true}
        />
      </div>
    )
  }
}

class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: this.props.videos,
    }
  }
  render() {
    var vidSrc = this.props.videos;
    var size = "medium-4 large-4";
    if (vidSrc.length === 1) size = "medium-8 large-8";
    else if (vidSrc.length === 2) size = "medium-6 large-6";
    else if (!(vidSrc.length % 3)) size = "medium-4 large-4";
    else if (!(vidSrc.length % 4)) size = "medium-3 large-3";

    var vidList = vidSrc.map(function (src) {
      return (
        <div className={"cell " + size} key={src}>
          <h2 className="text-center"><strong>{src[0]}</strong></h2>
          <div className="responsive-embed widescreen callout small">
            <Video title={src[0]} src={src[1]} />
          </div>
        </div>
      )
    });

    return (
      <div className="grid-x grid-margin-x">
        { vidSrc.length === 1 ? <div className="cell medium-2 large-2"></div> : null}
        {vidList}
      </div>
    )
  }
}

export default Videos;

