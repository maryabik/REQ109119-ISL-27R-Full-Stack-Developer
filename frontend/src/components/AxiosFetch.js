
import {useEffect, useState} from "react";
import axios from "axios";

const AxiosFetch = (dataUrl) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();
        const fetchData = async (url) => {
            setIsLoading(true);
            try {
                let res = await axios.get(url, {
                    cancelToken:source.token
                });
                if(isMounted){
                    setData(res.data);
                    setError(null);
                    console.log(res);
                }
            } catch (error) {
                if (isMounted){
                    setError(error.message);
                    setData([]);
                }
            } finally {
                isMounted && setTimeout(() => setIsLoading(false), 2000);
            }
        }

        fetchData(dataUrl);
        const cleanUp = () => {
            console.log("clean up function");
            isMounted = false;
            source.cancel();
        }

        return cleanUp;
    }, [dataUrl])



    return{data, error, isLoading}
}

export default  AxiosFetch;
