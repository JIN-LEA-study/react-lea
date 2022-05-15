import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ setCity, cities }) => {
  const searchByCity = (cityName) => {
    setCity(cityName);
    // let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=89cc8b2a01d33c3c6d58723691b762ac&units=metric`;
    // let response = await fetch(url);
    // let data = await res.json();
  };
  return (
    <div>
      <Button variant="light">Current Location</Button>{" "}
      {cities.map((item, index) => (
        <Button variant="light" key={index} onClick={() => setCity(item)}>
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
