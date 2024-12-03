
import { FormEvent } from "react";

const Auth = () => {


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const formData = new FormData(e.currentTarget);
        
    }

    return (
        <div>
            Auth
        </div>
    )
};

export default Auth