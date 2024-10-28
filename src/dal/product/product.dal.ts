import BaseDALService from "../baseDal";

export type ProductDalType = {

}

class ProductDal extends BaseDALService<ProductDalType> {

    protected getValueKey(): string {
        return ''
    }

    protected getDisplayValueKey(): string {
        return ''
    }
}

export default ProductDal