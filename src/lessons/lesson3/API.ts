import axios from 'axios';
import {log} from "util";

const configOMB = {
    baseURL:  'http://www.omdbapi.com/',
};
const key = '888e6db5';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
       return  axiosInstance.get(`?t=${title}&apikey=${key}`).then((value => {
           return value
       })


       ).catch(()=> {
           return   console.log('error')
       })
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get((`?t=${title}&type=${type}&apikey=${key}`))
    }
};


export default API;
