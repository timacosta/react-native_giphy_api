import axios from 'axios';
import {BASE_URL, API_KEY} from '../config/api'


const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'}
    
});

export const getTrendGifs = () => {
    const url = `/trending?api_key=${API_KEY}`
    return axiosInstance.get(url)
}

//MOCK Method to create a gif
export const createGif = (params) => {
    console.log("params",params);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mockGif = {
                title: params.title,
                image: params.image,
        };
        console.log("mockGif",mockGif)
        resolve(mockGif);
    }, 2500)
    })
}