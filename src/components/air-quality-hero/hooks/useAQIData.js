// components/air-quality-hero/hooks/useAQIData.js
import { useState, useEffect, useCallback } from 'react';
import { AQIService } from '../utils/api';
import { UPDATE_INTERVALS } from '../utils/constants';

// Hook que encapsula la logica para obetener, actualizar y
// manejar datos de calidad de aire
export const useAQIData = (location = 'Lima,Peru') => {
    const [aqiData, setAqiData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lastUpdated, setLastUpdated] = useState(null);

    const fetchData = useCallback(async () => {
        try {
            setError(null);
            const data = await AQIService.fetchCurrentAQI(location);
            setAqiData(data);
            setLastUpdated(new Date());
        } catch (err) {
            setError(err.message);
            // En caso de error, usar datos mock
            const mockData = AQIService.getMockData();
            setAqiData(mockData);
        } finally {
            setIsLoading(false);
        }
    }, [location]);

    useEffect(() => {
        fetchData();

        // Actualizar datos cada 5 minutos
        const interval = setInterval(fetchData, UPDATE_INTERVALS.AQI_DATA);

        return () => clearInterval(interval);
    }, [fetchData]);

    const refetch = useCallback(() => {
        setIsLoading(true);
        fetchData();
    }, [fetchData]);

    return {
        aqiData,
        isLoading,
        error,
        lastUpdated,
        refetch
    };
};