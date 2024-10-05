import { ColorType } from '@/types/color/color.type';
import styles from './colors.module.css';
import { useState } from 'react';

interface ColorProps {
    colors: Array<ColorType>
    formKey: string,
    formChangeHandler: (key: string, value: any) => void
}

const Colors = ({ colors, formChangeHandler, formKey }: ColorProps) => {

    const [ activeTab, setActiveTab ] = useState<number>(-1);

    const activeFunc = (index: number): string => activeTab === index ? styles.active : styles.notActive;
    
    return (
        <ul className={styles.container}>
            {
                colors.length > 0 && (
                    colors.map((itm, idx) => (
                        <li key={itm.colorId} 
                            className={`${styles.liContainer} ${activeFunc(idx)}`}
                            onClick={() => {
                                formChangeHandler(formKey, itm.colorId),
                                setActiveTab(idx)
                            }}
                        >
                            <span>
                                {itm.colorName}
                            </span>
                        </li>
                    ))
                )
            }
        </ul>
    )
};

export default Colors;