import { SizeType } from "@/types/size/size.type";
import styles from './size.module.css';

interface SizeProps {
    sizes: Array<SizeType>
};


const Size = ({ sizes }: SizeProps) => {

    return (
        <ul className={styles.container}>
            {
                sizes?.length > 0 ? (
                    sizes.map((itm) => {
                        return (
                            <li className={styles.item} key={itm.sizeId}>
                                {itm.sizeAbr}
                            </li>
                        )
                    })
                )
                :
                <span>No sizes available</span>
            }
        </ul>
    )
};

export default Size;