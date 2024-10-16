type ColorsDalType = {
    id: string
    productId: string
    colorId: string
    colorName: string
    colorCode: string
}

class ColorsDal {

    constructor(){

    };


    fromDalSelectDropDowns( data: ColorsDalType[], callback: (...args: any) => void): void {

        const dal = data.map((itm) => {

            return {
                value: itm.colorId,
                displayName: itm.colorName,
                colorCode: itm.colorCode
            }
        });

        callback(dal);

    };
};

const colorsDal = new ColorsDal();

export default colorsDal;