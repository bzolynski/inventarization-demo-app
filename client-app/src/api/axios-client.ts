import { API_BASE } from '@src/constants';
import axios, { AxiosRequestHeaders } from 'axios';

const headers: AxiosRequestHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
};

export default axios.create({
    baseURL: API_BASE,
    headers: headers,
});
