import React from "react";

import styled from "@emotion/styled/macro";
import usePokemon from "../hooks/usePokemon";

const Base = styled.div`
  margin-top: 24px;
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 180px);
`;

const Loading = styled.img``;

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
  color: #d1d5db;
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
  const { isLoading, isError, data } = usePokemon<ListResponse>();

  const formatNumbering = (index: number): string => {
    return `#${String(index).padStart(3, "0")}`;
  };

  return (
    <Base>
      {isLoading || isError ? (
        <LoadingWrapper>
          <Loading src="/loading.gif" alt="loading" />
        </LoadingWrapper>
      ) : (
        <List>
          {data?.data.results.map((pokemon, idx) => (
            <ListItem key={pokemon.name}>
              <Image src={getImgUrl(idx + 1)} />
              <Name>{pokemon.name}</Name>
              <Index>{formatNumbering(idx + 1)}</Index>
            </ListItem>
          ))}
        </List>
      )}
    </Base>
  );
};

export default PokemonList;
