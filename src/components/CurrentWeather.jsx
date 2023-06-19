import React, { useEffect, useState } from 'react';

import { getTodaysDate } from '../services/date';
import {getWeatherIcon} from '../services/weather';

export default function CurrentWeather(props) {
	const {weather, loaded} = props;

	if(!loaded) return null;

	return (
		<div className="rounded-lg bg-blue-800 p-3 mb-4">
			<div className="flex items-center justify-between">
				<div className="">
					<div className="text-gray-200 font-bold">{weather.location.name}, {weather.location.region}</div>
					<div className="text-gray-200 mb-4">{getTodaysDate()}</div>
					<div className="font-bold text-xl mb-4 text-white">{weather.current.condition.text}</div>
          <div className="font-bold text-xl mb-4 text-white">AQI PM10: {weather.current.air_quality.pm10} µg/m3</div>
					<div className="text-7xl font-bold mb-4 text-white">{weather.current.temp_f}<span className="text-gray-100 text-2xl">&deg;F</span></div>
				</div> 
				<div>
					<img src={getWeatherIcon(weather.current.condition.code)} className="w-52 h-auto" /> 
				</div>
			</div>
			
			<div className="border-t border-white py-3 text-white flex items-center justify-between">
				<span>Precipitation</span>
				<span className="font-bold">{weather.current.precip_mm} mm</span>
			</div>
			<div className="border-t border-white pt-3 text-white flex items-center justify-between">
				<span>Wind Speed</span>
				<span className="font-bold">{weather.current.gust_mph} mph</span>
			</div>
		</div>
	)
}