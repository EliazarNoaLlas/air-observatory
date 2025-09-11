// components/air-quality-hero/ui/MobileBreaths.jsx
import React from "react";
import {Activity, MapPin} from "lucide-react";
import {getAQIColor} from "../utils/aqiColors";

export const MobileBreaths = ({count = 0, location = "Lima, Perú", aqi = 65, status = "Moderada"}) => {
    return (
        <div
            className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20 p-4 flex flex-col sm:flex-row justify-between items-center gap-2 lg:hidden z-30">
            {/* Respiraciones */}
            <div className="flex items-center gap-2 text-white text-sm">
                <Activity className="w-5 h-5 text-green-400"/>
                <span>Hoy: {count.toLocaleString()} resp. protegidas</span>
            </div>

            {/* AQI */}
            <div className="flex items-center gap-2 text-sm text-white">
                <MapPin className="w-5 h-5 text-blue-400"/>
                <span>
          {location}:{" "}
                    <span className={`font-bold ${getAQIColor(aqi)}`}>
            {status} (AQI {aqi})
          </span>
        </span>
            </div>
        </div>
    );
};
