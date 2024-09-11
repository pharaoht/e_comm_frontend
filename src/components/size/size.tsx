import { SizeType } from "@/types/size/size.type";
import styles from './size.module.css';

interface SizeProps {
    sizes: Array<SizeType>
};


const Size = ({ sizes }: SizeProps) => {

    return (
        <div className={styles.container}>
            {
                sizes?.length > 0 ? (
                    sizes.map((itm) => {
                        return (
                            <span key={itm.sizeId}>
                                {itm.sizeName}
                            </span>
                        )
                    })
                )
                :
                <span>No sizes available</span>
            }
        </div>
    )
};

export default Size;