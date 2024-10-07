import { useHttpType } from "@/hooks/useHttp";
import BaseApi, { HttpRequestConfig } from "../base.api";
import axios from "axios";

export type colorsApiArgs = {
    productId?: string | null | string[]
    callback: (...args: any) => void
}

class ColorsApi extends BaseApi {

    constructor(){
        super('colors', axios)
    }

    async getColorsByProductId({ productId, callback }: colorsApiArgs){

        const url = this.findHostName();

        const reqObj: HttpRequestConfig = {
            url: `${url}/${productId}`,
            method: 'GET',
            withCredentials: true,
        };
        
        const result = await this.httpRequest({
            requestConfig: reqObj,
            callback: callback
        });

        return result;
    };

    async getColors({ callback }: colorsApiArgs){

        const url = this.findHostName();

        const reqObj: HttpRequestConfig = {
            url: url,
            method:'GET',
            withCredentials: true
        };

        const result = await this.httpRequest({
            requestConfig: reqObj,
            callback: callback
        });

        return result;
    }
};

export const colorsApi = new ColorsApi();