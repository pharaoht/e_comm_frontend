import { useState } from 'react';
import styles from './sort.module.css';
import { h } from './consts/conts.sort';
import RadioFormInput from '@/components/inputs/radio/radio.input';

interface SortProps {
    formChangeHandler: (...args: any) => void
    paramValue: string;
}

const Sort = ({ formChangeHandler, paramValue }: SortProps) => {

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
                    <form className={styles.floatingBox} onMouseLeave={() => setIsOpen(false)}>
                        <fieldset className={styles.fieldset}>
                            <legend className={styles.legend}>Sort by</legend>
                            <ul className={styles.radioContainer}>
                                <li className={styles.liContainer} >
                                    <RadioFormInput 
                                        formObject={h.default}
                                        formChangeHandler={formChangeHandler}
                                        isDefaultChecked={true}
                                        isChecked={paramValue == h.default.value}
                                    />
                                </li>
                                <li className={styles.liContainer}>
                                    <RadioFormInput 
                                        formObject={h.newest}
                                        formChangeHandler={formChangeHandler}
                                        isChecked={paramValue == h.newest.value}

                                    />
                                </li>
                                <li className={styles.liContainer}>
                                    <RadioFormInput 
                                        formObject={h.lowPrice}
                                        formChangeHandler={formChangeHandler}
                                        isChecked={paramValue == h.lowPrice.value}

                                    />
                                </li>
                                <li className={styles.liContainer}>
                                    <RadioFormInput 
                                        formObject={h.highPrice}
                                        formChangeHandler={formChangeHandler}
                                        isChecked={paramValue == h.highPrice.value}
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