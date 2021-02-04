import axios from 'axios';

export default axios.create({
    baseURL: 'https://gateway.marvel.com',
    params: {
        apikey: '5f32066ca7c29ba06a3fd43d5a043c7e'
    },
});
