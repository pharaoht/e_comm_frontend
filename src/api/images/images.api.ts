import { Dispatch, SetStateAction } from "react";
import BaseApi, { HttpRequestConfig } from "../base.api";
import axios from "axios";

export type apiArgs = {
    id: string | string[]
    callback: Dispatch<SetStateAction<any[]>>
}

class ImagesApi extends BaseApi {

    constructor(){
        super('images', axios)
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