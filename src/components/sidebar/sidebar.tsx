'use client'
import React, { useEffect, useState } from 'react';
import styles from './sidebar.module.css';
import { Category } from './types/sidebar.types';
import { useRouter, useSearchParams } from 'next/navigation';

interface sideBarProps {
    categories: Array<Category>
}

const paraKey = 'subCategoryId';
const paramKey = 'category';

const listItem = ( 
    category: Category, 
    activeKey: string, 
    setActiveKey: React.Dispatch<React.SetStateAction<string>>, 
    updateQueryParams: (key: string, value: string, deleteKey?: string | null) => void, 
    subcategoryId: string | null 
) => {

    return (
        <>
            <button className={`${styles.sbBtn} ${activeKey === category.categoryName && styles.btnActive}`} onClick={() => { setActiveKey(category.categoryName); updateQueryParams(paramKey, category.categoryName, paraKey ); }}>
                <h3 className={`${activeKey === category.categoryName ? styles.btnActive : styles.headerText} `} >
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

    const category = searchParams.get(paramKey);

    const updateQueryParams = (key: string, value: string, deleteKey?: string | null) => {

        const params = new URLSearchParams(window.location.search);

        if(deleteKey == '' && value == '' && key == ''){
            return router.push(window.location.pathname);
        }

        if(deleteKey) params.delete(deleteKey);

        if(value !== '') params.set(key, value);
        
        if (!params.toString()) {
            router.push(window.location.pathname);
        } else {
            // Otherwise, update the URL with the new parameters
            router.replace(`${window.location.pathname}?${params.toString()}`);
        }

    }

    useEffect(() => {

        if(category && activeList === ''){
            setActiveList(category)
        }
    }, [ category ]);

    return (
        <div className={styles.container}>
            <div>
                <button  className={`${styles.sbBtn} ${activeList === '' && styles.btnActive}`} onClick={() => { setActiveList(''), updateQueryParams('', '', '')}}>
                <h3 className={`${activeList === '' ? styles.btnActive : styles.headerText} `} >View all</h3>
                </button>
            </div>
            {
                categories?.length > 0 && (

                    categories.map((itm) => (
                        <div key={itm.categoryName}>
                            { listItem(itm, activeList, setActiveList, updateQueryParams, subcategoryId,) }
                        </div>
                    ))

                )
            }
            {   categories?.length > 0 &&
                <div className={styles.mobileContainer}>
                    { categories.map((itm) => (
                        <div key={itm.categoryName}>
                            { mobileLinks(itm, activeList, updateQueryParams, subcategoryId)}
                        </div>
                    ))}
                </div>
            }
        </div>
    )
};

export default SideBar;