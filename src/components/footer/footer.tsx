import Link from 'next/link';
import { footerHeaderKeys, footerHeaders, footerLinks } from './data/footer.data';
import styles from './footer.module.css';

const Footer = () => {

    const groupLinks = (title: string) => {
        switch (title) {
            case footerHeaderKeys.shop:
                return footerLinks.slice(0, 4);
            case footerHeaderKeys.corporate:
                return footerLinks.slice(4, 10);
            case footerHeaderKeys.help:
                return footerLinks.slice(10, 22);
            case footerHeaderKeys.member:
                return footerLinks.slice(22);
            default:
                return [];
        }
    };

    const renderFooterLinks = () => (
        footerHeaders.map((header, idx) => (
            <nav key={idx}>
                <h3 className={styles.header}>{header.title}</h3>
                <ul className={`${styles.ulContainer} `}>
                    {groupLinks(header.title).map((link, idx) => (
                        <li key={idx} className={styles.liItem}>
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        ))
    )

    return (
        <footer className={styles.footerContainer}>
            <section className={styles.information}>
                {renderFooterLinks()}
            </section>
            <div className={styles.icons}>

            </div>
        </footer>
    )
};

export default Footer;