import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/banner/banner";
import {ArrowForward } from '@mui/icons-material';

export default function Home() {
  return (
    <main className={styles.container}>
        <Banner title='Vintage Jeans' details='Learn more about our vintage jeans collection.'/>
        <div className={styles.image2}>
            <div className={styles.textBackground}>
                New Season
            </div>
        </div>
        <div className={styles.images}>
            <div className={`${styles.textBackground} ${styles.flexEnd}`}>
                Try our latest styles
                <ArrowForward/>
            </div>
        </div>
    </main>
  );
}
