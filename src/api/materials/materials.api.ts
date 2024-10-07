import axios from "axios";
import BaseApi, { HttpRequestConfig } from "../base.api";


interface MaterialsApiArgs {
    materialId?: string
    callback: (...args: any) => void
}

class MaterialsApi extends BaseApi {

    constructor(){
        super('materials', axios)
    };

    async getMaterials({ callback }: MaterialsApiArgs){

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
    };
};

export const materialsApi = new MaterialsApi();