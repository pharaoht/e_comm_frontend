'use client'
import { useEffect, useState } from 'react';
import styles from './cartPage.module.css';
import { cartApi } from '@/api/cart/cart.api';
import CartItem from '@/components/cartItem/cartItem';
import { CartType } from '@/components/cart/cart';
import Image from 'next/image';
import visaLogo from '@/svgs/visa.svg';
import amex from '@/svgs/amex.svg';
import discover from '@/svgs/discover.svg';
import gpay from '@/svgs/gpay.svg';
import mc from '@/svgs/mc.svg';
import pp from '@/svgs/pp.svg';
import venmo from '@/svgs/venmo.svg'

const CartPage = () => {

    const [ cartItems, setCartItems ] = useState<CartType[]>([]);

    const toggleCountHandler = async (e: React.MouseEvent<HTMLButtonElement>, body: any) => {

        const target = e.target as HTMLButtonElement;

        if(target.dataset.action == 'decrease'){

            const objString = Object.entries(body).map(([key, value]) => `${key}=${value}`).join('&')
    
            await cartApi.deleteCart({ params: objString, callback: () => {}})

        }
        else {

          await cartApi.addToCart({ body: body, callback: () => {}})
        }

        await cartApi.getCart({ callback: setCartItems })

        const event = new CustomEvent('itemAddedToBag', { detail: body.productId});

        window.dispatchEvent(event);
    }

    useEffect(() => {

        Promise.all([
            cartApi.getCart({ callback: setCartItems }),

        ]);

    }, []);

  return (

    <div className={styles.container}>
        <h1 className={styles.header}>Shopping Cart</h1>
        <div className={styles.section}>
            <div className={styles.left}>
                {
                  cartItems.length > 0 && (

                    cartItems.map((itm, idx) => (
                      <CartItem 
                        key={itm.id}   
                        toggleCount={toggleCountHandler}  
                        {...itm}
                      />
                    ))
                  )
                }
            </div>
          <div className={styles.right}>
              <dl className={styles.dlContainer}>
                  <dt>Discounts:</dt>
                  <dd>Add</dd>
              </dl>
              <dl className={styles.dlContainer}>
                  <dt>Order Value:</dt>
                  <dd>0.00</dd>
              </dl>
              <dl className={styles.dlContainer}>
                  <dt>Discount:</dt>
                  <dd>-0.00</dd>
              </dl>
              <dl className={styles.dlContainer}>
                  <dt>Delivery fee:</dt>
                  <dd>0.00</dd>
              </dl>

              <dl className={styles.dlContainer}>
                  <dt>Total:</dt>
                  <dd>{cartItems[0]?.total ? cartItems[0]?.total : 0.00 }</dd>
              </dl>

              <div className={styles.btnContainer}>
                  <button className={styles.btn}>Pay</button>
              </div>

              <ul className={styles.creditContainers}>
                  <li><Image className={styles.creditCardImage} src={visaLogo} alt='we accept visa payment'/></li>
                  <li><Image className={styles.creditCardImage} src={amex} alt='we accept american express payment'/></li>
                  <li><Image className={styles.creditCardImage} src={mc} alt='we accept master card payment'/></li>
                  <li><Image className={styles.creditCardImage} src={discover} alt='we accept discover payment'/></li>
                  <li><Image className={styles.creditCardImage} src={pp} alt='we accept pay pal payment'/></li>
                  <li><Image className={styles.creditCardImage} src={gpay} alt='we accept google pay payment'/></li>
                  <li><Image className={styles.creditCardImage} src={venmo} alt='we accept venmo payment'/></li>
              </ul>

            <p className={styles.purchaseInfo}>The estimated tax will be confirmed once you added your shipping address in checkout.</p>
            <p className={styles.purchaseInfo}>Final prices and shipping costs are confirmed at checkout.</p>
            <p className={styles.purchaseInfo}>30-day returns. Read more about our return and refund policy.</p>
            <p className={styles.purchaseInfo}>Need help? Please contact Customer Support.</p>
          </div>
        </div>
    </div>
  )
};

export default CartPage;

// Order value
// $39.99
// Discount
// -$8.00
// Delivery fee
// $5.99
// Total