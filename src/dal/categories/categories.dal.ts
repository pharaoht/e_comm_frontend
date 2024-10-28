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

};

export default CategoryDal;