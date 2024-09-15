import { ColorType } from '@/types/color/color.type';
import styles from './colors.module.css';

interface ColorProps {
    colors: Array<ColorType>
}

const Colors = ({ colors }: ColorProps) => {

    return (
        <ul className={styles.container}>
            {
                colors.length > 0 && (
                    colors.map((itm) => (
                        <li key={itm.colorId} className={styles.liContainer}>
                            <span>
                                {itm.colorName}
                            </span>
                        </li>
                    ))
                )
            }
        </ul>
    )
};

export default Colors;