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
}

export default CartDal;