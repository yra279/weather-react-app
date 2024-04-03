import React from 'react'
import { time } from './TemperatureAndDetails'

const dateBuilder = (date) => {
    const days = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
    ];

    const day = days[date.getDay()];

    return day;
}

export default function Forecast({ title, weatherList }) {
    return (
        <div>
            <div className="flex items-center justify-start mt-6">
                <p className="text-white font-medium uppercase">
                    {title}
                </p>
            </div>
            <hr className="my-2" />
            <div className="flex flow-row items-center justify-between text-white">
                {
                    weatherList !== '' ? weatherList.map(weather => (

                        <div className="flex flex-col items-center justify-center">
                            <p className="font-light text-sm">
                                {title == 'daily forecast' ? dateBuilder(new Date(weather.dt * 1000)) : time(new Date(weather.dt * 1000))}
                            </p>

                            <img
                                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt=""
                                className='w-12 my-1'
                            />

                            <p className="font-medium">
                                {Math.floor(weather.main.temp)}°
                            </p>
                        </div>

                    )) : null
                }
            </div>
        </div>
    );
}
