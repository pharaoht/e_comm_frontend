'use client'
import { useParams } from 'next/navigation';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import { apiArgs, imagesApi } from '@/api/images/images.api';
import useHttp from '@/hooks/useHttp';
import Image from 'next/image';
import { productApi, productApiArgs } from '@/api/product/products.api';
import { initialProductState, Product } from '@/containers/productContainer/types/products.types';
import { sizeApiArgs, sizesApi } from '@/api/sizes/sizes.api';
import { ImageType } from '@/types/image/image.type';
import Carousel from '@/components/carousel/Carousel';
import { SizeType } from '@/types/size/size.type';
import Size from '@/components/size/size';
import { colorsApi, colorsApiArgs } from '@/api/colors/colors.api';
import { ColorType } from '@/types/color/color.type';

const baseUrl = process.env.NEXT_PUBLIC_IMAGE_DOMAIN;


const ProductPage = () => {

    const [ formState, setFormState ] = useState({});

    const [ images, setImages ] = useState<Array<ImageType>>([]);

    const [ product , setProduct ] = useState<Product>(initialProductState);

    const [ sizes, setSizes ] = useState<Array<SizeType>>([]);

    const [ colors, setColors ] = useState<Array<ColorType>>([]);

    const { isLoading, sendRequest, error } = useHttp();
    
    const params = useParams();

    const { id } = params;

    const { getImagesFromProductId } = imagesApi;

    const { getColorsByProductId } = colorsApi;

    const { getProductById } = productApi;

    const { getSizes } = sizesApi;

    useEffect(() => {

        if(!id) return undefined;

        const apiObj: apiArgs = { id: id, callback: setImages, httpClient: sendRequest };
        const apiObj2: productApiArgs = { productId: id, callback: setProduct, httpClient: sendRequest };
        const apiObj3: sizeApiArgs  = { httpClient: sendRequest, callback: setSizes };
        const apiObj4: colorsApiArgs = {  productId: id, httpClient: sendRequest, callback: setColors }

        Promise.all([
            getImagesFromProductId(apiObj),
            getProductById(apiObj2),
            getSizes(apiObj3),
            getColorsByProductId(apiObj4),
        ]);

    }, [ id ]);

    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <div className={`${styles.grid} ${styles.hide}`}>
                    {
                        images.length > 0 && (
                            images.map((itm) => (
                                <div key={itm.imageId} className={styles.gridItem}>
                                    <Image src={`${baseUrl}${itm.url}`} alt='photo' height={100} width={100}/>
                                </div>
                            ))
                        )
                    }
                </div>
                {  images.length > 0 && (
                        <div className={`${styles.grid} ${styles.noShow}`}>
                            <Carousel images={images} />
                        </div>
                    )
                }

            </div>
            <div className={styles.rightSide}>
                <h2>{product.name}</h2>
                <div>{product.price}</div>
                <div>Colors</div>
                <div><Size sizes={sizes}/></div>
                <div><button>Add to bag</button></div>
            </div>
        </div>
    )
};

export default ProductPage;
//     //Instead of using getStaticProps, you can use getServerSideProps to fetch the data on every request. 
//     //This ensures that the user always gets the latest data.