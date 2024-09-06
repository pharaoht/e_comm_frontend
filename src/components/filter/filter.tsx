import styles from './filter.module.css';

const Filter = () => {

    return (
        <div className={styles.container}>
            <div >
                <button className={styles.btn}>
                    <span>Sort by</span>
                </button>
            </div>
            <div>
                <button>
                    <span>Filter by</span>
                </button>
            </div>
        </div>
    )
};


export default Filter;