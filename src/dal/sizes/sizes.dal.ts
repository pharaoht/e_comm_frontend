import BaseDALService from "../baseDal";

export type SizeDalType = {
    sizeId: string
    sizeName: string
    sizeAbr: string
}

class SizeDal extends BaseDALService<SizeDalType>{

    protected getValueKey(): string {
        return 'sizeId'
    }

    protected getDisplayValueKey(): string {
        return 'sizeName'
    }
}

export default SizeDal;