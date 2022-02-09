import { AxiosResponse } from 'axios';
import { HelloWorldInterface } from '../types';
import { API_URL } from '../utils/constants/constants';
import api from './api';

const getHelloWorld = () => {
    return api
        .get(`${API_URL}/helloworld.json`)
        .then((response: AxiosResponse<HelloWorldInterface>) => {
            return Promise.resolve(response.data as HelloWorldInterface);
        });
};
export default {
    getHelloWorld,
};
