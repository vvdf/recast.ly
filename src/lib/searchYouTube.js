var searchYouTube = (options, callback = () => {}) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: options.key,
      q: options.query,
      part: 'snippet',
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: true
    },
    success: (data) => {
      console.log('SUCCESS!');
      callback(data.items);
    },
    error: (data) => {
      console.log('FAILURE...');
      console.log(data.responseJSON.error.code, data.responseJSON.error.message);
    }
  });
};

export default searchYouTube;
