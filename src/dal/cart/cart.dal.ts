import BaseDALService from "../baseDal";

export type CartDalType = {

}

class CartDal extends BaseDALService<CartDalType> {

    protected getValueKey(): string {
        return ''
    }

    protected getDisplayValueKey(): string {
        return ''
    }

    useDal(isDropDown: boolean, callback: (...args: any) => void, data: any[]): void {
        
        const dal = data.map((itm) => {

            return {
                ...itm,
                sizeName: itm.sizeName.replace('_', ' '),
            }
        });

        const state = callback(dal);

        return state;
    }
}

export default CartDal;