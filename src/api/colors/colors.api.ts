import BaseApi, { HttpRequestConfig } from "../base.api";
import axios from "axios";
import ColorsDal from "@/dal/colors/colors.dal";
import { ColorType } from "@/types/color/color.type";

export type colorsApiArgs = {
    productId?: string | null | string[]
    callback: (...args: any) => void
    isDropDown?: boolean
}

class ColorsApi extends BaseApi<ColorType> {   

    constructor(){
        super('colors', axios, new ColorsDal());
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

    async getColors({ callback, isDropDown }: colorsApiArgs){

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

        return result;
    }
};

export const colorsApi = new ColorsApi();