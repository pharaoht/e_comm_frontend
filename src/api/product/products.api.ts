const devDomain = 'localhost:3000';

export type productApiArgs = {
    productId?: string | null
    genderId?: string | null | number
    queryParams?: string | null
    callback: (...args: any) => void
    httpClient: (...args: any) => Promise<void>
}

const getProducts = async ({ genderId, queryParams, callback, httpClient }: productApiArgs ) => {

    const url = window.location.host === devDomain ? `http://localhost:8000/api/products?genderId=${genderId}${queryParams}` :
    `${process.env.NEXT_PUBLIC_URL_DOMAIN}api/products?genderId=${genderId}${queryParams}`;

    const reqObj = {
        url: url,
        method: 'GET',
    };

    const result = await httpClient({ requestConfig: reqObj, callback: callback });

    return result;

};

const getProductById = async ({ productId, callback, httpClient }: productApiArgs) => {

    
};

export const productApi = {
    getProducts
}