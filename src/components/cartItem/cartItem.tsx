import Link from 'next/link';
import { CartType } from '../cart/cart';
import styles from './cartItem.module.css';
import Image from 'next/image';

const baseUrl = process.env.NEXT_PUBLIC_IMAGE_DOMAIN

interface CartItemProps {
   toggleCount: (...args: any) => void
}

type Props = CartItemProps & CartType;

const CartItem = ({ productName, price, imageUrl, sizeName, subTotal, qty, colorName, cartId, sizeId, colorId, productId, toggleCount }: Props) => {

    const objTransfer = {
        productId,
        sizeId,
        cartId, 
        colorId
    };

    return (
        <div className={styles.container}>
        <div className={styles.leftSide}>
            <Link href={`/product/${productId}`}>
                <Image
                    src={`${baseUrl}${imageUrl}`}
                    width={100}
                    height={150}
                    alt={`Image of Product ${productName}`}
                />
            </Link>
        </div>
        <div className={styles.rightSide}>
            <h3 className={styles.headerThree}>
                <Link href={`/product/${productId}`}>{productName}</Link>
            </h3>
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
                    <label className={styles.detailLabel} htmlFor="qty">Qty:</label> 
                    <div className={styles.qtyContainer}> 
                        <button 
                            className={styles.qtyButton} 
                            aria-label="Decrease quantity" 
                            data-action='decrease'
                            onClick={(event) => toggleCount(event, objTransfer)}>
                            -
                        </button> 
                        <input id="qty" className={styles.inputVal} type="text" value={qty} readOnly /> 
                        <button 
                            className={styles.qtyButton} 
                            aria-label="Increase quantity"
                            data-action='increase'
                            onClick={(event) => toggleCount(event, objTransfer)}>
                            +
                        </button> 
                    </div>
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