import React from "react";
import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}
    >
      <Link to={"/"}>Home</Link>
      <Link to={"/diary"}>Diary</Link>
      <Link to={"/new"}>New</Link>
      <Link to={"/edit"}>Edit</Link>
    </div>
  );
};

export default RouteTest;
