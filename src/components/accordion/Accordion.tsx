import { useState } from 'react';
import styles from './accordion.module.css';


type ProductInformation = {
    title: string
    description: string
}

interface AccordionProps {
    productData: ProductInformation[]
}


const Accordion = ({ productData }: AccordionProps) => {

    const [ activeIndex, setActiveIndex ] = useState<number>(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex(index)
    }

    return (
        <ul className={styles.accoridon}>
            {
                productData.length > 0 && productData.map((itm, index) => {
                    
                    return (
                        <li key={index} 
                            className={`${styles.accordionItem} ${index === activeIndex ? styles.active : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <h3 className={styles.accordionHeader}>Title</h3>
                            <p className={styles.accordionContent}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi voluptates magni facere impedit? Est dolorem ut sint. Iste, modi ab? Repudiandae asperiores ratione repellendus excepturi autem itaque voluptatum beatae sint.</p>
                        </li>
                    )
                })
            }

        </ul>
    )
};


export default Accordion;