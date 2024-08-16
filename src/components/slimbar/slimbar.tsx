'use client'
import Link from 'next/link';
import styles from './slimbar.module.css';
import { mobileLinks } from '../navbar/data/navbar.data';
import { linkTypes } from '../navbar/types/navbar.types';
import Searchbar from '../searchbar/searchbar';
import { useState } from 'react';
import { Search } from '@mui/icons-material';

const Slimbar = () => {

    const [ isShow, setIsShow ] = useState<boolean>(true);

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
        <nav className={`${styles.container} ${styles.hide}`}>
            <ul className={styles.ulContainer}>
                {
                    isShow ? renderLinks(mobileLinks) 
                    :
                    <li>
                        <Searchbar />
                    </li>
                }
                
                <li className={styles.liItem}>
                    <button className={`${styles.buttonStyled} ${isShow ? styles.blank : styles.gold}`} onClick={() => setIsShow(prev => !prev)} aria-label='Toggle Search'>
                        <Search fontSize='small' />
                    </button>
                </li>
            </ul>
        </nav>
    )
};

export default Slimbar;