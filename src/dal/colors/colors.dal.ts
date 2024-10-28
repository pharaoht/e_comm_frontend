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
};

export default ColorsDal;