import axios from "axios";
import BaseApi, { HttpRequestConfig } from "../base.api";
import MaterialsDal from "@/dal/materials/materials.dal";


interface MaterialsApiArgs {
    materialId?: string
    callback: (...args: any) => void
    isDropDown?: boolean
}

class MaterialsApi extends BaseApi<MaterialsDal> {

    constructor(){
        super('materials', axios, new MaterialsDal())
    };

    async getMaterials({ callback, isDropDown }: MaterialsApiArgs) {

        const url = this.findHostName();

        const useDal = isDropDown || false;

        const reqObj: HttpRequestConfig = {
            url: url,
            method:'GET',
            withCredentials: true
        };

        const result = await this.httpRequest({
            requestConfig: reqObj,
            callback: callback,
            isDropDown: useDal
        });

    };
};

export const materialsApi = new MaterialsApi();