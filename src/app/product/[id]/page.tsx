'use client'
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
import {  imagesApi } from '@/api/images/images.api';
import { sizeApi } from '@/api/sizes/sizes.api';
import { colorsApi } from '@/api/colors/colors.api';
import { productApi } from '@/api/product/products.api';
import { initialProductState, Product } from '@/containers/productContainer/types/products.types';

const ProductPage = () => {

    const params = useParams();

    const { id } = params;

    const [ formState, setFormState ] = useState({
        productId: String(id) || '',
        colorId:'',
        sizeId:'',
    });

    const [ images, setImages ] = useState<Array<ImageType>>([]);

    const [ product , setProduct ] = useState<Product>(initialProductState);

    const [ sizes, setSizes ] = useState<Array<SizeType>>([]);

    const [ colors, setColors ] = useState<Array<ColorType>>([]);
    
    const addToCartHandler = async ( e: FormEvent<HTMLFormElement> ) => {

        e.preventDefault();

        const result = await cartApi.addToCart({
            body: formState,
            callback: () => {},
        });

        const event = new CustomEvent('itemAddedToBag', { detail: id});

        window.dispatchEvent(event);

    };

    const formChangeHandler = ( key: string, value: any ): void => {

        setFormState(prev => ({
            ...prev,
            [key]: value
        }));

        return undefined;
    };

    useEffect(() => {

        if(!id) return undefined;

        Promise.all([
            imagesApi.getImagesFromProductId({ id: id, callback: setImages }),
            productApi.getProductById({ productId: id, callback: setProduct }),
            sizeApi.getSizes({ callback: setSizes }),
            colorsApi.getColorsByProductId({  productId: id, callback: setColors }),
        ]);

        return () => {
            productApi.abort();
            colorsApi.abort();
            imagesApi.abort();
            sizeApi.abort();
        }

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
                    <Colors 
                        colors={colors} 
                        formChangeHandler={formChangeHandler}
                        formKey={'colorId'}
                    />
                </div>
                <div>
                    <Size 
                        sizes={sizes}
                        formChangeHandler={formChangeHandler}
                        formKey={'sizeId'}
                    />
                </div>
                <div className={styles.btnContainer}>
                    <button type='submit'>Add to cart</button>
                </div>
                <div>
                    <h3>Description</h3>
                    <p style={{whiteSpace: 'pre-wrap' }}>
                        {product.desc}
                    </p>
                </div>
            </div>
        </form>
    )
};

export default ProductPage;
//     //Instead of using getStaticProps, you can use getServerSideProps to fetch the data on every request. 
//     //This ensures that the user always gets the latest data.