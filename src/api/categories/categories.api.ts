

const getAllCategories = async ( genderId: number, callback: (...args: any) => void, httpClient: (...args: any) => Promise<void> ) => {

    const reqObj = {
        url: `http://localhost:8000/api/categories?genderId=${genderId}`,
        method: 'GET',
    };

    const result = await httpClient({ requestConfig: reqObj, callback: callback });

    return result;

};

export const categoryApi = {
    getAllCategories
}