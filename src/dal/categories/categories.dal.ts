type CategoryDalType = {
    value: string
    displayName: string
}

class CategoryDal {

    constructor(){

    };


    fromDalSelectDropDowns( data: Array<CategoryDalType>, callback: (...args: any) => void): void {

        const defaultValue: CategoryDalType = {
            value: '',
            displayName: 'Select an option'
        }

        data.unshift(defaultValue);

        callback(data);

    };
};

const categoryDal = new CategoryDal();

export default categoryDal;