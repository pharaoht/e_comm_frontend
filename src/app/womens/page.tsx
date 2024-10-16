'use client'
import SideBar from '@/components/sidebar/sidebar';
import styles from './womens.module.css';
import { Suspense, useEffect, useState } from 'react';
import { Category } from '@/components/sidebar/types/sidebar.types';
import Banner from '@/components/banner/banner';
import Filter from '@/components/filter/filter';
import { productApi, productApiArgs } from '@/api/product/products.api';
import ProductContainer from '@/containers/productContainer/productContainer';
import { Product } from '@/containers/productContainer/types/products.types';
import { useSearchParams } from 'next/navigation';
import { categoryApi } from '@/api/categories/categories.api';

const WomensPage = () => {

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
                genderId: 1,
                callback: setCategories
            }),
        ]);

        return () => categoryApi.abort();

    }, []);

    useEffect(() => {

        const apiParams: productApiArgs = {
            genderId: 1,
            queryParams: getParams(),
            callback: setProducts,
        };
    
        Promise.all([
            productApi.getProducts(apiParams),
        ]);

        return () => productApi.abort()

    }, [ nextSearchParams ])

    return (
        <Suspense fallback={<div>Womens Page</div>}>
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


export default WomensPage;