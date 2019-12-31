import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: {}, //exampleVideoData[0],
      videos: []//exampleVideoData,
    };
    this.setCurrent = this.setCurrent.bind(this);
    this.populateState = this.populateState.bind(this);
  }

  options(query, max = 5) {
    return {
      query: query,
      max: max,
      key: YOUTUBE_API_KEY
    };
  }

  populateState(videos) {
    //set state should take in a callback in order to run right away
    //should not change the state directly but should be represented by building a new object based
    //on current state and prop
    /*
    this.setState((state, props) => {
      return {counter: state.counter + props.step};
    }) */
    /*return this.state = */
    this.setState ({
      currentVideo: videos[0],
      videos: videos
    });
  }

  setCurrent(video) {
    //set state should take in a callback in order to run right away
    this.setState({
      currentVideo: video
    });
  }

  componentDidMount() {
    console.log(typeof this.props.searchYouTube);
    if (this.props.searchYouTube !== undefined) {
      this.props.searchYouTube(this.options('sharks'), this.populateState);
    }
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
