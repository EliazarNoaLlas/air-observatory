// components/air-quality-hero/three/SceneRenderer.jsx
import React, { forwardRef } from 'react';

export const SceneRenderer = forwardRef(({ aqiData }, ref) => {
    return (
        <>
            {/* Three.js Canvas Container */}
            <div
                ref={ref}
                className="absolute inset-0 z-0"
                style={{ pointerEvents: 'none' }}
            />

            {/* Floating particles overlay for mobile */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute w-2 h-2 rounded-full ${
                            aqiData.aqi > 100 ? 'bg-red-400' : 'bg-blue-400'
                        } opacity-30 animate-pulse`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    />
                ))}
            </div>
        </>
    );
});

SceneRenderer.displayName = 'SceneRenderer';