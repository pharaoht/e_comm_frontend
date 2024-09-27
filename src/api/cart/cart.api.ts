import { useHttpType } from "@/hooks/useHttp";

export type cartApiArgs = {
    callback: (...args: any) => void
    httpClient: ({ requestConfig, callback }: useHttpType) => Promise<void>
}

class CartApi extends BaseApi {

    constructor(){
        super('cart')
    }

    async addToCart({ callback, httpClient }: cartApiArgs){

        const url = this.findHostName();

        const reqObj = {
            url: url,
            method: 'GET',
            withCredentials: true,
        };

        const result = await httpClient({ requestConfig: reqObj, callback: callback });

        return result;

    };

    async getCart({callback, httpClient }: cartApiArgs){

    }
};


export const cartApi = new CartApi();