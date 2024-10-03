import axios from "axios";
import BaseApi, { HttpRequestConfig } from "../base.api";

export type sizeApiArgs = {
    callback: (...args: any) => void
}

class SizeApi extends BaseApi {

    constructor(){
        super('sizes', axios)
    }

    async getSizes({ callback }: sizeApiArgs){

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

export const sizeApi = new SizeApi();