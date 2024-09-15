import { useState } from "react";
import styles from './carousel.module.css';
import { ImageType } from "@/types/image/image.type";
import Image from "next/image";

const baseUrl = process.env.NEXT_PUBLIC_IMAGE_DOMAIN;

type CarouselProps = {
    images: Array<ImageType>
};


const Carousel = ({ images }: CarouselProps ) => {

    const [ currentIndex, setCurrentIndex ] = useState<number>(0);

    const nextImage = () => setCurrentIndex((prevState) => ( prevState + 1) % images.length);

    return (
        <div className={styles.container}>
            <Image 
                key={currentIndex}
                src={`${baseUrl}${images[currentIndex]?.url}`} 
                height={100} 
                width={100} 
                alt="photo_"
            />
            <button className={`${styles.prevBtn} ${styles.btn}`} onClick={nextImage}>{'>'}</button>
        </div> 
    )
};

export default Carousel;