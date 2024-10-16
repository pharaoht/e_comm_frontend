import ProductCard from '@/components/productCard/productCard';
import styles from './productContainer.module.css';
import { Product } from './types/products.types';

interface ProductContainerProps {
    products: Array<Product>;
}

const ProductContainer = ({ products }: ProductContainerProps) => {
    if (products && products.length > 0) {
        return (
            <div className={styles.productContainer}>
                {products.map((itm) => (
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
                ))}
            </div>
        );
    } else {
        return (
            <p className={styles.center}>No items...</p>
        );
    }
};

export default ProductContainer;
