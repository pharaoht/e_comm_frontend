import BaseDALService from "../baseDal";

export type CategoryDalType = {
    value: string
    displayName: string
}

class CategoryDal extends BaseDALService<CategoryDalType> {

    protected getValueKey(): string {
        return 'id'
    }

    protected getDisplayValueKey(): string {
        return 'displayName'
    }

    protected fromDalSelectDropDowns(data: any[]): { value: any; displayName: any; }[] {
        
        const dal = [{value: '', displayName: 'Select'}, ...data]

        return dal;
    }

};

export default CategoryDal;