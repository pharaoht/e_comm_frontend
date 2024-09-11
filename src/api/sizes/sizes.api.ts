const devDomain = 'localhost:3000';

export type sizeApiArgs = {
    callback: (...args: any) => void
    httpClient: (...args: any) => Promise<void>
}

const getSizes = async ({ callback, httpClient }: sizeApiArgs) => {

    const url = devDomain === window.location.host 
        ? 'http://localhost:8000/api/sizes' 
        :   `${process.env.NEXT_PUBLIC_URL_DOMAIN}api/sizes`;

    const reqObj = {
        url: url,
        method: 'GET',
    };

    const result = await httpClient({ requestConfig: reqObj, callback: callback });

    return result;
};


export const sizesApi = {
    getSizes,
}