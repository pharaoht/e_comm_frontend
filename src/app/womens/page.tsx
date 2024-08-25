'use client'
import SideBar from '@/components/sidebar/sidebar';
import styles from './womens.module.css';
import { categoryApi } from '@/api/categories/categories.api';
import { useEffect, useState } from 'react';
import useHttp from '@/hooks/useHttp';
import { Category } from '@/components/sidebar/types/sidebar.types';

const WomensPage = () => {
    const [ catagories, setCategories ] = useState<Array<Category>>([]);
    const { isLoading, sendRequest, error } = useHttp();

    const { getAllCategories } = categoryApi;

    useEffect(() => {

        const abort = new AbortController();

        Promise.all([
            getAllCategories(1, setCategories, sendRequest)
        ]);

        return abort.abort();
    }, []);

    return (
        <div className={styles.container}>
            <SideBar categories={catagories}/>
            <div className={styles.mainContent}>
               WomensPage

            </div>
        </div>
    )
};


export default WomensPage;