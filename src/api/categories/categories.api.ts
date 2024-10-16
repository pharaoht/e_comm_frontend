import categoryDal from '@/dal/categories/categories.dal';
import BaseApi, { HttpRequestConfig } from '../base.api';
import axios from 'axios';

export type categoryApiArgs = {
    genderId?: number | string
    categoryId?: number | string
    callback: (...args: any) => void
};

class CategoryApi extends BaseApi {

    constructor(){
        super('categories', axios)
    }

    async getAllCategoriesByGenderId({ genderId, callback }: categoryApiArgs){

        try{

            const url = this.findHostName();

            const reqObj: HttpRequestConfig = {
                url: `${url}?genderId=${genderId}`,
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
    };

    async getCategoriesByGenderId({ genderId, callback}: categoryApiArgs){

        try{

            const url = this.findHostName();

            const reqObj: HttpRequestConfig = {
                url: `${url}/${genderId}`,
                method: 'GET',
                withCredentials: true, 
            };

            const result = await this.httpRequest({
                requestConfig: reqObj,
                callback: (data) => categoryDal.fromDalSelectDropDowns(data, callback)
            });
 
            return result;

        }
        catch(error){

            console.error(this.getErrorStatus());
        }
    }

    async getSubCategoriesByCategoryId({ categoryId, genderId, callback}: categoryApiArgs){

        try{

            const url = this.findHostName();

            const reqObj: HttpRequestConfig = {
                url: `${url}/${genderId}/${categoryId}`,
                method: 'GET',
                withCredentials: true, 
            };

            const result = await this.httpRequest({
                requestConfig: reqObj,
                callback: (data) => categoryDal.fromDalSelectDropDowns(data, callback)
            });
 
            return result;

        }
        catch(error){

            console.error(this.getErrorStatus());
        }
    }
}

export const categoryApi = new CategoryApi();

// const devDomain = 'localhost:3000';

// const getAllCategories = async ( genderId: number, callback: (...args: any) => void, httpClient: (...args: any) => Promise<void> ) => {

//     const url = window.location.host === devDomain ? `http://localhost:8000/api/categories?genderId=${genderId}` :
//     `${process.env.NEXT_PUBLIC_URL_DOMAIN}api/categories?genderId=${genderId}`;

//     const reqObj = {
//         url: url,
//         method: 'GET',
//         withCredentials: true, 
//     };

//     const result = await httpClient({ requestConfig: reqObj, callback: callback });

//     return result;

// };

// export const categoryApi = {
//     getAllCategories
// }

