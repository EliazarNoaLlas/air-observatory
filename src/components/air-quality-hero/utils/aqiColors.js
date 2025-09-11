// components/air-quality-hero/utils/aqiColors.js
export const getAQIColor = (aqi) => {
    if (aqi <= 50) return 'text-green-400';
    if (aqi <= 100) return 'text-yellow-400';
    if (aqi <= 150) return 'text-orange-400';
    return 'text-red-400';
};

export const getAQIBgColor = (aqi) => {
    if (aqi <= 50) return 'from-green-500/20 to-blue-500/20';
    if (aqi <= 100) return 'from-yellow-500/20 to-orange-500/20';
    if (aqi <= 150) return 'from-orange-500/20 to-red-500/20';
    return 'from-red-500/20 to-purple-500/20';
};

export const getAQIStatus = (aqi) => {
    if (aqi <= 50) return 'Buena';
    if (aqi <= 100) return 'Moderada';
    if (aqi <= 150) return 'Dañina para grupos sensibles';
    if (aqi <= 200) return 'Dañina';
    if (aqi <= 300) return 'Muy dañina';
    return 'Peligrosa';
};

export const getAQISkyColor = (aqi) => {
    if (aqi <= 50) return 0x87CEEB; // Sky blue
    if (aqi <= 100) return 0xFFA500; // Orange
    return 0xFF6B6B; // Red
};
