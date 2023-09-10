import React, { useState } from "react";
import axios from "axios";

export default function SearchEmgine() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "d4aba3dd194534017243141841b8b193";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  function updateWeather(event) {
    setCity(event.target.value.trim().toLowerCase());
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="Search" onChange={updateWeather} />
      <input type="Submit" value="Search" />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li> Temperature: {Math.round(weather.temperature)}°C </li>
          <li> Humidity: {Math.round(weather.humidity)} % </li>
          <li> Wind: {Math.round(weather.wind)} m/s </li>
          <li> Description: {weather.description} </li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
