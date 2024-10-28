abstract class BaseDALService<T> {

    protected abstract getValueKey(): string;
    protected abstract getDisplayValueKey(): string;

    useDal(isDropDown: boolean, callback: (...args: any) => void, data: any[]){

        if(isDropDown){

            const dal = this.fromDalSelectDropDowns(data);

            const state = callback(dal);

            return state;
        }

        const state = callback(data);

        return state;
    }

    protected fromDalSelectDropDowns(data: any[]){

        const valueKey = this.getValueKey();
        const displayValueKey = this.getDisplayValueKey();

        const dal = data.map((itm) => {

            return {
                value: itm[valueKey],
                displayName: itm[displayValueKey]
            }
        });

        return dal;

    }

}

export default BaseDALService;