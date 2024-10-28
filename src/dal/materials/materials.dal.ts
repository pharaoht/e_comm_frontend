import BaseDALService from "../baseDal";

export type MaterialDalType = {
    id: string
    materialName: string
}

class MaterialsDal extends BaseDALService<MaterialDalType> {

    protected getValueKey(): string {
        return 'id';
    }

    protected getDisplayValueKey(): string {
        return 'materialName';
    }
}

export default MaterialsDal;