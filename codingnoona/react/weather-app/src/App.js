import "./App.css";
import { useEffect, useState } from "react";

function App() {
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
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=89cc8b2a01d33c3c6d58723691b762ac`;
    let response = await fetch(url);
    let data = await response.json(); //json 추출을 좀 기다려주셈
    console.log(data);
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);

  return <div>hiii</div>;
}

export default App;
