import styles from './radio.module.css';

interface RadioInputProps {
    formChangeHandler: (...args: any) => void
    formObject: {
        id: string
        type: string
        name:string
        title: string
        value:string
        htmlFor: string
        text: string
    }
    isDefaultChecked?: boolean
    isChecked: boolean

}

const RadioFormInput = ({ formChangeHandler, formObject, isDefaultChecked, isChecked }: RadioInputProps ) => {

    return (
        <>
            <input 
                type={formObject.type} 
                id={formObject.id}
                name={formObject.name}
                value={formObject.value}
                title={formObject.title}
                defaultChecked={isDefaultChecked ?? false}
                onChange={(event) => formChangeHandler(event)}
                checked={isChecked}
            />
            <label htmlFor={formObject.htmlFor} className={styles.label}>{formObject.text}</label>
        </>
    )
};

export default RadioFormInput;