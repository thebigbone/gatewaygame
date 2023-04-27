import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '095fb5c23c424ca3a56a15d8ed70ec3b'
    }
})