import styles from './filter.module.css';
import Sort from './sort/sort';
import FilterBtn from './filterbtn/filter';
import useUrlParams from '@/hooks/useParams';

const paramKey = 'sortBy';
const paramKeyColor = 'color';
const paramKeySize = 'size';
const paramKeyMaterial = 'material';

const Filter = () => {

    const urlParams = useUrlParams();

    const sortByValues = urlParams.getParam(paramKey);

    const colorParamValues = urlParams.getParam(paramKeyColor);

    const sizeParamValues = urlParams.getParam(paramKeySize);

    const materialParamValues = urlParams.getParam(paramKeyMaterial);

    const ob = {
        [paramKeyColor]: colorParamValues,
        [paramKeySize]: sizeParamValues,
        [paramKeyMaterial]: materialParamValues
    }

    const updateQuery = (value: string, paramKey: string) => {
        
        urlParams.setParam(paramKey, value);
    };

    return (
        <div className={styles.container}>
            <Sort formChangeHandler={updateQuery} paramKey={sortByValues}/>
            <FilterBtn 
                formChangeHandler={updateQuery}
                optionalParam={ob}

            />
        </div>
    )
};


export default Filter;