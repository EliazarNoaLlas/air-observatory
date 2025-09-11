// components/air-quality-hero/ui/CleanBreaths.jsx
import React from 'react';
import {MapPin, Activity} from 'lucide-react';
import {getAQIColor} from '../utils/aqiColors';

export const CleanBreaths = ({count = 0, location = "Lima, Perú", aqi = 65, status = "Moderada"}) => (
    <>
        {/* Clean Breaths Counter - Desktop */}
        <div className="absolute top-6 right-6 hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-2 text-white">
                    <Activity className="w-5 h-5 text-green-400"/>
                    <span className="text-sm">
            Hoy: {count.toLocaleString()} respiraciones protegidas
          </span>
                </div>
            </div>
        </div>

        {/* Location AQI Alert - Desktop */}
        <div className="absolute top-6 left-6 hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-400"/>
                    <span className="text-white text-sm">
            En {location}, la calidad del aire es{' '}
                        <span className={`font-bold ${getAQIColor(aqi)}`}>
              {status} (AQI: {aqi})
            </span>
          </span>
                </div>
            </div>
        </div>
    </>
);