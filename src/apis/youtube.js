import axios from 'axios';

const KEY = 'AIzaSyAPaWrETu5OIY-FaXb8Dm1UlFsZISijQfg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});




