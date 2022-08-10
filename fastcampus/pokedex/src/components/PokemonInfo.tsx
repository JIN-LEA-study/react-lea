import React from "react";
import styled from "@emotion/styled/macro";
import { mapColorToHex, mapTypeToHex } from "../utils";
import { Color, Type } from "../types";

const Base = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ color }) => color};
  padding: 20px;
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
`;
const ThumbnailImgWrapper = styled.div`
  width: 160px;
  margin-inline: auto;
  margin-block: 24px;
`;

const ThumnailImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Name = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  text-transform: capitalize;
`;

const Index = styled.div`
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  opacity: 0.75;
`;

const TypeWrapper = styled.div<{ color?: string }>`
  background-color: ${({ color }) => color};
  padding: 4px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TypeList = styled.div`
  display: flex;
  margin-top: 8px;
  ${TypeWrapper} + ${TypeWrapper} {
    margin-left: 8px;
  }
`;

const TypeInfo = styled.img`
  height: 12px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ImgWrapper = styled.div`
  position: absolute;
  width: 288px;
  height: 288px;
  left: -95px;
  top: -96px;
  opacity: 0.75;
`;

interface Props {
  id: string;
  name?: string;
  types?: Array<Type>;
  color?: Color;
}

const PokemonInfo: React.FC<Props> = ({ id, name, types, color }) => {
  const formatNumbering = (index: string): string => {
    return `#${String(index).padStart(3, "0")}`;
  };

  return (
    <Base color={mapColorToHex(color?.name)}>
      <ImgWrapper>
        <Img src="/assets/poketball.svg" />
      </ImgWrapper>
      <InfoWrapper>
        <Name>{name}</Name>
        <Index>{formatNumbering(id)}</Index>
      </InfoWrapper>
      <TypeList>
        {types?.map(({ type }, idx) => (
          <TypeWrapper key={idx} color={mapTypeToHex(type.name)}>
            <TypeInfo src={`/assets/${type.name}.svg`} />
          </TypeWrapper>
        ))}
      </TypeList>
      <ThumbnailImgWrapper>
        <ThumnailImg
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt="image"
        />
      </ThumbnailImgWrapper>
    </Base>
  );
};

export default PokemonInfo;
