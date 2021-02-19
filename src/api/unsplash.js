import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4IVi-rgKNP8s84jDorQYSJ9cF3h58qUCSYBBweXyfuc'
    }
});