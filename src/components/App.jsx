import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYoutube from '../lib/searchYoutube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData,
    };
    this.setCurrent = this.setCurrent.bind(this);
    this.populateState = this.populateState.bind(this);
    searchYoutube(this.options('sharks'), this.populateState);
  }

  options(query, max = 5) {
    return {
      query: query,
      max: max,
      key: YOUTUBE_API_KEY
    };
  }

  populateState(videos) {
    this.setState({
      currentVideo: videos[0],
      videos: videos
    });
  }

  setCurrent(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} setCurrent={this.setCurrent}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
