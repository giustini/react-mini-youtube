import axios from "axios";

const KEY = "AIzaSyBhm0c98__eCH6XH3FXFKAF5IEJ1JKkzRc";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});