import { useEffect, useState } from "react";

export default function useJsonFetch(url, defaultData) {
    const [data, setData] = useState(defaultData);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState();
    
    useEffect(()=>{
        setLoading(true);
        fetch(url)
        .then(r=>r.json())
        .then(data=>{
            setData(data);
        })
        .catch((err) => {
            let errmsg = "Error"
            if (err instanceof Error) errmsg = err.message;
            setError(errmsg);
        })
        .finally(()=>{
            setLoading(false);
        });
    }, []);

    return [{data, isLoading, error}];

}