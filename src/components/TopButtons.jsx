import React from 'react'

function TopButtons({ setQuery }) {

    const cities = [
        {
            id: 1,
            title: 'Geneve'
        },
        {
            id: 2,
            title: 'Paris'
        },
        {
            id: 3,
            title: 'Las Vegas'
        },
        {
            id: 4,
            title: 'Bangkok'
        },
        {
            id: 5,
            title: 'Lisbon'
        },

    ]

    return (
        <div className='flex items-center justify-around my-6'>
            {
                cities.map((city) => (

                    <button key={city.id} className='text-white font-medium mx-2 transition ease-out hover:scale-105 ' onClick={() => setQuery({ q: city.title })}>{city.title}</button>
                ))
            }
        </div>
    )
}

export default TopButtons