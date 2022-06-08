import React from 'react';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { FaTemperatureHigh } from 'react-icons/fa';
import { BsDropletHalf } from 'react-icons/bs';
import { BiWind } from 'react-icons/bi';
import { FiSunset, FiSunrise } from 'react-icons/fi'
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function TempAndDetails({
    weather: {
        details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone, },
}) {
    return (
        <div>
            <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
                <p>{details}</p>
            </div>

            <div className='flex flex-row items-center justify-between text-white py-3'>
                <img src={iconUrlFromCode(icon)} alt="" className='w-20' />
                <p className='flex flex-col text-5xl'>{`${temp.toFixed()}°`}</p>
                <div className='flex flex-col space-y-2'>

                    <div className='flex font-light text-sm items-center justify-center'>
                        <FaTemperatureHigh size={18} className='mr-1' />
                        Real Feel:
                        <span className='font-medium ml-1'>{`${feels_like.toFixed()}°`}</span>
                    </div>

                    <div className='flex font-light text-sm items-center justify-center'>
                        <BsDropletHalf size={18} className='mr-1' />
                        Humidity:
                        <span className='font-medium ml-1'>{`${humidity.toFixed()}%`}</span>

                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <BiWind size={18} className='mr-1' />
                        Wind speed:
                        <span className='font-medium ml-1'>{`${speed.toFixed()}km/h`}</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center  space-x-2 text-white py-4'>
                <FiSunrise />
                <p className='font-light'>
                    Rise: <span className=' font-200 ml-1'>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
                </p>
                <p className='font-light'>|</p>

                <FiSunset />
                <p className='font-light'>
                    Set: <span className=' font-200 ml-1'>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
                </p>
                <p className='font-light'>|</p>

                <AiOutlineArrowUp />
                <p className='font-light'>
                    High: <span className=' font-200 ml-1'>{`${temp_max.toFixed()}°`}</span>
                </p>
                <p className='font-light'>|</p>

                <AiOutlineArrowDown />
                <p className='font-light'>
                    Low: <span className=' font-200 ml-1'> {`${temp_min.toFixed()}°`}</span>
                </p>
            </div>
        </div>


    )
}

export default TempAndDetails