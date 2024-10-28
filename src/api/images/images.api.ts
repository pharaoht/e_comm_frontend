import { Dispatch, SetStateAction } from "react";
import BaseApi, { HttpRequestConfig } from "../base.api";
import axios from "axios";
import ImagesDal, { ImagesDalType } from "@/dal/images/images.dal";

export type apiArgs = {
    id: string | string[]
    callback: Dispatch<SetStateAction<any[]>>
}

class ImagesApi extends BaseApi<ImagesDalType> {

    constructor(){
        super('images', axios, new ImagesDal)
    }

    async getImagesFromProductId({ id, callback }: apiArgs){

        const url = this.findHostName();

        const reqObj: HttpRequestConfig = {
            url: `${url}/${id}`,
            method: 'GET',
            withCredentials: true,
        };

        const result = await this.httpRequest({
            requestConfig: reqObj,
            callback: callback
        });

        return result;
    }
};

export const imagesApi = new ImagesApi();