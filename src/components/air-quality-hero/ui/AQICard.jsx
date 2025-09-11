// components/air-quality-hero/ui/AQICard.jsx
import React from 'react';
import {Gauge, Wind, Activity, Globe} from 'lucide-react';
import {getAQIColor} from '../utils/aqiColors';

const ICON_MAP = {
    gauge: Gauge,
    wind: Wind,
    activity: Activity,
    globe: Globe
};

const ICON_COLORS = {
    gauge: 'text-green-400',
    wind: 'text-blue-400',
    activity: 'text-yellow-400',
    globe: 'text-purple-400'
};

export const AQICard = ({
                            title,
                            value,
                            unit,
                            status,
                            icon,
                            type = 'pollutant',
                            onClick
                        }) => {
    const Icon = ICON_MAP[icon] || Gauge;
    const iconColor = ICON_COLORS[icon] || 'text-gray-400';

    const valueColor = type === 'aqi' ? getAQIColor(value) : 'text-white';

    return (
        <div
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
            onClick={onClick}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
        >
            <div className="flex flex-col items-center">
                <Icon className={`w-8 h-8 ${iconColor} mb-3 group-hover:scale-110 transition-transform`}/>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className={`text-2xl font-bold ${valueColor}`}>{value}</p>
                {status && <p className="text-blue-200 text-sm">{status}</p>}
                {unit && <p className="text-blue-200 text-sm">{unit}</p>}
            </div>
        </div>
    );
};