import ProductDal, { ProductDalType } from "@/dal/product/product.dal";
import BaseApi, { HttpRequestConfig } from "../base.api";
import axios from "axios";

export type productApiArgs = {
    productId?: string | null | string[]
    genderId?: string | null | number
    queryParams?: string | null
    callback: (...args: any) => void
    body?: {
        productName: string
        subCatId: string,
        materialId: string,
        genderId: string,
        price: string,
        desc: string,
        catId: string,
        colorIds: Array<string>
        files?: FileList | null
    }
}

class ProductApi extends BaseApi<ProductDalType> {

    constructor(){
        super('products', axios, new ProductDal())
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

    async createProduct({ body, callback }: productApiArgs){

        try {

            const url = this.findHostName();

            const formData = new FormData();

            // Use non-null assertion to tell TypeScript that these values are not null or undefined
            formData.append('productName', body!.productName);
            formData.append('subCatId', body!.subCatId)
            formData.append('materialId', body!.materialId);
            formData.append('genderId', body!.genderId);
            formData.append('price', body!.price);
            formData.append('desc', body!.desc);
            formData.append('catId', body!.catId);
            formData.append('colorIds', body!.colorIds.join(','));

            if(body?.files){

                for(const photo of body?.files){
                    formData.append('files', photo);
                }
            }
        
            const requestConfig = {
                url: url,
                method: 'POST',
                withCredentials: true,
                data: formData,
            }

            const result = await this.multiPartHttpRequest({
                requestConfig: requestConfig,
                callback: callback,
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