import { ImageType } from '@/types/image/image.type';
import styles from './gallery.module.css';
import Image from 'next/image';
import Carousel from '../carousel/Carousel';

interface GalleryProps {
    images: Array<ImageType>
}

const baseUrl = process.env.NEXT_PUBLIC_IMAGE_DOMAIN;

const Gallery = ({ images }: GalleryProps) => {

    return (
        <ul className={styles.container}>
            {
                images.length > 0 && (
                    images.map((photo, idx) => (
                        <li key={photo.imageId} className={`${styles.gridItem} ${styles.hide}`}>
                            <Image 
                                src={`${baseUrl}${photo.url}`} 
                                alt={`product_photo_${idx}`} 
                                height={1000} width={1000} quality={100} />
                        </li>
                    ))
                )
            }
            { //mobile container render
                images.length > 0 && (
                    <li className={styles.noShow}>
                        <Carousel images={images} />
                    </li>
                )
            }
        </ul>
    )
};

export default Gallery;