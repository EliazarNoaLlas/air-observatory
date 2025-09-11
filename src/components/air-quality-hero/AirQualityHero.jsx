// components/air-quality-hero/AirQualityHero.jsx
import React, { useState, useRef } from 'react';
import { Eye, Satellite } from 'lucide-react';

// Hooks personalizados
import {
    useAQIData,
    useCleanBreaths,
    useThreeScene
} from './hooks';

// Componentes UI
import {
    TypewriterTitle,
    RotatingPhrase,
    AQICard,
    CleanBreaths,
    MobileBreaths,
    ObservatoryPanel
} from './ui';

// Componentes Three.js
import { SceneRenderer } from './three';

// Utilidades
import { getAQIBgColor } from './utils/aqiColors';

const AirQualityHero = ({ location = 'Lima,Peru' }) => {
    // Estados locales
    const [isObservatoryActive, setIsObservatoryActive] = useState(false);

    // Refs
    const threeRef = useRef(null);

    // Hooks personalizados
    const { aqiData, isLoading, error, lastUpdated, refetch } = useAQIData(location);
    const { cleanBreaths, pause, resume } = useCleanBreaths();
    const { sceneReady, getSceneStats } = useThreeScene(threeRef, aqiData);

    // Handlers
    const handleObservatoryToggle = () => {
        setIsObservatoryActive(prev => !prev);
    };

    const handleViewSkyNow = () => {
        // Implementar navegación a vista detallada
        console.log('Navegando a vista detallada del cielo');
    };

    const handleCardClick = (cardType, value) => {
        console.log(`Clicked on ${cardType} with value ${value}`);
        // Implementar navegación a detalles del contaminante
    };

    // Estados de carga y error
    if (isLoading && !aqiData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
                    <p className="text-white text-lg">Cargando datos de calidad del aire...</p>
                </div>
            </div>
        );
    }

    if (error && !aqiData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
                <div className="text-center">
                    <p className="text-red-400 text-lg mb-4">Error al cargar los datos: {error}</p>
                    <button
                        onClick={refetch}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                        Reintentar
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
            {/* Three.js Scene */}
            <SceneRenderer ref={threeRef} aqiData={aqiData} />

            {/* Gradient Overlay dinámico */}
            <div className={`absolute inset-0 bg-gradient-to-br ${getAQIBgColor(aqiData.aqi)} z-10`} />

            {/* Contenido Principal */}
            <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">

                {/* Indicadores Superiores */}
                <CleanBreaths
                    count={cleanBreaths}
                    location={aqiData.location}
                    aqi={aqiData.aqi}
                    status={aqiData.status}
                />

                {/* Contenido Hero Principal */}
                <main className="text-center max-w-6xl mx-auto">
                    <TypewriterTitle />

                    <h2 className="text-xl sm:text-2xl lg:text-4xl text-blue-100 mb-8 font-light">
                        Prediciendo cielos limpios y seguros 🌍
                    </h2>

                    <RotatingPhrase />

                    {/* Grid de Tarjetas de Datos */}
                    <section
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
                        aria-label="Datos de calidad del aire en tiempo real"
                    >
                        <AQICard
                            title="AQI Actual"
                            value={aqiData.aqi}
                            status={aqiData.status}
                            icon="gauge"
                            type="aqi"
                            onClick={() => handleCardClick('aqi', aqiData.aqi)}
                        />
                        <AQICard
                            title="PM2.5"
                            value={aqiData.pm25}
                            unit="μg/m³"
                            icon="wind"
                            type="pollutant"
                            onClick={() => handleCardClick('pm25', aqiData.pm25)}
                        />
                        <AQICard
                            title="NO₂"
                            value={aqiData.no2}
                            unit="ppb"
                            icon="activity"
                            type="pollutant"
                            onClick={() => handleCardClick('no2', aqiData.no2)}
                        />
                        <AQICard
                            title="O₃"
                            value={aqiData.o3}
                            unit="ppb"
                            icon="globe"
                            type="pollutant"
                            onClick={() => handleCardClick('o3', aqiData.o3)}
                        />
                    </section>

                    {/* Botones CTA */}
                    <section className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={handleObservatoryToggle}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
                            aria-label="Explorar el Observatorio TEMPO"
                        >
                            <Eye className="w-5 h-5" />
                            Explorar el Observatorio
                        </button>

                        <button
                            onClick={handleViewSkyNow}
                            className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                            aria-label="Ver datos detallados de mi ubicación"
                        >
                            <Satellite className="w-5 h-5" />
                            Ver mi cielo ahora
                        </button>
                    </section>

                    {/* Panel del Observatorio */}
                    <ObservatoryPanel isActive={isObservatoryActive} />

                    {/* Información de última actualización */}
                    {lastUpdated && (
                        <div className="mt-8 text-center">
                            <p className="text-blue-200 text-sm opacity-75">
                                Última actualización: {lastUpdated.toLocaleTimeString('es-ES')}
                            </p>
                            {error && (
                                <p className="text-yellow-300 text-sm mt-1">
                                    ⚠️ Usando datos de respaldo
                                </p>
                            )}
                        </div>
                    )}
                </main>
            </div>

            {/* Componente Mobile */}
            <MobileBreaths count={cleanBreaths} />

            {/* Debug info (solo en desarrollo) */}
            {/* eslint-disable-next-line no-undef */}
            {process.env.NODE_ENV === 'development' && sceneReady && (
                <div className="fixed bottom-4 left-4 bg-black/80 text-white p-2 rounded text-xs font-mono z-50">
                    <div>Scene: {sceneReady ? '✓' : '✗'}</div>
                    {getSceneStats && (
                        <div>
                            Objects: {getSceneStats()?.objects || 0}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AirQualityHero;