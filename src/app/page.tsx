import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/banner/banner";

export default function Home() {
  return (
    <main className={styles.container}>
        <Banner title='Vintage Jeans' details='Learn more about our vintage jeans collection.'/>
        <div className={styles.image2}>hello</div>
        <div className={styles.images}>hello</div>
    </main>
  );
}
