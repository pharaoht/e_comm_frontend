import styles from './navbar.module.css';
import Link from 'next/link';
import { ShoppingCart, Person, Favorite } from '@mui/icons-material';
import Logo from '@/images/p&m.jpg';
import Image from 'next/image';
import { ReactNode } from 'react';

interface linkTypes {
    href: string,
    label: String,
    icon?:  ReactNode| null
}

const linkData: Array<linkTypes> = [
    {
        href: '/eco',
        label: 'Sustainability',
        icon: null,
    },
    {
        href: '/newsletter',
        label: 'Newsletter',
        icon: null
    }
];

const linkDataTwo: Array<linkTypes> = [
    {
        href: '/sign-up',
        label: 'Sign up',
        icon: <Person fontSize="medium"/>,
    },
    {
        href: '/favorites',
        label: 'Favorites',
        icon: <Favorite fontSize="small"/>,
    },
    {
        href: '/cart',
        label: 'Cart (0)',
        icon: <ShoppingCart fontSize="small"/>,
    },
];


const Navbar = () => {

    const renderLinks = ( data: Array<linkTypes> ) => (
        <ul className={styles.ulContainer}>
            {
                data.map(( itm: linkTypes, idx: number) => {
                    return (
                        <li className={styles.liItem}>
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
                <Image src={Logo} alt='logo_p&m' height={60} width={70}/>
            </div>
            <div className={''}>
                { renderLinks(linkDataTwo) }
            </div>
        </nav>
    )
};

export default Navbar;