// components/air-quality-hero/hooks/useCleanBreaths.js
import { useState, useEffect, useRef } from 'react';
import { UPDATE_INTERVALS } from '../utils/constants';

export const useCleanBreaths = (initialCount = 1250000) => {
    const [cleanBreaths, setCleanBreaths] = useState(initialCount);
    const intervalRef = useRef(null);
    const isActiveRef = useRef(true);

    useEffect(() => {
        const updateBreaths = () => {
            if (isActiveRef.current) {
                setCleanBreaths(prev => {
                    const increment = Math.floor(Math.random() * 50) + 10;
                    return prev + increment;
                });
            }
        };

        intervalRef.current = setInterval(updateBreaths, UPDATE_INTERVALS.CLEAN_BREATHS);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const pause = () => {
        isActiveRef.current = false;
    };

    const resume = () => {
        isActiveRef.current = true;
    };

    const reset = (newCount = initialCount) => {
        setCleanBreaths(newCount);
    };

    return {
        cleanBreaths,
        pause,
        resume,
        reset
    };
};