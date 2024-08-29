'use client'
import SideBar from '@/components/sidebar/sidebar';
import styles from './womens.module.css';
import { categoryApi } from '@/api/categories/categories.api';
import { Suspense, useEffect, useState } from 'react';
import useHttp from '@/hooks/useHttp';
import { Category } from '@/components/sidebar/types/sidebar.types';
import Banner from '@/components/banner/banner';
import ProductCard from '@/components/productCard/productCard';

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
            <Suspense fallback={<div>Loading...</div>}>
                <SideBar categories={catagories}/>
            </Suspense>
            <div className={styles.mainContent}>
                <Banner title='15% off $60 or 20% of $100' details='Everything in store'/>
               Womens Page
               <div className={styles.products}>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
               </div>
            </div>
        </div>
    )
};


export default WomensPage;