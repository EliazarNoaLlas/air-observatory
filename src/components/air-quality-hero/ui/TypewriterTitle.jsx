// components/air-quality-hero/ui/TypewriterTitle.jsx
import React from "react";
import {useTypewriter} from "../hooks/useTypewriter";
import {TYPEWRITER_PHRASE} from "../utils/constants";
export const TypewriterTitle = ({
                                    phrase = TYPEWRITER_PHRASE,
                                    speed,
                                }) => {
    const {displayText, isTyping} = useTypewriter(phrase, speed);

    return (
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 text-center">
      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        {displayText}
          <span
              className={`inline-block w-1 ml-1 ${
                  isTyping ? "animate-pulse" : "opacity-0"
              }`}
          >
          |
        </span>
      </span>
        </h1>
    );
};
