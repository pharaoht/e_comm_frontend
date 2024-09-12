const devDomain = 'localhost:3000';
const prodDomain = process.env.NEXT_PUBLIC_URL_DOMAIN;
const resource = 'colors';

export type colorsApiArgs = {
    productId?: string | null | string[]
    callback: (...args: any) => void
    httpClient: (...args: any) => Promise<void>
}

const hostNameDomain = (): string => {

    if(window.location.host === devDomain){

        return `http://localhost:8000/api/${resource}`
    }

    return `${prodDomain}api/${resource}`
}

const getColorsByProductId = async ({ productId, callback, httpClient }: colorsApiArgs) => {

    const url = hostNameDomain();

    const reqObj = {
        url: `${url}/${productId}`,
        method: 'GET',
    };

    const result = await httpClient({ requestClient: reqObj, callback: callback });

    return result
}

export const colorsApi = {
    getColorsByProductId
}