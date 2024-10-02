'use client'
import useHttp from '@/hooks/useHttp';
import styles from './page.module.css';
import Size from '@/components/size/size';
import { useParams } from 'next/navigation';
import { cartApi } from '@/api/cart/cart.api';
import Colors from '@/components/colors/colors';
import { SizeType } from '@/types/size/size.type';
import Gallery from '@/components/gallery/gallery';
import { ImageType } from '@/types/image/image.type';
import { ColorType } from '@/types/color/color.type';
import { FormEvent, useEffect, useState } from 'react';
import { apiArgs, imagesApi } from '@/api/images/images.api';
import { sizeApiArgs, sizesApi } from '@/api/sizes/sizes.api';
import { colorsApi, colorsApiArgs } from '@/api/colors/colors.api';
import { productApi, productApiArgs } from '@/api/product/products.api';
import { initialProductState, Product } from '@/containers/productContainer/types/products.types';

const ProductPage = () => {

    const [ formState, setFormState ] = useState({
        productId: '',
        colorId:'',
        sizeId:'',
    });

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

    const { addToCart } = cartApi;

    const addToCartHandler = async ( event: FormEvent<HTMLFormElement> ) => {

        event.preventDefault();

        const result = await addToCart({
            body: formState,
            callback: () => {},
            httpClient: sendRequest
        });

    };

    const formChangeHandler = ( key: string, value: string ) => {

    };

    useEffect(() => {

        if(!id) return undefined;

        const apiObj: apiArgs = { id: id, callback: setImages, httpClient: sendRequest };
        const apiObj2: productApiArgs = { productId: id, callback: setProduct, httpClient: sendRequest };
        const apiObj3: sizeApiArgs  = { httpClient: sendRequest, callback: setSizes };
        const apiObj4: colorsApiArgs = {  productId: id, httpClient: sendRequest, callback: setColors };

        Promise.all([
            getImagesFromProductId(apiObj),
            getProductById(apiObj2),
            getSizes(apiObj3),
            getColorsByProductId(apiObj4),
        ]);

    }, [ id ]);

    return (
        <form className={styles.container} onSubmit={addToCartHandler}>
            <div className={styles.leftSide}>
                <Gallery images={images}/>
            </div>
            <div className={styles.rightSide}>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <div>
                    <Colors colors={colors}/>
                </div>
                <div><Size sizes={sizes}/></div>
                <div className={styles.btnContainer}>
                    <button type='submit'>Add to cart</button>
                </div>
                <div>
                    <h3>Description</h3>
                </div>
            </div>
        </form>
    )
};

export default ProductPage;
//     //Instead of using getStaticProps, you can use getServerSideProps to fetch the data on every request. 
//     //This ensures that the user always gets the latest data.