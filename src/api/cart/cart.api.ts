import { useHttpType } from "@/hooks/useHttp";
import BaseApi, { HttpRequestConfig } from "../base.api";
import axios from "axios";

export type cartApiArgs = {
    body?: {
        productId: string
        sizeId: string
        colorId: string
    }
    callback: (...args: any) => void
    httpClient: ({ requestConfig, callback }: useHttpType) => Promise<void>
}

class CartApi extends BaseApi {

    constructor(){
        super('cart', axios)
    }

    async addToCart({ body, callback, httpClient }: cartApiArgs){

        const url = this.findHostName();

        const reqObj = {
            url: `${url}/add`,
            method: 'POST',
            withCredentials: true,
            body: body
        };

        const result = await httpClient({ requestConfig: reqObj, callback: callback });

        return result;

    };

    async getCart({ callback, httpClient }: cartApiArgs){

        const url = this.findHostName();

        const reqObj = {
            url: url,
            method: 'GET',
            withCredentials: true
        };

        const result = await httpClient({ requestConfig: reqObj, callback: callback });

        return result;
    }

    async getCart2({ callback, httpClient }: cartApiArgs){
        
        const url = this.findHostName();

        const reqObj: HttpRequestConfig = {
            url: url,
            method: 'GET',
            withCredentials: true
        };

        const result = await this.httpRequest({ 
            requestConfig: reqObj,
            callback: callback
        });

        return result;
    }
};


export const cartApi = new CartApi();