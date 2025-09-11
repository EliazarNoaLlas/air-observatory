// components/air-quality-hero/utils/formatters.js
export const formatNumber = (number, options = {}) => {
    const {
        minimumFractionDigits = 0,
        maximumFractionDigits = 1,
        locale = 'es-ES'
    } = options;

    return new Intl.NumberFormat(locale, {
        minimumFractionDigits,
        maximumFractionDigits
    }).format(number);
};

export const formatAQIValue = (value, type = 'aqi') => {
    switch (type) {
        case 'aqi':
            return Math.round(value);
        case 'pm25':
        case 'no2':
        case 'o3':
            return formatNumber(value, { maximumFractionDigits: 1 });
        default:
            return value;
    }
};