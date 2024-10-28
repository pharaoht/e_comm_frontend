import axios from "axios";
import BaseApi, { HttpRequestConfig } from "../base.api";
import SizeDal, { SizeDalType } from "@/dal/sizes/sizes.dal";

export type sizeApiArgs = {
    callback: (...args: any) => void
    isDropDown?: boolean
}

class SizeApi extends BaseApi<SizeDalType> {

    constructor(){
        super('sizes', axios, new SizeDal())
    }

    async getSizes({ callback, isDropDown }: sizeApiArgs){

        const url = this.findHostName();

        const useDal = isDropDown || false

        const reqObj: HttpRequestConfig = {
            url: url,
            method: 'GET',
            withCredentials: true
        };

        const result = await this.httpRequest({
            requestConfig: reqObj,
            callback: callback,
            isDropDown: useDal
        });

        return result;
    }
};

export const sizeApi = new SizeApi();