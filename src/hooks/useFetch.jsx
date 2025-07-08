import { useState, useEffect } from 'react';

export const useFetch = (url, interval = null) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null); // Reset error state
        try {
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const result = await response.json();
            setData(result);
        } catch (err) {
            console.error('Fetch error:', err);
            setError(err.message || 'Failed to fetch data');
            setData(null); // Reset data on error
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!url) return; // Don't fetch if no URL provided
        
        fetchData(); // Initial fetch

        if (interval !== null) {
            const fetchInterval = setInterval(() => {
                fetchData();
            }, interval);

            return () => clearInterval(fetchInterval); // Clear interval on cleanup
        }
    }, [url, interval]);

    return { data, loading, error };
};
