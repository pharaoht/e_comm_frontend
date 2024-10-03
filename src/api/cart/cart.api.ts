import BaseApi, { HttpRequestConfig } from "../base.api";
import axios from "axios";

export type cartApiArgs = {
    body?: {
        productId: string
        sizeId: string
        colorId: string
    }
    callback: (...args: any) => void
}

class CartApi extends BaseApi {

    constructor(){
        super('cart', axios)
    }

    async addToCart({ body, callback }: cartApiArgs){
    
        const url = this.findHostName();

        const reqObj: HttpRequestConfig = {
            url: `${url}/add`,
            method: 'POST',
            withCredentials: true,
            body: body
        };

        const result = await this.httpRequest({ requestConfig: reqObj, callback: callback });

        return result;

    };

    async getCart({ callback }: cartApiArgs){

        try {

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
        catch(error){
    
            console.error(this.getErrorStatus());

        }

    }
};


export const cartApi = new CartApi();