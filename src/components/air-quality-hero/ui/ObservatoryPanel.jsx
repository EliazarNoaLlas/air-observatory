// components/air-quality-hero/ui/ObservatoryPanel.jsx
// mostrar un panel de información sobre el observatorio TEMPO
// (un satélite real de monitoreo de calidad del aire) de forma visual y moderna, solo cuando está activo.
import React from 'react';
import { Satellite } from 'lucide-react';

export const ObservatoryPanel = ({ isActive }) => {
    if (!isActive) return null;

    return (
        <div className="mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Satellite className="w-6 h-6 text-blue-400" />
                Observatorio TEMPO en Vivo
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ObservatoryFeature
                    emoji="🛰️"
                    title="Satélite TEMPO"
                    description="Orbita geoestacionaria activa"
                    bgColor="bg-blue-500/20"
                />

                <ObservatoryFeature
                    emoji="🌍"
                    title="Cobertura"
                    description="América del Norte completa"
                    bgColor="bg-green-500/20"
                />

                <ObservatoryFeature
                    emoji="📡"
                    title="Resolución"
                    description="2.1 x 4.4 km por hora"
                    bgColor="bg-purple-500/20"
                />
            </div>
        </div>
    );
};

const ObservatoryFeature = ({ emoji, title, description, bgColor }) => (
    <div className="text-center">
        <div className={`w-20 h-20 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
            <span className="text-2xl">{emoji}</span>
        </div>
        <h4 className="text-white font-semibold mb-2">{title}</h4>
        <p className="text-blue-200 text-sm">{description}</p>
    </div>
);