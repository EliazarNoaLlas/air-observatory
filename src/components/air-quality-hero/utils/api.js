// components/air-quality-hero/utils/api.js
import {getAQIStatus} from "@/components/air-quality-hero/utils/aqiColors.js";

export class AQIService {
    // Realizar la consulta a la API real  informacion
    static async fetchCurrentAQI(location = 'Lima,Peru') {
        try {
            // Aquí implementarías la llamada real a tu API
            const response = await fetch(`/api/aqi/current?location=${encodeURIComponent(location)}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            return {
                aqi: data.aqi,
                status: getAQIStatus(data.aqi),
                location: data.location,
                pm25: data.pollutants.pm25,
                no2: data.pollutants.no2,
                o3: data.pollutants.o3,
                timestamp: data.timestamp
            };
        } catch (error) {
            console.error('Error fetching AQI data:', error);
            // Retornar datos mock en caso de error
            return this.getMockData();
        }
    }

    // enviar datos mockeados
    static getMockData() {
        const randomValue = (min, max) => (Math.random() * (max - min) + min).toFixed(1);

        const aqi = Math.floor(randomValue(50, 150));
        return {
            aqi,
            status: getAQIStatus(aqi),
            location: 'Lima, Perú',
            pm25: randomValue(10, 50),
            no2: randomValue(20, 60),
            o3: randomValue(30, 80),
            timestamp: new Date().toISOString()
        };
    }

    static async fetchForecast(location = 'Lima,Peru', days = 5) {
        try {
            const response = await fetch(`/api/aqi/forecast?location=${encodeURIComponent(location)}&days=${days}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching AQI forecast:', error);
            return [];
        }
    }
}
