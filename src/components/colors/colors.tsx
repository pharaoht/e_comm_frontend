import { ColorType } from '@/types/color/color.type';
import styles from './colors.module.css';

interface ColorProps {
    colors: Array<ColorType>
}

const Colors = ({ colors }: ColorProps) => {

    return (
        <div className={styles.container}>

        </div>
    )
};

export default Colors;