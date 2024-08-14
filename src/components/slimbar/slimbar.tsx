import Link from 'next/link';
import styles from './slimbar.module.css';
import { mobileLinks } from '../navbar/data/navbar.data';
import { linkTypes } from '../navbar/types/navbar.types';

const Slimbar = () => {

    const renderLinks = ( links: Array<linkTypes> ) => (

        links.map((itm) => {
            return (
                <li key={itm.href} className={styles.liItem}>
                    <Link href={itm.href}>
                        <span>{itm.label}</span>
                    </Link>
                </li>
            )
        })
    )

    return (
        <div className={`${styles.container} ${styles.hide}`}>
            <nav>
                <ul className={styles.ulContainer}>
                    { renderLinks(mobileLinks) }
                </ul>
            </nav>
        </div>
    )
};

export default Slimbar;