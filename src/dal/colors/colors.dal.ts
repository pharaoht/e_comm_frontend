import { FilterParams } from "@/components/filter/filterbtn/filter"
import BaseDALService from "../baseDal"

type ColorsDalType = {
    id: string
    productId: string
    colorId: string
    colorName: string
    colorCode: string
}

export interface FilterData {
    value: string;
    displayName: string;
    colorCode?: string;
    id: string;
    radioName: keyof FilterParams;
}

class ColorsDal extends BaseDALService<ColorsDalType>{

    protected getValueKey(): string {   
        return 'colorId'
    };

    protected getDisplayValueKey(): string {
        return 'colorName'
    };

    //overriding method from baseDal
    protected fromDalSelectDropDowns(data: ColorsDalType[]): FilterData[] {
        
        const dal = data.map((itm) => {

            return {
                value: itm.colorId,
                displayName: itm.colorName,
                colorCode: itm.colorCode,
                id: itm.id,
                radioName:'color' as keyof FilterParams
            }
        });

        return dal;
    }
};

export default ColorsDal;