import { useRouter, useSearchParams } from 'next/navigation';
import styles from './filter.module.css';
import Sort from './sort/sort';
import FilterBtn from './filter/filter';

const paramKey = 'sortBy';
const paramKeyColor = 'color';
const paramKeySize = 'size';
const paramKeyMaterial = 'material';

const Filter = () => {

    const router = useRouter();

    const searchParams = useSearchParams();

    const sortByValues = searchParams.get(paramKey);

    const updateQuery = (event: React.ChangeEvent<HTMLInputElement>) => {

        const value = event.target.value;

        const params = new URLSearchParams(window.location.search);

        params.set(paramKey, value);
       
        router.replace(`${window.location.pathname}?${params.toString()}`);

    };

    


    return (
        <div className={styles.container}>
            <Sort formChangeHandler={updateQuery} paramValue={sortByValues || ''}/>
            <FilterBtn/>
        </div>
    )
};


export default Filter;