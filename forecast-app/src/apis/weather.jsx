import { config } from '../config';

async function getWeatherForecast(latitude, longitude) {
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?\
  key=${config.api_key}&q=${latitude},${longitude}&aqi=yes&a\
  lerts=yes&days=10`);
  return response.json();
}

function getWeatherIcon(weatherCode) {
  const weatherCodeMap = {}
  return weatherCodeMap[weatherCode] || '';
}

export {
	getWeatherForecast,
	getWeatherIcon
}