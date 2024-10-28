import BaseDALService from "../baseDal"

type ColorsDalType = {
    id: string
    productId: string
    colorId: string
    colorName: string
    colorCode: string
}

class ColorsDal extends BaseDALService<ColorsDalType>{

    protected getValueKey(): string {   
        return 'colorId'
    };

    protected getDisplayValueKey(): string {
        return 'colorName'
    };

    //overriding method from baseDal
    protected fromDalSelectDropDowns(data: ColorsDalType[]): { value: any; displayName: any; }[] {
        
        const dal = data.map((itm) => {

            return {
                value: itm.colorId,
                displayName: itm.colorName,
                colorCode: itm.colorCode,
                id: itm.id,
                radioName:'color'
            }
        });

        return dal;
    }
};

export default ColorsDal;