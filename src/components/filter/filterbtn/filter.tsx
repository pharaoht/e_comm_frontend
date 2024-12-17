import { use, useEffect, useState } from 'react';
import styles from './filter.module.css';
import { colorsApi } from '@/api/colors/colors.api';
import { sizeApi } from '@/api/sizes/sizes.api';
import { materialsApi } from '@/api/materials/materials.api';
import { FilterData } from '@/dal/colors/colors.dal';

export interface FilterParams {
    color: string[];
    size: string[];
    material: string[];
}

type FilterKey = keyof FilterParams;

interface FilterProps {
    formChangeHandler: (...args: any) => void
    optionalParam: {
        color: string,
        size: string,
        material: string
    }
}


const FilterBtn = ({ formChangeHandler, optionalParam }: FilterProps) => {

    const [ isOpen, setIsOpen ] = useState<boolean>(false);

    const [ activeTab, setActiveTab ] = useState<Number>(0);

    const [ colors, setColors ] = useState<FilterData[]>([]);

    const [ sizes, setSizes ] = useState<FilterData[]>([]);

    const [ materials, setMaterials ] = useState<FilterData[]>([]);

    const [ filterParams, setFilterParams ] = useState<FilterParams>({
        color: optionalParam.color.split(',') || [],
        size: optionalParam.size.split(',') || [],
        material: optionalParam.material.split(',') || []
    });

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        const value = event.target.value;
        const name = event.target.name as FilterKey;
        
        setFilterParams(prevState => {

            const updatedArray = prevState[name].includes(value) ?
                prevState[name].filter(itm => itm !== value) :
                [...prevState[name], value];


            return {
                ...prevState,
                [name]: updatedArray
            }
        })

    }

    const subFilter = (label: string, data: FilterData[], index: number) => (
        
        <li className={styles.liContainer} onClick={() => setActiveTab(index)}>
            <span>{label}</span>
            { activeTab == index &&
                <ul className={styles.checkBxContainer}>
                    {
                        data.map((itm: FilterData) => (
                            
                            <li key={itm.value} className={styles.centerCb}>
                                
                                <input 
                                    className={styles.checkbox} 
                                    type='checkbox' 
                                    id={itm.displayName} 
                                    name={itm.radioName} 
                                    value={itm.value}
                                    onChange={(event) => onChangeHandler(event)}
                                    defaultChecked={optionalParam[itm.radioName].split(',').includes(String(itm.value))}
                                />
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

    }, [isOpen]);

    useEffect(() => formChangeHandler(filterParams.color, 'color'), [filterParams.color]);

    useEffect(() => formChangeHandler(filterParams.size, 'size'), [filterParams.size]);

    useEffect(() => formChangeHandler(filterParams.material, 'material'), [filterParams.material])
    
    console.log(filterParams.color)
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