import React, { useEffect, useState } from 'react';

import {formatDate} from '../services/date';
import { getWeatherIcon } from '../services/weather';

export default function FiveDayForecast(props) {
	const {weather, loaded} = props;

	if(!loaded) return null;

	return (
		<div className="rounded-lg bg-blue-800 p-3">
			{weather.forecast.forecastday.map(day => {
				return (
					<div key={day.date} className="py-3 text-white flex items-center justify-between">
						<span className="">
							<span className="text-sm text-gray-100">{formatDate(day.date)}</span><br />
							<span className="font-bold text-lg">{day.day.condition.text}</span><br />
							<span className="text-sm text-gray-100">Highs of {day.day.maxtemp_f}&deg;F ~ Lows of {day.day.mintemp_f}&deg;F</span>
						</span>
						<span>
							<img src={getWeatherIcon(day.day.condition.code)} className="h-18 w-18" />
						</span>
					</div>
				);
			})}
		</div>
	)
}