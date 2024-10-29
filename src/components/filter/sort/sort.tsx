import { useState } from 'react';
import styles from './sort.module.css';
import { h } from './consts/conts.sort';
import RadioFormInput from '@/components/inputs/radio/radio.input';


interface SortProps {
    formChangeHandler: (...args: any) => void
    paramKey: string;
}

const Sort = ({ formChangeHandler, paramKey }: SortProps) => {

    const [ isOpen, setIsOpen ] = useState<boolean>(false);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {

        const value = event.target.value;

        formChangeHandler(value, paramKey);

    }

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
                                        formChangeHandler={onChangeHandler}
                                        isDefaultChecked={true}
                                        isChecked={paramKey == h.default.value}
                                    />
                                </li>
                                <li className={styles.liContainer}>
                                    <RadioFormInput 
                                        formObject={h.newest}
                                        formChangeHandler={onChangeHandler}
                                        isChecked={paramKey == h.newest.value}

                                    />
                                </li>
                                <li className={styles.liContainer}>
                                    <RadioFormInput 
                                        formObject={h.lowPrice}
                                        formChangeHandler={onChangeHandler}
                                        isChecked={paramKey == h.lowPrice.value}

                                    />
                                </li>
                                <li className={styles.liContainer}>
                                    <RadioFormInput 
                                        formObject={h.highPrice}
                                        formChangeHandler={onChangeHandler}
                                        isChecked={paramKey == h.highPrice.value}
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