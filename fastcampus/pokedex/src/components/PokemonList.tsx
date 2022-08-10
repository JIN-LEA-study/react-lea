import React from "react";

import styled from "@emotion/styled/macro";

const Base = styled.div`
  margin-top: 24px;
`;

const ListItem = styled.li`
  position: relative;
  list-style: none;
  display: flex;
  align-items: center;
  box-shadow: 6px 4px 14px 5px rgba(0, 0, 0, 0.21);
  border-radius: 12px;
  & + & {
    margin-top: 18px;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const Image = styled.img``;

const Index = styled.p`
  position: absolute;
  margin: 0;
  padding: 0;
  right: 16px;
  font-size: 24px;
  font-weight: bold;
  color: #01d5db;
`;

const Name = styled.p`
  margin: 0;
  padding: 0 0 0 12px;
  flex: 1 1 100%;
  color: #374151;
  text-transform: capitalize; //첫번째 문자를 대문자로
  font-size: 16px;
  font-weight: bold;
`;

const getImgUrl = (
  index: number
): string => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png

`;

const PokemonList = () => {
  return (
    <Base>
      <List>
        <ListItem>
          <Image src={getImgUrl(1)} />
          <Name>bulbasaur</Name>
          <Index>#001</Index>
        </ListItem>
      </List>
    </Base>
  );
};

export default PokemonList;
