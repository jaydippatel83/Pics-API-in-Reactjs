import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:
            'Client-ID 6c7c89cfe37ab5f0c074bd790134ad8ce528c1e0b330bad38fb897b343b900da'
    }
});
