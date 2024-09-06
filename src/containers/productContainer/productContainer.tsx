import ProductCard from '@/components/productCard/productCard';
import styles from './productContainer.module.css';
import { Product } from './types/products.types';

interface ProductContainerProps {
    products: Array<Product>
}

const ProductContainer = ({ products }: ProductContainerProps) => (
    <div className={styles.productContainer}>
        {
            products && products.length > 0 && (
                products.map((itm, idx) => (
                    <ProductCard
                        key={itm.productId}
                        productId={itm.productId}
                        price={itm.price}
                        name={itm.name}
                        imageUrl={itm.imageUrl}
                        desc={itm.desc}
                        created={itm.created}
                        gender={itm.gender}
                        material={itm.material}
                        subCategory={itm.subCategory}
                        colorCodes={itm.colorCodes}
                        colorNames={itm.colorNames}
                    />
                ))
            )
        }
    </div>
);

export default ProductContainer;