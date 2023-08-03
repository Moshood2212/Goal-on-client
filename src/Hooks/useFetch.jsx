import { useState,useEffect } from "react" 

export const useFetch = (url) => {
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])
    
    const getDate = async () => {
        const res = await fetch(url)
        const data = await res.json();
        setLoading(false)
        setData(data);
    };

    useEffect(() => {
        getDate();
    }, [url]);
    return {isLoading, data}
};

