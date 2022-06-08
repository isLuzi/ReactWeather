import { useEffect, useState } from 'react';
import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import TempAndDetails from './components/TempAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import getFormattedWeatherData from './services/weatherService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [query, setQuery] = useState({ q: "geneve" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {

      const message = query.q ? query.q : "current location.";

      toast.info("fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then(
        (data) => {
          toast.success(`Successfully fetched weather for ${data.name}, ${data.country}`);
          setWeather(data);
        });
    };
    fetchWeather();

  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-400 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-400 to-blue-700";

    return "from-yellow-200 to-orange-700";
  };

  return (
    <div className={`mx-auto rounded-md max-w-screen-md mt-4 py-5 px-32  bg-gradient-to-br h-fit shadow-lg  shadow-black ${formatBackground()} `}>

      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        < div >
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} />
          <Forecast title='hourly forecast' items={weather.hourly} />
          <Forecast title='daily forecast' items={weather.daily} />
        </div>

      )}
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
      />
      <div className='flex justify-center items-center '>
        <h1 className='text-gray-800 mt-3'>Luzi React Weather  </h1>
      </div>
    </div >

  );
}
export default App;
