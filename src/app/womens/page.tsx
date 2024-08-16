import SideBar from '@/components/sidebar/sidebar';
import styles from './womens.module.css';

const WomensPage = () => {

    return (
        <div className={styles.container}>
            <SideBar/>
            <div className={styles.mainContent}>
               WomensPage

            </div>
        </div>
    )
};


export default WomensPage;