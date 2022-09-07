import axios from 'axios';

const KEY = 'AIzaSyBa0TUc25xdmQhnMNnN-BBdz3o3IvG3U_U'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 50,
        key: KEY

    }

})