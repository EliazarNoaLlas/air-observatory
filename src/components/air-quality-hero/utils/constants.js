// components/air-quality-hero/utils/constants.js
export const ROTATING_PHRASES = [
    "🌐 Datos satelitales transformados en decisiones de salud pública.",
    "☁️ Observa la atmósfera en tiempo real.",
    "🤖 Inteligencia Artificial al servicio del planeta."
];

export const TYPEWRITER_PHRASE = "De EarthData a la acción 🚀";

export const AQI_LEVELS = {
    GOOD: { min: 0, max: 50, label: 'Buena' },
    MODERATE: { min: 51, max: 100, label: 'Moderada' },
    UNHEALTHY_SENSITIVE: { min: 101, max: 150, label: 'Dañina para grupos sensibles' },
    UNHEALTHY: { min: 151, max: 200, label: 'Dañina' },
    VERY_UNHEALTHY: { min: 201, max: 300, label: 'Muy dañina' },
    HAZARDOUS: { min: 301, max: 500, label: 'Peligrosa' }
};

export const POLLUTANT_UNITS = {
    PM25: 'μg/m³',
    NO2: 'ppb',
    O3: 'ppb',
    CO: 'ppm',
    SO2: 'ppb'
};

export const UPDATE_INTERVALS = {
    AQI_DATA: 60 * 1000, // 5 minutos
    CLEAN_BREATHS: 2000, // 2 segundos
    PHRASES: 5000, // 5 segundos
    TYPEWRITER: 100 // 100ms por carácter
};