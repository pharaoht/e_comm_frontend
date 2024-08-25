const devDomain = 'localhost:3000';

const getAllCategories = async ( genderId: number, callback: (...args: any) => void, httpClient: (...args: any) => Promise<void> ) => {

    const url = window.location.host === devDomain ? `http://localhost:8000/api/categories?genderId=${genderId}` :
    `${process.env.NEXT_PUBLIC_URL_DOMAIN}/api/categories?genderId=${genderId}`;

    const reqObj = {
        url: url,
        method: 'GET',
    };

    const result = await httpClient({ requestConfig: reqObj, callback: callback });

    return result;

};

export const categoryApi = {
    getAllCategories
}