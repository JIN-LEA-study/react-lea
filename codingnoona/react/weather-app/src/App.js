import "./App.css";
import { useEffect, useState } from "react";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [weather, setWeather] = useState(null);
  const cities = ["Paris", "New york", "Tokyo", "Seoul"];

  // 현재위치정보 위도,경도
  const getCurrentLocation = () => {
    // get Current Location JS
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon); //getWeatherByCurrentLocation에 lat, lon 정보 넘겨줌
    });
  };

  // 현재위치정보
  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=89cc8b2a01d33c3c6d58723691b762ac&units=metric`;
    let response = await fetch(url);
    let data = await response.json(); //json 추출을 좀 기다려주셈
    setWeather(data); //date를 setWeather에 넣어주셈
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      <div className="container">
        <WeatherBox weather={weather} />
        <WeatherButton cities={cities} />
      </div>
    </div>
  );
}

export default App;
