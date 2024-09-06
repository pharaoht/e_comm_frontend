import { useState } from "react";
import styles from './carousel.module.css';

type CarouselProps = {
    images: Array<string>
};

const Carousel = ({ images }: CarouselProps ) => {

    const [ currentIndex, setCurrentIndex ] = useState<number>(0);

    const nextImage = () => setCurrentIndex((prevState) => ( prevState + 1) % images.length);
    
    const prevImage = () => setCurrentIndex((prevState) => ( prevState - 1) % images.length);

    return (
        <div className={styles.container}>

        </div>
    )
};

export default Carousel;