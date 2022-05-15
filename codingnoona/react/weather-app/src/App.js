import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // 현재위치정보
  const getCurrentLocation = () => {
    // get Current Location JS
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("현재위치", lat, lon);
    });
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);

  return <div>hiii</div>;
}

export default App;
