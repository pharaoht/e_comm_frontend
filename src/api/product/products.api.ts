import BaseApi, { HttpRequestConfig } from "../base.api";
import axios from "axios";

export type productApiArgs = {
    productId?: string | null | string[]
    genderId?: string | null | number
    queryParams?: string | null
    callback: (...args: any) => void

}

class ProductApi extends BaseApi {

    constructor(){
        super('products', axios)
    }

    async getProductById({ productId, callback }: productApiArgs){

        try{

            const url = this.findHostName();

            const reqObj: HttpRequestConfig = {
                url: `${url}/${productId}`,
                method: 'GET',
                withCredentials: true,
            }
 
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

    async getProducts({ genderId, queryParams, callback }: productApiArgs){

        try{

            const url = this.findHostName();
    
            const reqObj: HttpRequestConfig = {
                url: `${url}?genderId=${genderId}${queryParams}`,
                method: 'GET',
                withCredentials: true,
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

export const productApi = new ProductApi();

// const getProducts = async ({ genderId, queryParams, callback, httpClient }: productApiArgs ) => {

//     const url = window.location.host === devDomain ? `http://localhost:8000/api/products?genderId=${genderId}${queryParams}` :
//     `${process.env.NEXT_PUBLIC_URL_DOMAIN}api/products?genderId=${genderId}${queryParams}`;

//     const reqObj = {
//         url: url,
//         method: 'GET',
//         withCredentials: true,
//     };

//     const result = await httpClient({ requestConfig: reqObj, callback: callback });

//     return result;

// };

// const getProductById = async ({ productId, callback, httpClient }: productApiArgs) => {

//     const url = window.location.host === devDomain ? `http://localhost:8000/api/products/${productId}` :
//     `${process.env.NEXT_PUBLIC_URL_DOMAIN}api/products/${productId}`;

//     const reqObj = {
//         url: url,
//         method: 'GET',
//         withCredentials: true,
//     };

//     const result = await httpClient({ requestConfig: reqObj, callback: callback });

//     return result;
// };

// export const productApi = {
//     getProducts,
//     getProductById
// }