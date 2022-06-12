import React from "react";
import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <div style={{ display: "flex", marginBottom: "40px" }}>
      <Link to={"/"} style={{ marginRight: "20px" }}>
        Home
      </Link>
      <Link to={"/diary"} style={{ marginRight: "20px" }}>
        Diary
      </Link>
      <Link to={"/new"} style={{ marginRight: "20px" }}>
        New
      </Link>
      <Link to={"/edit"} style={{ marginRight: "20px" }}>
        Edit
      </Link>
    </div>
  );
};

export default RouteTest;
