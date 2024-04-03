import React from 'react'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from '@iconscout/react-unicons';

export const time = (date) => {
    let flag = true;
    let [hours, minuts] = [date.getHours(), date.getMinutes()];

    if (hours > 12) {
        hours -= 12;
        flag = false;
    }
    if (hours < 10) hours = `0${hours}`;
    if (minuts < 10) minuts = `0${minuts}`;

    return `${hours}:${minuts} ${flag ? 'AM' : 'PM'}`;
}

export default function TemperatureAndDetails({ weather, sunRise, sunSet }) {
    return weather.weather === undefined ? null : (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300 ">
                <p>{weather.weather[0].main}</p>
            </div>

            <div className="flex flex-row items-center justify-between text-white py-3 ">
                <img
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt=""
                    className='w-20'
                />
                <p className="text-5xl">
                    {Math.floor(weather.main.temp)}°
                </p>

                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={18} className='mr-1' />
                        Real fell:
                        <span className='font-medium ml-1'>
                            {Math.floor(weather.main.feels_like)}°
                        </span>
                    </div>

                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTear size={18} className='mr-1' />
                        Humidity:
                        <span className='font-medium ml-1'>
                            {weather.main.humidity}%
                        </span>
                    </div>

                    <div className="flex font-light text-sm items-center justify-center">
                        <UilWind size={18} className='mr-1' />
                        Wind:
                        <span className='font-medium ml-1'>
                            {weather.wind.speed} km/h
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">

                <UilSun />
                <p className="font-light">
                    Rise: <span className='font-medium ml-1'>
                        {time(new Date(sunRise * 1000))}
                    </span>
                </p>
                <p className="font-light">|</p>

                <UilSunset />
                <p className="font-light">
                    Set: <span className='font-medium ml-1'>
                        {time(new Date(sunSet * 1000))}
                    </span>
                </p>
                <p className="font-light">|</p>

                <UilSun />
                <p className="font-light">
                    Rise: <span className='font-medium ml-1'>
                        45°
                    </span>
                </p>
                <p className="font-light">|</p>

                <UilSun />
                <p className="font-light">
                    Low: <span className='font-medium ml-1'>
                        40°
                    </span>
                </p>
            </div>

        </div>
    )
}
