'use client'
import { categoryApi } from '@/api/categories/categories.api';
import { productApi, productApiArgs } from '@/api/product/products.api';
import { Category } from '@/components/sidebar/types/sidebar.types';
import { Product } from '@/containers/productContainer/types/products.types';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import styles from './mens.module.css';
import SideBar from '@/components/sidebar/sidebar';
import Banner from '@/components/banner/banner';
import Filter from '@/components/filter/filter';
import ProductContainer from '@/containers/productContainer/productContainer';

const MensPage = () => {

    const [ catagories, setCategories ] = useState<Array<Category>>([]);

    const [ products, setProducts ] = useState<Array<Product>>([]);

    const nextSearchParams = useSearchParams();

    const getParams = () => {

        const params = new URLSearchParams(window.location.search);
    
        return params.toString() === '' ? '' : '&' + params.toString();
    }

    useEffect(() => {

        Promise.all([
            categoryApi.getAllCategoriesByGenderId({
                genderId: 2,
                callback: setCategories
            }),
        ]);

        return () => categoryApi.abort();

    }, []);

    useEffect(() => {

        const apiParams: productApiArgs = {
            genderId: 2,
            queryParams: getParams(),
            callback: setProducts,
        };
    
        Promise.all([
            productApi.getProducts(apiParams),
        ]);

        return () => productApi.abort()

    }, [ nextSearchParams ])

    return (
        <Suspense fallback={<div>Mens Page</div>}>
        <div className={styles.container}>
            <Suspense fallback={<div>Loading...</div>}>
                <SideBar categories={catagories}/>
            </Suspense>
            <div className={styles.mainContent}>
                <Banner title='15% off $60 or 20% off $100' details='Everything in store'/>
                <Filter/>
                <Suspense fallback={<div>Loading...</div>}>
                    <ProductContainer products={products}/>
                </Suspense>
            </div>
        </div>
        </Suspense>
    )
};

export default MensPage;