import './App.css';
import React, { useEffect, useState } from 'react';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import axios from "axios";

const API_KEY = {
  key: "b964807821db46717bd52a925424ac3c",
  base: "https://api.openweathermap.org/data/2.5/",
};
// https://api.openweathermap.org/data/2.5/data/2.5/onecall?q=London&exclude=current,minutely,alerts&appid=b964807821db46717bd52a925424ac3c&units=metric
// api.openweathermap.org/data/2.5/forecast?q=London&appid=b964807821db46717bd52a925424ac3c

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [listWeatherInFourDays, setListWeather] = useState({});
  const [сelsius, setCelsius] = useState(true);

  useEffect(() => {
    startAppIp();
  }, []);

  const startAppIp = async () => {
    const cityIp = (await axios.get("https://ipapi.co/json/")).data.region;

    search({ key: "Enter" }, cityIp === "St.-Petersburg" ? "Санкт-Петербург" : cityIp);
  }

  const search = async (evt, city = undefined, celciusNew = undefined) => {
    console.log('F')
    if (evt.key === "Enter") {

      try {

        const result = await axios.get(`${API_KEY.base}forecast?q=${city ? city : query}${celciusNew !== undefined ? (celciusNew ? '&units=metric' : '') : (сelsius ? '&units=metric' : '')}&appid=${API_KEY.key}`);
        setWeather(result.data.list[3]);
        setListWeather(result.data);
        setQuery("");
        console.log(result.data)
      } catch (error) {
        console.log("Произошла ошибка: ", error);
      }
    }
  }

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons search={search}/>
      <Inputs startAppIp={startAppIp} city={listWeatherInFourDays.city ? listWeatherInFourDays.city.name : ''} queryState={[query, setQuery]} search={search} setCelsius={setCelsius}/>

      <TimeAndLocation weather={weather} city={listWeatherInFourDays.city ? listWeatherInFourDays.city.name : ''} country={listWeatherInFourDays.city ? listWeatherInFourDays.city.country : ''}/>
      <TemperatureAndDetails sunRise={listWeatherInFourDays.city ? listWeatherInFourDays.city.sunrise : ''} sunSet={listWeatherInFourDays.city ? listWeatherInFourDays.city.sunset : ''} weather={weather}/>

      <Forecast title="hourly forecast" weatherList={listWeatherInFourDays.list !== undefined ? listWeatherInFourDays.list.slice(0, 6) : ''}/>
      <Forecast title="daily forecast" weatherList={listWeatherInFourDays.list !== undefined ? [listWeatherInFourDays.list[3], listWeatherInFourDays.list[8], listWeatherInFourDays.list[13], listWeatherInFourDays.list[18], listWeatherInFourDays.list[23]] : ''}/>
    </div>
  );
}

export default App;
