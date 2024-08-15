'use client'
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/images/p&m.jpg';
import styles from './navbar.module.css';
import { linkTypes } from './types/navbar.types';
import { linkData, linkDataTwo, mobileLinks } from './data/navbar.data';
import { Menu, Close } from '@mui/icons-material';
import { MouseEvent, useState } from 'react';

const Navbar = () => {

    const [ showSideBar, setShowSideBar ] = useState<boolean>(false);

    const toggleSideBar = ( event: MouseEvent<HTMLAnchorElement> ) => {

        event.preventDefault();

        setShowSideBar(prev => !prev);

    };

    const renderLinks = ( data: Array<linkTypes> ) => (
        data.map(( itm: linkTypes, idx: number) => {
            return (
                <li key={itm.href} className={`${styles.liItem}`} onClick={itm.onClickHandler}>
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
    )

    const renderMobileLinks = ( data: Array<linkTypes> ) => (
        data.map((itm, idx) => {
            return (
                <li key={itm.href} className={`${styles.liItem} ${styles.hoverEffect}`}>
                    <Link className={styles.mobileContainer} href={itm.href}>
                        { itm.image &&
                            <span className={styles.imageIc}>
                                <Image src={itm.image} height={60} width={70} alt='women_image' />
                            </span>
                        }
                        <span className={styles.startItem}>
                            {itm.label}
                        </span>
                        <span>
                            {itm.icon}
                        </span>
                    </Link>
                </li>
            )
        })
    )

    return (
        <header>
            <nav className={styles.container}>
                <div className={''}>
                    <ul className={styles.ulContainer}>
                        <li className={`${styles.liItem} ${styles.iconConditional}`}>
                            <Link href={'/'} legacyBehavior >
                                <a onClick={toggleSideBar}>
                                    <span className={styles.icon}>
                                        {
                                            !showSideBar ?
                                                <Menu fontSize='medium'/>
                                            :
                                                <Close fontSize='medium' />
                                        }
                                    </span>
                                </a>
                            </Link>
                        </li>
                        { renderLinks(linkData) }
                    </ul>
                </div>
                <div className={styles.startItem}>
                    <Image src={Logo} alt='logo_p&m' height={60} width={70} priority />
                </div>
                <div className={''}>
                    <ul className={styles.ulContainer}>
                        { renderLinks(linkDataTwo) }
                    </ul>

                </div>
                { showSideBar &&
                    <div className={`${styles.sideMenu} ${styles.slideIn} ${styles.iconConditional}`}>
                        <ul className={styles.ulMobileContainer}>
                            { renderMobileLinks(mobileLinks) }
                            { renderMobileLinks(linkData) }
                        </ul>
                    </div>
                }
            </nav>
        </header>
    )
};

export default Navbar;