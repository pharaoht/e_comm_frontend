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

    //method override
    protected fromDalSelectDropDowns(data: MaterialDalType[]): { value: any; displayName: any; }[] {
        
        const dal = data.map((itm) => {

            return {
                value: itm.id,
                displayName: itm.materialName.replace('_', ' '),
                radioName: 'material'

            }
        })

        return dal;
    }
}

export default MaterialsDal;