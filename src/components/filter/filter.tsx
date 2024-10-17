import { useRouter } from 'next/navigation';
import styles from './filter.module.css';
import Sort from './sort/sort';

const paramKey = 'sortBy'

const Filter = () => {

    const router = useRouter();

    const updateQuery = (event: React.ChangeEvent<HTMLInputElement>) => {

        const value = event.target.value;

        const params = new URLSearchParams(window.location.search);

        params.set(paramKey, value);
       
        router.replace(`${window.location.pathname}?${params.toString()}`);

    };

    return (
        <div className={styles.container}>
            <Sort formChangeHandler={updateQuery}/>
            <button>hi</button>
        </div>
    )
};


export default Filter;