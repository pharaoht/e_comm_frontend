import React, { useEffect, useState } from 'react';
import styles from './multiSelect.module.css'

interface option {
    value: string
    displayName: string
    colorCode?: string
}
interface MultiSelectProps {
    options: option[]
    formChangeHandler: (...args: any) => void
    inputName: string,
}

const MultiSelect = ({ options, formChangeHandler, inputName }: MultiSelectProps) => {

    const [selected, setSelected] = useState<string[]>([])
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option: string) => {

        setSelected(prevSelected =>
            prevSelected.includes(option)
                ? prevSelected.filter(item => item !== option)
                : [...prevSelected, option]
        );
    };

    return (
        
        <div className={styles.multiselect}>
            <div className={styles.selectedItems} onClick={toggleDropdown}>
                {selected.length === 0 ? 'Select items...' : selected.join(', ')}
                <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <ul className={styles.dropdown}>
                    {options.map(option => (
                        <li key={option.value}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selected.includes(option.displayName)}
                                    onChange={(event) => {
                                        handleSelect(option.displayName);
                                        formChangeHandler(event)
                                    }}
                                    name={inputName}
                                    value={option.value}
                                />
                                {option.displayName}
                                {
                                    option.colorCode && <div className={styles.colorBlock} style={{backgroundColor: `${option.colorCode}`}}></div>
                                }
                                
                            </label>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
};

export default MultiSelect;