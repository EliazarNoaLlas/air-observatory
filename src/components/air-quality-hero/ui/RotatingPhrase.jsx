// components/air-quality-hero/ui/RotatingPhrase.jsx
import React from "react";
import { ROTATING_PHRASES } from "../utils/constants";
import { useRotatingPhrases } from "../hooks/useRotatingPhrases";

export const RotatingPhrase = ({ interval = 5000 }) => {
    // Hook personalizado con las frases y el intervalo
    const { currentPhrase, isTransitioning } = useRotatingPhrases(
        ROTATING_PHRASES,
        interval
    );

    return (
        <div className="h-20 mb-12 flex items-center justify-center">
            <p
                className={`text-lg sm:text-xl lg:text-2xl text-blue-200 transition-opacity duration-700 ${
                    isTransitioning ? "opacity-0" : "opacity-100"
                }`}
            >
                {currentPhrase}
            </p>
        </div>
    );
};
