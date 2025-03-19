import sunny from '../assets/images/sunny.png';
import cloudy from '../assets/images/cloudy.png';
import rainy from '../assets/images/rainy.png';
import snowy from '../assets/images/snowy.png';
import loadingImg from '../assets/images/loadingImg.gif'; 
import { useState, useEffect } from 'react';

const WeatherApp = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false); 
  const [forecast, setForecast] = useState([]);
  const api_key = "01ebd6dc379a1e90daec0454d1c4661d";

  useEffect(() => {
    const fetchDefaultWeather = async () => {
      setLoading(true);
      try {
        const defaultLocation = "Stockholm";
        
        // ✅ Fetch Current Weather
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&units=metric&appid=${api_key}`;
        const weatherResponse = await fetch(weatherUrl);
        const defaultData = await weatherResponse.json();
        setData(defaultData);

        // ✅ Fetch 5-Day Forecast
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${defaultLocation}&units=metric&appid=${api_key}`;
        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();

        // ✅ Filter data: Get 1 forecast per day
        const dailyForecast = forecastData.list.filter((_, index) => index % 8 === 0);
        setForecast(dailyForecast);

      } catch (error) {
        console.error("Error fetching default weather:", error);
        setData({ notFound: true });
      }
      setLoading(false);
    };

    fetchDefaultWeather();
  }, []);


  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const fetchForecast = async () => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${api_key}`;
    
    try {
        const response = await fetch(url);
        const forecastData = await response.json();

        if (forecastData.cod !== "200") {
            console.error("Error fetching forecast:", forecastData.message);
            return;
        }

        // ✅ Extracting one weather entry per day
        const dailyForecast = [];
        const days = new Set(); // To store unique dates

        forecastData.list.forEach((entry) => {
            const date = new Date(entry.dt * 1000).toDateString(); // Convert to readable date
            if (!days.has(date)) {
                days.add(date); // Add the new date to the set
                dailyForecast.push(entry); // Push the first entry for that day
            }
        });

        setForecast(dailyForecast); // ✅ Update forecast state
    } catch (error) {
        console.error("Error fetching forecast:", error);
    }
};

  const search = async () => {
    if (!location) return; 

    setLoading(true); 

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api_key}`;

    try {
      const response = await fetch(url);
      const searchData = await response.json();

      if (searchData.cod === "404") { 
        setData({ notFound: true }); 
      } else {
        setData(searchData);
        setLocation(""); 
        await fetchForecast(); // ✅ Fetch 5-day forecast when searching a city
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setData({ notFound: true });
    }

    setLoading(false); // ✅ Stop loading once request is complete
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  const getWeatherImage = {
    Clear: sunny,
    Clouds: cloudy,
    Rain: rainy,
    Snow: snowy,
    Haze: cloudy,
    Mist: cloudy
  };

  const weatherImage = data.weather ? getWeatherImage[data.weather[0].main] : null;

  const backgroundStyle = {
    Clear: 'linear-gradient(to right, #a6c0fe, #f68084)',
    Clouds: 'linear-gradient(to right, #e0c3fc, #8ec5fc)',
    Rain: 'linear-gradient(to right, #5bc8fb, #80eaff)',
    Snow: 'linear-gradient(to right, #e0c3fc, #8ec5fc)',
    Haze: 'linear-gradient(to right, #e0c3fc, #8ec5fc)',
    Mist: 'linear-gradient(to right, #e0c3fc, #8ec5fc)'
  };

  const weatherBackground = data.weather ? backgroundStyle[data.weather[0].main] : 'linear-gradient(to right, #a6c0fe, #f68084)';

  return (
    <div className="container" style={{ background: weatherBackground }}>
      <div className="weather-app" style={{ background: weatherBackground.replace('to right', 'to top') }}>
        <div className="search">
          <div className="search-top">
            <i className="fa-solid fa-location-dot" onClick={search}></i>
            <div className="location">{data.name}</div>
          </div>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Enter Location" 
              value={location} 
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
          </div>
        </div>

        {/* ✅ Show loading, "Not Found", or weather data */}
        {loading ? (
          <img className='loader' src={loadingImg} alt='loading' />
        ) : data.notFound ? (
          <div className='not-found'>Not Found😒</div>
        ) : (
          <>
            
            <div className="weather">
              <img src={weatherImage} alt="weather icon" />
              <div className="weather-type">{data.weather ? data.weather[0].main : "Unknown"}</div>
              <div className="temp">{data.main ? `${Math.round(data.main.temp)}°` : "--"}</div>
            </div>
            <div className="weather-date">
              <p>{new Date().toDateString()}</p>
            </div>
            <div className="weather-data">          
              <div className="feels-like">
                  <div className="data-name">Feels Like</div>
                  <i className="fa-solid fa-temperature-half"></i> {/* Thermometer icon */}
                  <div className="data">{data.main ? `${Math.round(data.main.feels_like)}°C` : "--"}</div>
              </div>                  
              <div className="wind">
                <div className="data-name">Wind</div>
                <i className="fa-solid fa-wind"></i>
                <div className="data">{data.wind ? data.wind.speed : "--"} km/h</div>
              </div>                   
              <div className="humidity">
                <div className="data-name">Humidity</div>
                <i className="fa-solid fa-droplet"></i>
                <div className="data">{data.main ? data.main.humidity : "--"}%</div>
              </div>                                  
              <div className="pressure">
                <div className="data-name">Pressure</div>
                <i className="fa-solid fa-gauge-high"></i> {/* Pressure gauge icon */}
                <div className="data">{data.main ? `${data.main.pressure} hPa` : "--"}</div>
              </div>           
            </div>   
            <div className="forecast-container">
                <div className="forecast-title">5-Day Forecast</div>
                <div className="forecast">
                    {forecast.length > 0 ? (
                        forecast.map((day, index) => (
                            <div key={index} className="forecast-day">
                                <p>{new Date(day.dt * 1000).toDateString()}</p>
                                <img src={getWeatherImage[day.weather[0].main]} alt="weather" />
                                <p>{day.weather[0].main}</p>
                                <p>{Math.round(day.main.temp_min)}° / {Math.round(day.main.temp_max)}°</p>
                            </div>
                        ))
                    ) : (
                        <p>Loading forecast...</p>
                    )}
                </div>
            </div>   
          </>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;


