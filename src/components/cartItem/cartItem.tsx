import { CartType } from '../cart/cart';
import styles from './cartItem.module.css';
import Image from 'next/image';

const baseUrl = process.env.NEXT_PUBLIC_IMAGE_DOMAIN


const CartItem = ({ productName, price, imageUrl, sizeName, subTotal, qty, colorName }: CartType) => {

    return (
        <div className={styles.container}>
        <div className={styles.leftSide}>
            <Image
                src={`${baseUrl}${imageUrl}`}
                width={100}
                height={150}
                alt={`Image of Product ${productName}`}
            />
        </div>
        <div className={styles.rightSide}>
            <h3>{productName}</h3>
            <p>{price}</p>
            <div className={styles.details}>
                <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Size:</span>
                    <span className={styles.detailValue}>{sizeName}</span>
                </div>
                <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Color:</span>
                    <span className={styles.detailValue}>{colorName}</span>
                </div>
                <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Qty:</span>
                    <span className={styles.detailValue}>{qty}</span>
                </div>
                <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Sub total:</span>
                    <span className={styles.detailValue}>{subTotal}</span>
                </div>
            </div>
        </div>
    </div>
    )
};

export default CartItem;