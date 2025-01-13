import { Dispatch, SetStateAction } from "react";
import BaseApi, { HttpRequestConfig } from "../base.api";
import axios from "axios";
import ImagesDal, { ImagesDalType } from "@/dal/images/images.dal";
import { ImageType } from "@/types/image/image.type";

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

    async preLoadImages(images: Array<ImageType>, callback: (...args: any) => void ){

        const imageLoadPromise = images.map(photo => {

            return new Promise<void>((resolve) => {

                const img = new Image();
                img.src = photo.url;
                img.onload = () => resolve();
            })
        })

        Promise.all(imageLoadPromise)
        .then(() => {
            callback(false)
        })
        .catch(() => {
            console.error('error: Loading Images')
        })
    }
};

export const imagesApi = new ImagesApi();