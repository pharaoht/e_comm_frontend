import { useState } from 'react';
import styles from './sort.module.css';
import { h } from './consts/conts.sort';
import RadioFormInput from '@/components/inputs/radio/radio.input';

interface SortProps {
    formChangeHandler: (...args: any) => void

}

const Sort = ({ formChangeHandler }: SortProps) => {

    const [ isOpen, setIsOpen ] = useState<boolean>(false);

    return (
        <div className={styles.container}>
            <button 
                className={styles.button}
                onClick={() => setIsOpen(prevState => !prevState)}
                type='button'
                title='Sort'
            >
                Sort
            </button>
            {
                isOpen && (
                    <form className={styles.floatingBox}>
                        <fieldset className={styles.fieldset}>
                            <legend className={styles.legend}>Sort by</legend>
                            <ul className={styles.radioContainer}>
                                <li className={styles.liContainer} >
                                    <RadioFormInput 
                                        formObject={h.default}
                                        formChangeHandler={formChangeHandler}
                                        isDefaultChecked={true}
   
                                    />
                                </li>
                                <li className={styles.liContainer}>
                                    <RadioFormInput 
                                        formObject={h.newest}
                                        formChangeHandler={formChangeHandler}


                                    />
                                </li>
                                <li className={styles.liContainer}>
                                    <RadioFormInput 
                                        formObject={h.lowPrice}
                                        formChangeHandler={formChangeHandler}


                                    />
                                </li>
                                <li className={styles.liContainer}>
                                    <RadioFormInput 
                                        formObject={h.highPrice}
                                        formChangeHandler={formChangeHandler}

                                    />
                                </li>
                            </ul>
                        </fieldset>
                    </form>
                )
            }
        </div>
    )
};


export default Sort;