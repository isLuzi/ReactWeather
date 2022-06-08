import React from 'react';
import { useState } from 'react';
import { BiSearchAlt, BiLocationPlus } from 'react-icons/bi'

function Inputs({ setQuery, units, setUnits }) {
    const [city, setCity] = useState("");
    const handleSearchClick = () => {
        if (city !== "") setQuery({ q: city });
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat,
                    lon,
                });
            });
        }
    };

    const handleUnitsCLick = (e) => {
        const selectedUnit = e.currentTarget.name;
        if (units !== selectedUnit) setUnits(selectedUnit);

    }

    return (
        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4 '>

                <input value={city} onChange={(e) => setCity(e.currentTarget.value)} type="text" placeholder='search for city...' className='text-xl w-full shadow-xl font-light p-2 focus:outline-none capitalize placeholder:lowercase' />

                <BiSearchAlt size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={handleSearchClick} />

                <BiLocationPlus size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={handleLocationClick} />

            </div>
            <div className=' flex flex-row w-1/4 items-center justify-center'>
                <button name='metric' className='text-xl font-light text-white mx-2 transition ease-out hover:scale-105' onClick={handleUnitsCLick}>°C</button>
                <p className='text-xl font-medium text-white'> | </p>
                <button name='imperial' className='text-xl fontb text-white mx-2 transition ease-out hover:scale-105' onClick={handleUnitsCLick}>°F</button>
            </div>


        </div>
    )
}

export default Inputs