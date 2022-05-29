import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`); //동적으로 바뀔 때(id값)
  };
  return (
    <div className="card" onClick={showDetail}>
      <img src={item?.img} alt="" />
      <div>{item?.choice === true ? "Conscous choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
