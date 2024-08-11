import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/images/p&m.jpg';
import styles from './navbar.module.css';
import { linkTypes } from './types/navbar.types';
import { linkData, linkDataTwo } from './data/navbar.data';

const Navbar = () => {

    const renderLinks = ( data: Array<linkTypes> ) => (
        <ul className={styles.ulContainer}>
            {
                data.map(( itm: linkTypes, idx: number) => {
                    return (
                        <li key={itm.href} className={styles.liItem}>
                            <Link href={itm.href}>
                                {
                                    itm.icon != null && <span className={styles.icon}> {itm.icon} </span>
                                }
                                <span className={`${styles.labelSpan} ${styles.hide}`} >
                                    {itm.label}
                                </span>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
    

    return (
        <nav className={styles.container}>
            <div className={styles.hide}>
                { renderLinks(linkData) }
            </div>
            <div className={''}>
                <Image src={Logo} alt='logo_p&m' height={60} width={70} priority />
            </div>
            <div className={''}>
                { renderLinks(linkDataTwo) }
            </div>
        </nav>
    )
};

export default Navbar;