import React, { useState, useEffect } from 'react';

import NewsHeadlines from './components/NewsHeadlines';
import CurrentWeather from './components/CurrentWeather';
import FiveDayForecast from './components/FiveDayForecast';
import Loading from './components/Loading';
import LocationErrorMessage from './components/LocationErrorMessage';
import { getWeatherForecast } from './services/weather';
import { getNews } from './services/news_api';

import './App.css';

function App() {
  const [locationError, setlocationError] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [news, setNews] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        getWeatherForecast(location.coords.latitude, location.coords.longitude)
          .then(setWeather)
          .then(() => setLoaded(true));
      }, (locationError) => {
        setlocationError(locationError);
      });
    } else {
      alert("Please enable location services to see the weater forecast");
    }
  }, []);

  setNews(getNews('06-18-2023'));

  return (
    <main className="max-w-md my-8 mx-auto">
      {locationError !== null && <LocationErrorMessage locationError={locationError} />}
      {(!loaded && locationError === null) && <Loading />}

      <CurrentWeather loaded={loaded} weather={weather} />
      <FiveDayForecast loaded={loaded} weather={weather} />
      <NewsHeadlines loaded={loaded} news={news} />

      <div className="mt-4 text-xs text-center">
        weather and news.
        powered by <a href="https://www.weatherapi.com" target="blank">weatherapi</a> and <a href="newsapi.org"> newsapi</a>.
        {loaded && <>last updated {weather.location.localtime}.</>}
      </div>
    </main>
  );
}

export default App;