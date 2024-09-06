'use client'
import { useParams } from 'next/navigation';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import { apiArgs, imagesApi } from '@/api/images/images.api';
import useHttp from '@/hooks/useHttp';
import Image from 'next/image';
import { productApi, productApiArgs } from '@/api/product/products.api';

const baseUrl = process.env.NEXT_PUBLIC_IMAGE_DOMAIN;


const ProductPage = () => {

    const [ images, setImages ] = useState<any[]>([]);

    const [ product, setProduct ] = useState([]);

    const [ sizes, setSizes ] = useState([]);

    const { isLoading, sendRequest, error } = useHttp();
    
    const params = useParams();

    const { id } = params;

    const { getImagesFromProductId } = imagesApi;

    const { getProductById } = productApi;

    useEffect(() => {

        if(!id) return undefined;

        const apiObj: apiArgs = { id: id, callback: setImages, httpClient: sendRequest };
        const apiObj2: productApiArgs = { productId: id, callback: setProduct, httpClient: sendRequest};

        Promise.all([
            getImagesFromProductId(apiObj),
            getProductById(apiObj2),
        ]);

    }, [ id ]);
    
    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>

                <div className={styles.grid}>
                    {
                        images.length > 0 && (
                            images.map((itm) => (
                                <div key={itm.ImageID} className={styles.gridItem}>
                                    <Image src={`${baseUrl}${itm.ImageURL}`} alt='photo' height={100} width={100}/>
                                </div>
                            ))
                        )
                    }
                </div>

            </div>
            <div className={styles.rightSide}>
                <div>Title</div>
                <div>Price</div>
                <div>Colors</div>
                <div>Sizes</div>
                <div>Add to bag</div>
            </div>
        </div>
    )
};

export default ProductPage;
//     //Instead of using getStaticProps, you can use getServerSideProps to fetch the data on every request. 
//     //This ensures that the user always gets the latest data.