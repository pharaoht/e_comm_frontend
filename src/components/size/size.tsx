import { SizeType } from "@/types/size/size.type";
import styles from './size.module.css';
import { useState } from "react";

interface SizeProps {
    sizes: Array<SizeType>
    formKey: string,
    formChangeHandler: (key: string, value: any) => void
};


const Size = ({ sizes, formChangeHandler, formKey }: SizeProps) => {

    const [ activeTab, setActiveTab ] = useState<number>(-1);

    const activeFunc = (index: number): string => activeTab === index ? styles.active : '';

    return (
        <ul className={styles.container}>
            {
                sizes?.length > 0 ? (
                    sizes.map((itm, idx) => {
                        return (
                            <li key={itm.sizeId}
                                className={`${styles.item} ${activeFunc(idx)}`}
                                onClick={() => {
                                    formChangeHandler(formKey, itm.sizeId),
                                    setActiveTab(idx)
                                }} 
                            >
                                {itm.sizeAbr}
                            </li>
                        )
                    })
                )
                :
                <span>No sizes available</span>
            }
        </ul>
    )
};

export default Size;