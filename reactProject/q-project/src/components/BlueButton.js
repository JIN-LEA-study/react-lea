import React from "react";
import styled from "styled-components";

const MyButton = styled.a`
  display: block;
  margin-bottom: 29px;
  padding: 1.8em;
  cursor: pointer;
  text-decoration: none;
  font-size: inherit;
  line-height: 1.6;
  font-family: inherit;
  font-weight: 600;
  color: #382b22;
  padding: 1.25em 2em;
  background-color: #fefefe;
  border: 2px solid #8599b1;
  border-radius: 0.75em;
  user-select: none; //드래그 안되게 하는 기능
  transform-style: preserve-3d;
  transition: transform 0.15s ease-out, background 0.15s ease-out;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    bottom: 0;
    right: 0;
    background: #c4d8f9;
    border-radius: inherit;
    box-shadow: 0 0 0 2px #8599b1, 0 0.625em 0 0 #e2efff;
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;
  }
  &:hover {
    /* background: #c4d8f9; */
    transform: translateY(0.25em);
  }
`;

export function BlueButton({ text, clickEvent }) {
  return <MyButton onClick={clickEvent}>{text}</MyButton>;
}
