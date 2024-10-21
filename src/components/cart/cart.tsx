import Image from 'next/image';
import styles from './cart.module.css';

export type CartType = {
    cartExpiration: string
    colorId: string
    colorName: string
    id: string
    isActive: string
    price: string
    productId: string
    productName: string
    qty: string
    sessionId: string
    sizeId: string
    sizeName: string
    total: string
    imageUrl: string
    userID: string
    subTotal: string
    totalItems: string
}

interface CartProps {
    cartData: Array<CartType>
}

const baseUrl = process.env.NEXT_PUBLIC_IMAGE_DOMAIN

const Cart = ({ cartData }: CartProps) => {
    return (
        <div className={styles.floatingBox}>
            <div className={styles.overFlow}>
            {
                cartData.length > 0 && (
                    cartData.map((itm, idx) => {

                        return (
                            <div className={styles.container}>
                                <div className={styles.leftSide}>
                                    <Image
                                        src={`${baseUrl}${itm.imageUrl}`}
                                        width={100}
                                        height={150}
                                        alt='img_product'
                                    />
                                </div>
                                <div className={styles.rightSide}>
                                    <h3>{itm.productName}</h3>
                                    <p>{itm.price}</p>
                                    <div className={styles.details}>
                                        <div className={styles.detailRow}>
                                            <span className={styles.detailLabel}>Size:</span>
                                            <span className={styles.detailValue}>{itm.sizeName}</span>
                                        </div>
                                        <div className={styles.detailRow}>
                                            <span className={styles.detailLabel}>Color:</span>
                                            <span className={styles.detailValue}>{itm.colorName}</span>
                                        </div>
                                        <div className={styles.detailRow}>
                                            <span className={styles.detailLabel}>Qty:</span>
                                            <span className={styles.detailValue}>{itm.qty}</span>
                                        </div>
                                        <div className={styles.detailRow}>
                                            <span className={styles.detailLabel}>Sub total:</span>
                                            <span className={styles.detailValue}>{itm.subTotal}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                
                )
            }
            </div>
            <h3>Total: { cartData.length > 0 && cartData[0].total }</h3>
            <div className={styles.btnContainer}>
                <button className={styles.btn}>Checkout</button>
                <button className={styles.btn}>Shopping bag</button>
            </div>
        </div>
    )
};

export default Cart;