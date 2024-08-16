import styles from './banner.module.css';

interface bannerTypeProps {
    title: string,
    details: string,
}

const Banner = ({ title, details, }: bannerTypeProps) => {

    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            <p className={styles.details}>{details}</p>
        </div>
    )
};

export default Banner;