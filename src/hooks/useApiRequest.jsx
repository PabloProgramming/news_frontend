import { useEffect, useState } from "react";

export const useApiRequest = (apiRequest, ...args) => {
    const [data, setData] = useState(null);
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchApiRequestData = async () => {
          try {
            setLoading(true);
            const result = await apiRequest(...args);
              setData(result);
              setLoading(false)
          } catch (err) {
            setError(err.message);
          }
        };
        fetchApiRequestData();
    }, [apiRequest,...args]);
    
    return {data, loading, error, setData}




}