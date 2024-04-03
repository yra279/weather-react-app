import React from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';


export default function Inputs({ startAppIp, queryState, search, setCelsius, city }) {
    const [query, setQuery] = queryState;
    return (
        <div className='flex flex-row justify-center my-6 '>
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <input
                    placeholder='search...'
                    type="text"
                    className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={search}
                />
                <UilSearch
                    size={25}
                    className='cursor-pointer transition ease-out hover:scale-125 active:scale-90'
                    color='#fff'
                    onClick={() => search({ key: "Enter" })}
                />
                <UilLocationPoint
                    size={25}
                    className='cursor-pointer transition ease-out hover:scale-125 active:scale-90'
                    color='#fff'
                    onClick={startAppIp}
                />
            </div>
            <div className='flex flex-row w-1/4 items-center justify-center'>
                <buttonn
                    name="metric"
                    className="text-xl text-white font-light"
                    onClick={() => {
                        setCelsius(true);
                        search({key: "Enter"}, city, true);
                    }}
                    
                >
                    °C
                </buttonn>

                <p className='text-xl text-white mx-1'>|</p>

                <button
                    name="imperial"
                    className="text-xl text-white font-light"
                    onClick={() => {
                        setCelsius(false);
                        search({key: "Enter"}, city, false);
                    }}
                >
                    °F
                </button>
            </div>
        </div>
    )
}
