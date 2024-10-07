
import styles from './admin.module.css';
import ProductUpload from '@/containers/productUpload/ProductUpload';

const Admin = () => {



    return (
        <div className={styles.container}>


            <ProductUpload/>
        </div>
    )
};

export default Admin;