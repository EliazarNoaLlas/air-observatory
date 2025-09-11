// components/air-quality-hero/hooks/useTypewriter.js
import { useState, useEffect } from 'react';
import { UPDATE_INTERVALS } from '../utils/constants';

export const useTypewriter = (text, speed = UPDATE_INTERVALS.TYPEWRITER) => {
    const [displayText, setDisplayText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        setDisplayText('');
        setIsComplete(false);
        setIsTyping(true);

        let index = 0;
        const timer = setInterval(() => {
            if (index < text.length) {
                setDisplayText(text.slice(0, index + 1));
                index++;
            } else {
                clearInterval(timer);
                setIsComplete(true);
                setIsTyping(false);
            }
        }, speed);

        return () => clearInterval(timer);
    }, [text, speed]);

    const reset = () => {
        setDisplayText('');
        setIsComplete(false);
        setIsTyping(false);
    };

    return {
        displayText,
        isComplete,
        isTyping,
        reset
    };
};
