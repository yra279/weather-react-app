import React from 'react';

export default function TopButtons({ search }) {
    const cities = [{
        id: 1,
        title: 'London',
    },
    {
        id: 2,
        title: 'Saint Petersburg',
    },
    {
        id: 3,
        title: 'Moscow',
    },
    {
        id: 4,
        title: 'New York',
    },
    {
        id: 5,
        title: 'Zurich',
    },
    ];

    return (
        <div className='flex items-center justify-around my-6'>
            {
                cities.map(({ id, title }) => (
                    <button key={id} className="text-white text-lg font-medium" onClick={() => search({key: "Enter"}, title)}>
                        {title}
                    </button>
                ))
            }
        </div>
    )
}
