import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = () => {
  return (
    <div>
      <Button variant="light">Current Location</Button>{" "}
      <Button variant="light">New york</Button>{" "}
      <Button variant="light">Paris</Button>{" "}
      <Button variant="light">Tokyo</Button>{" "}
    </div>
  );
};

export default WeatherButton;
