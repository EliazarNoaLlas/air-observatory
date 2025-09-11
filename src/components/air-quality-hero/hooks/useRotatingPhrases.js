// components/air-quality-hero/hooks/useRotatingPhrases.js
import { useState, useEffect } from 'react';
import { UPDATE_INTERVALS } from '../utils/constants';

export const useRotatingPhrases = (phrases, interval = UPDATE_INTERVALS.PHRASES) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        if (phrases.length <= 1) return;

        const timer = setInterval(() => {
            setIsTransitioning(true);

            setTimeout(() => {
                setCurrentIndex(prev => (prev + 1) % phrases.length);
                setIsTransitioning(false);
            }, 300); // Half transition duration

        }, interval);

        return () => clearInterval(timer);
    }, [phrases, interval]);

    const goToPhrase = (index) => {
        if (index >= 0 && index < phrases.length) {
            setCurrentIndex(index);
        }
    };

    return {
        currentPhrase: phrases[currentIndex] || '',
        currentIndex,
        isTransitioning,
        goToPhrase
    };
};