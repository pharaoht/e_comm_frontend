import Image from 'next/image';
import styles from './productCard.module.css';
import woman from '@/images/des.jpg';
const ProductCard = () => {

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src={woman} alt='women'/>
            </div>
            <div className={styles.details}>
                <span>Sweater</span>
                <span>$32.99</span>
                <span>Colors</span>
            </div>
        </div>
    )
}

export default ProductCard;