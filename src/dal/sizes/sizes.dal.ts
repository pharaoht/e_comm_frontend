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

    protected fromDalSelectDropDowns(data: SizeDalType[]): { value: any; displayName: any; }[] {
        
        const dal = data.map((itm) => {

            return {
                value: itm.sizeId,
                displayName: itm.sizeName.replace('/', ''),
                radioName: 'size'
            }
        });

        return dal
    }
}

export default SizeDal;