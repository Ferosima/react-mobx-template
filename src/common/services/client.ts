import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import qs from 'qs';
import { isObject } from '../utils/helpers';

class Axios {
    private defaultHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    };

    private errorHandler(options: any, error: AxiosError) {
        if (error.response && error.response.status === 401) {
            // mainStore.userStore.logout();
            // TODO: redirect to root
        }
        throw error;
    }

    private transformRequest = (data = {}) => {
        if (!isObject(data) || !Object.keys(data).length) return data;
        data = Object.entries(data).reduce((acc, [key, value]) => {
            if (value === undefined) return acc;
            return { ...acc, [key]: value };
        }, {});
        return JSON.stringify(data);
    };

    private paramsSerializer = (data = {}): string => {
        if (!isObject(data)) return `${data}`;
        data = Object.entries(data).reduce((acc, [key, value]) => {
            if (value === undefined) return acc;
            return { ...acc, [key]: value };
        }, {});
        return qs.stringify(data, { arrayFormat: 'brackets' });
    };

    private client = axios.create({
        timeout: 30000,
        headers: this.defaultHeaders,
        withCredentials: true,
        baseURL: process.env.NODE_ENV === 'production' ? '/api' : '',
        transformRequest: this.transformRequest,
        paramsSerializer: this.paramsSerializer,
    });

    public set headers(headers: AxiosRequestConfig['headers']) {
        this.client.defaults.headers = {
            ...this.client.defaults.headers,
            ...headers,
        };
    }

    async _get(url: string, options?: AxiosRequestConfig) {
        try {
            const _params = this.paramsSerializer(options ? options.params : {});
            const response = await fetch(`${url}?${_params}`, {
                mode: 'no-cors',
            });
            return response.json();
        } catch (error: any) {
            this.errorHandler({ url, options }, error);
        }
    }

    async get(url: string, options?: AxiosRequestConfig) {
        try {
            const response = await this.client.get(url, options);
            return response.data;
        } catch (error: any) {
            this.errorHandler({ url, options }, error);
        }
    }

    async post(url: string, body: any = {}, options?: AxiosRequestConfig) {
        try {
            const response = await this.client.post(url, body, options);
            return response.data;
        } catch (error: any) {
            this.errorHandler({ url, body, options }, error);
            return error;
        }
    }

    async put(url: string, body: any, options?: AxiosRequestConfig) {
        try {
            const response = await this.client.put(url, body, options);
            return response.data;
        } catch (error: any) {
            this.errorHandler({ url, body, options }, error);
        }
    }

    async delete(url: string, options?: AxiosRequestConfig) {
        try {
            const response = await this.client.delete(url, options);
            return response.data;
        } catch (error: any) {
            this.errorHandler({ url, options }, error);
        }
    }
}

const client = new Axios();
export default client;
