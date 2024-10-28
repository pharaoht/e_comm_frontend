//The abstract keyword just enforces a contract that subclasses must adhere to.
abstract class BaseDALService<T> {


    //if you inherit from me, you better have these methods defined.
    protected abstract getValueKey(): string;
    protected abstract getDisplayValueKey(): string;

    /**
     * useDal: The ultimate gatekeeper!
     * Decides if the API call needs a fancy transformation through the data access layer 
     * for those sleek dropdown keys, or if raw data will suffice.
    */
    useDal(isDropDown: boolean, callback: (...args: any) => void, data: any[]){

        if(isDropDown){

            const dal = this.fromDalSelectDropDowns(data);

            const state = callback(dal);

            return state;
        }

        const state = callback(data);

        return state;
    }

    /**
     * fromDalSelectDropDowns: The Master Transformer!
     * Converts raw API data into sleek dropdown-ready key-value pairs.
     * It's like a fashion makeover, but for your data!
    */
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