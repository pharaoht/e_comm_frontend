import Image from 'next/image';
import styles from './productCard.module.css';
import { Product } from '@/containers/productContainer/types/products.types';
import Link from 'next/link';

//put in env var
const baseUrl = process.env.NEXT_PUBLIC_IMAGE_DOMAIN

const ProductCard = ({ name, productId, price, imageUrl, colorCodes }: Product ) => {

    return (
        <Link href={`/product/${productId}`}>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image src={`${baseUrl}${imageUrl}`} alt='women' width={1000} height={1000}/>
                    <div className={styles.imageOverlay}>{name}</div>
                </div>
                <div className={styles.details}>
                    <span>{name}</span>
                    <span>{price}</span>
                    <div className={styles.colorContainer}>
                        {
                            colorCodes.length > 0 && 
                            colorCodes.map((color)=>(
                                <span key={color} className={styles.color} style={{background: color}}>
                                    &nbsp;
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard;