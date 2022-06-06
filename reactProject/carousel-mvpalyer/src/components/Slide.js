import React from "react";
import styled from "styled-components";

export default function Slide({ avi }) {
  return <AVI muted loop autoPlay src={avi} />;
}

const AVI = styled.video`
  width: 100%;
  object-fit: cover;
`;
