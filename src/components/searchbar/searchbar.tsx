import { Search } from '@mui/icons-material';
import styles from './searchbar.module.css';

const Searchbar = () => {

    return (
        <div>
            {/* <label htmlFor="search-input">
                <Search fontSize="medium" />
            </label> */}
            <input 
                placeholder='Search our catalog'
                id='search-input' 
                className={styles.inputSearch} 
                type='text' 
                aria-label='Search'/>
        </div>
    )
};

export default Searchbar;