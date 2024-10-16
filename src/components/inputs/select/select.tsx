import styles from './select.module.css';

export interface DropdownItem {
    value: string;
    displayName: string;
}

interface SelectDropDownInputPropTypes {
    inputValueAttribute: string;
    inputNameAttribute: string;
    labelTitle: string;
    dropDownArray: DropdownItem[ ];
    onChangeHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    isDisabled?: boolean;
    margin?: boolean;
}

const SelectDropDownInput = ({ isDisabled, onChangeHandler, inputValueAttribute, inputNameAttribute, labelTitle, dropDownArray, margin } : SelectDropDownInputPropTypes) => {

    const bottomMargin = margin ? styles.noMargin : styles.margin;

    return (
        <div className={`${styles.formGroup} ${bottomMargin}`}>
            <label htmlFor={inputNameAttribute}>{labelTitle}</label>
            <select 
                id={inputNameAttribute}
                name={inputNameAttribute} 
                value={inputValueAttribute}
                onChange={(event) => onChangeHandler(event)}
                disabled={isDisabled || false}
            >
                {
                    dropDownArray.length > 0 
                    ?
                        dropDownArray.map((itm) => (
                            <option
                                key={itm.value}
                                className={styles.options}
                                value={itm.value}
                            >
                                {itm.displayName}
                            </option>
                        ))
                    :
                    <option value=''>No options available</option>
                }
            </select>
        </div>
    )
};

export default SelectDropDownInput;