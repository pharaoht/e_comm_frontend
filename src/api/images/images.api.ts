import { useHttpType } from "@/hooks/useHttp";
import { Dispatch, SetStateAction } from "react";

const devDomain = 'localhost:3000';

export type apiArgs = {
    id: string | string[]
    callback: Dispatch<SetStateAction<any[]>>
    httpClient: ({ requestConfig, callback }: useHttpType) => Promise<void>
}

const getImagesFromProductId = async ({ id, callback, httpClient }: apiArgs) => {

    const url = window.location.host === devDomain ? `http://localhost:8000/api/images/${id}` :
    `${process.env.NEXT_PUBLIC_URL_DOMAIN}api/images/${id}`;

    const reqObj = {
        url: url,
        method: 'GET',
    };

    const result = await httpClient({ requestConfig: reqObj, callback: callback });

    return result;
};


export const imagesApi = {
    getImagesFromProductId
};