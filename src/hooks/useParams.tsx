import { useRouter, useSearchParams } from "next/navigation";


const useUrlParams = () => {

    const router = useRouter();

    const searchParams = useSearchParams();

    const getParam = (key: string): string => searchParams.get(key) || '';

    const setParam = (key: string, value: string): void => {

        if(!key) {

            console.warn('Param Key is null | undefined');

            return undefined;
        }

        const params = new URLSearchParams(window.location.search);

        params.set(key, value);

        router.push(`${window.location.pathname}?${params.toString()}`);

        return undefined;
    }

    const removeParam = (key: string): void => {

        if(!key) {

            console.warn('Param Key is null | undefined');

            return undefined;
        }

        const params = new URLSearchParams(window.location.search);

        params.delete(key);

        router.push(`${window.location.pathname}?${params.toString()}`);

        return undefined;
    }


    return {
        getParam,
        setParam,
        removeParam
    }
};


export default useUrlParams;