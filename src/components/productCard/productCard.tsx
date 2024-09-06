import Image from 'next/image';
import styles from './productCard.module.css';
import { Product } from '@/containers/productContainer/types/products.types';
import Link from 'next/link';

//put in env var
const baseUrl = 'https://res.cloudinary.com/dcrzt1l89/image/upload/v1725234654/'

const ProductCard = ({ name, productId, price, imageUrl, colorCodes }: Product ) => {

    return (
        <Link href={`/product/${productId}`}>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image src={`${baseUrl}${imageUrl}`} alt='women' width={100} height={100}/>
                </div>
                <div className={styles.details}>
                    <span>{name}</span>
                    <span>${price}</span>
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