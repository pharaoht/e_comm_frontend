import BaseDALService from "../baseDal";

export type ImagesDalType = {

}


class ImagesDal extends BaseDALService<ImagesDalType> {

    protected getValueKey(): string {
        return ''
    }

    protected getDisplayValueKey(): string {
        return ''
    }
}

export default ImagesDal;