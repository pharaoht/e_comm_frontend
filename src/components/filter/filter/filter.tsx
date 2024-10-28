import { useEffect, useState } from 'react';
import styles from './filter.module.css';
import { ColorType } from '@/types/color/color.type';
import { SizeType } from '@/types/size/size.type';
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
                <ul>
                    {
                        data.map((itm: any) => (
                            <li key={itm.colorId}>
                                <input type='checkbox' id='news' name='news' value={itm.id}/>
                                <label htmlFor="news">{itm.displayName}</label>
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
            sizeApi.getSizes({ callback: setSizes}),
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

    console.log(materials)
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
                                { subFilter('Colors', colors, 1) }
                                { subFilter('Sizes', sizes, 2)}
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