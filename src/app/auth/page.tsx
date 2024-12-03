import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const Auth = () => {

    const router = useRouter();

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