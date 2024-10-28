import { useEffect, useState } from 'react';
import styles from './filter.module.css';
import { colorsApi } from '@/api/colors/colors.api';
import { sizeApi } from '@/api/sizes/sizes.api';
import { materialsApi } from '@/api/materials/materials.api';
import { dropDownItemType } from '@/types/dropdown/dropdown.type';

const FilterBtn = () => {

    const [ isOpen, setIsOpen ] = useState<boolean>(false);

    const [ activeTab, setActiveTab ] = useState<Number>(0);

    const [ colors, setColors ] = useState<dropDownItemType[]>([]);

    const [ sizes, setSizes ] = useState<dropDownItemType[]>([]);

    const [ materials, setMaterials ] = useState<dropDownItemType[]>([]);

    const [ filterParams, setFilterParams ] = useState({
        color: [],
        size: [],
        material: []
    });

    const onChangeHandler = () => {

    }

    const subFilter = (label: string, data: any, index: number) => (
        
        <li className={styles.liContainer} onClick={() => setActiveTab(index)}>
            <span>{label}</span>
            { activeTab == index &&
                <ul className={styles.checkBxContainer}>
                    {
                        data.map((itm: any) => (
                            <li key={itm.value} className={styles.centerCb}>
                                <input className={styles.checkbox} type='checkbox' id={itm.displayName} name={itm.radioName} value={itm.value}/>
                                <label htmlFor={itm.displayName}>{itm.displayName}</label>
                            </li>
                        ))
                    }
                </ul>
            }
        </li>
    )

    useEffect(() => {

        Promise.all([
            colorsApi.getColors({ callback: setColors, isDropDown: true }),
            sizeApi.getSizes({ callback: setSizes, isDropDown: true }),
            materialsApi.getMaterials({ callback: setMaterials, isDropDown: true })
        ]);

        return () => {
            colorsApi.abort()
            sizeApi.abort()
            materialsApi.abort()
        };

    }, []);

    useEffect(() => {

        return () => {
            setActiveTab(0)
        }

    }, [isOpen])

    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                type='button'
                title='Filter'
                onClick={() => setIsOpen(prevState => !prevState)}
            >
                Filter
            </button>
            {
                isOpen && (
                    <form className={styles.floatingBox} onMouseLeave={() => setIsOpen(false)}>
                        <fieldset className={styles.fieldset}>
                            <legend className={styles.legend}>Filter by</legend>
                            <ul className={styles.radioContainer}>
                                { subFilter('Sizes', sizes, 2)}
                                { subFilter('Colors', colors, 1) }
                                { subFilter('Materials', materials, 3)}
                            </ul> 
                        </fieldset>
                    </form>
                )
            }
        </div>
    )
};

export default FilterBtn;



//price color size material