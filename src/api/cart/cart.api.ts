import CartDal, { CartDalType } from "@/dal/cart/cart.dal";
import BaseApi, { HttpRequestConfig } from "../base.api";
import axios from "axios";

export type cartApiArgs = {
    body?: {
        productId: string
        sizeId: string
        colorId: string
        cartId?: string
    }
    callback: (...args: any) => void
    params?: string
}

class CartApi extends BaseApi<CartDalType> {

    constructor(){
        super('cart', axios, new CartDal())
    }

    async addToCart({ body, callback }: cartApiArgs){
    
        try {
            const url = this.findHostName();

            const reqObj: HttpRequestConfig = {
                url: `${url}/add`,
                method: 'POST',
                withCredentials: true,
                data: body
            };

            const result = await this.httpRequest({ requestConfig: reqObj, callback: callback });

            return result;
        }
        catch(error){
    
            console.error(this.getErrorStatus());

        }

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

    async deleteCart({ params, callback }: cartApiArgs){

        try {

            const url = this.findHostName();

            const reqObj: HttpRequestConfig = {
                url: `${url}?${params}`,
                method: 'DELETE',
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