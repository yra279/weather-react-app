import React from 'react'
import { time } from './TemperatureAndDetails';

const dateBuilder = (date) => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"];

    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    const day = days[date.getDay()];
    const dateInNumbers = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${dateInNumbers}, ${month} ${year}`;
}

export default function TimeAndLocation({ city, country, weather }) {
    return (
        <div>
            <div className='flex items-center justify-center my-6'>
                <p className='text-white text-xl font-extralight'>
                    {dateBuilder(new Date())} | Local time: {time(new Date())}
                </p>
            </div>

            <div className="flex items-center justify-center my-3">
                <p className='text-white text-3xl font-medium'>
                    {city}, {country}
                </p>
            </div>
        </div>
    );
}
