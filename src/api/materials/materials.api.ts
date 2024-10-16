import axios from "axios";
import BaseApi, { HttpRequestConfig } from "../base.api";
import { materialDal } from "@/dal/materials/materials.dal";


interface MaterialsApiArgs {
    materialId?: string
    callback: (...args: any) => void
}

class MaterialsApi extends BaseApi {

    constructor(){
        super('materials', axios)
    };

    async getMaterials({ callback }: MaterialsApiArgs) {

        const url = this.findHostName();

        const reqObj: HttpRequestConfig = {
            url: url,
            method:'GET',
            withCredentials: true
        };

        const result = await this.httpRequest({
            requestConfig: reqObj,
            callback: ( data ) => {

                const dal = materialDal.fromDal(data);

                callback(dal);
            }
        });

    };
};

export const materialsApi = new MaterialsApi();