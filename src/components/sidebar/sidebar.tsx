'use client'
import React, { useState } from 'react';
import styles from './sidebar.module.css';
import { Category } from './types/sidebar.types';
import { useRouter, useSearchParams } from 'next/navigation';

interface sideBarProps {
    categories: Array<Category>
}

const paraKey = 'subCategoryId'

const listItem = ( 
    category: Category, 
    activeKey: string, 
    setActiveKey: React.Dispatch<React.SetStateAction<string>>, 
    updateQueryParams: (key: string, value: string) => void, 
    subcategoryId: string | null 
) => {

    return (
        <>
            <button className={`${styles.sbBtn} ${activeKey === category.categoryName && styles.btnActive}`} onClick={() => setActiveKey(category.categoryName)}>
                <h3 className={styles.headerText} >
                    { category.categoryName }
                </h3>
            </button>
            { activeKey === category.categoryName &&        
                <ul className={`${styles.ulContainer} ${styles.hide}`}>
                    {
                        category.subCategories.map((listItm) => {
                            return (
                                <li key={listItm.id} 
                                    className={`${styles.listText} ${String(subcategoryId) == String(listItm.id) && styles.active}`}
                                    onClick={() => updateQueryParams(paraKey, String(listItm.id))}
                                >
                                    { listItm.subCategoryName }
                                </li>
                            )
                        })
                    }
                </ul>
            }
        </>
    )
}

const mobileLinks = (
    category: Category, 
    activeKey: string,
    updateQueryParams: (key: string, value: string) => void, 
    subcategoryId: string | null 
) => {
    return (
        activeKey === category.categoryName &&        
        <ul className={styles.mobileUlContainer}>
            {
                category.subCategories.map((listItm) => {
                    return (
                        <li key={listItm.id} 
                            className={`${styles.listText} ${String(subcategoryId) == String(listItm.id) && styles.active}`}
                            onClick={() => updateQueryParams(paraKey, String(listItm.id))}
                        >
                            { listItm.subCategoryName }
                        </li>
                    )
                })
            }
        </ul>
   )
}

const SideBar = ({ categories }: sideBarProps) => {

    const [ activeList, setActiveList ] = useState<string>('');

    const router = useRouter();

    const searchParams = useSearchParams();

    const subcategoryId = searchParams.get(paraKey);

    const updateQueryParams = (key: string, value: string) => {

        if(value === '') return router.push(window.location.pathname);
        
        const params = new URLSearchParams(window.location.search);

        params.set(key, value);

        router.push(`${window.location.pathname}?${params.toString()}`);
    }

    return (
        <div className={styles.container}>
            <div>
                <button  className={`${styles.sbBtn} ${activeList === '' && styles.btnActive}`} onClick={() => { setActiveList(''), updateQueryParams('', '')}}>
                    <h3 className={styles.headerText} >View all</h3>
                </button>
            </div>
            {
                categories?.length > 0 && (

                    categories.map((itm) => (
                        <div key={itm.categoryName}>
                            { listItem(itm, activeList, setActiveList, updateQueryParams, subcategoryId) }
                        </div>
                    ))

                )
            }
            {   categories?.length > 0 &&
                <div className={styles.mobileContainer}>
                    { categories.map((itm) => (
                        mobileLinks(itm, activeList, updateQueryParams, subcategoryId)
                    ))}
                </div>
            }
        </div>
    )
};

export default SideBar;