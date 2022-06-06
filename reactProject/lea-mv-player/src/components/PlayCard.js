import React, {useState} from 'react'
import AviData from './AviData';
import styled from 'styled-components';
import Controls from './Controls';
// Ant Design Icons
import { AiFillStar } from "react-icons/ai";

const PlayCard = (props) => {
  const [mvCard, setMvCard] = useState(AviData);

  function PlayCards (props) {
    <AviSection>
      <ContentSection>
      <ContentTitle>
        <ArtistImg src={props.mvCard[0].img2} />
        &nbsp; {props.mvCard[0].artist} - {props.mvCard[0].name}
      </ContentTitle>
      <ContentLike>
        <AiFillStar color="#ffffff" size="30px" cursor="pointer" />
      </ContentLike>
    </ContentSection>

          <Controls />
        <Avi
      loop
      muted
      autoPlay
      src={props.mvCard[0].avi}
      type="video/mp4"
    />
      </AviSection>
  }

  return (
    <PlayCards mvCard={mvCard}/>

  )
}

const AviSection = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 20px;
`;

const Avi = styled.video`
  width: 100%;
  object-fit: cover;
  /* position: absolute; */
`;

// const ContentSection = styled.div`
//   width: 90%;
//   top: 85%;
//   height: 20%;
//   /* background-color: rgba(255, 255, 255, 0.3); */
//   position: absolute;
//   border-radius: 20px;
// `;

const ContentSection = styled.div`
  width: 90%;
  top: 5%;
  height: 5%;
  position: absolute;
  /* background-color: white; */
  display: flex;
  p {
    color: #ffffff;
  }
`;

const ArtistImg = styled.img`
  width: 25px;
  height: 25px;
  /* background-color: #ffffff; */
  object-fit: cover;
  border-radius: 50%;
`;

const ContentTitle = styled.div`
  width: 98%;
  color: #ffffff;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const ContentLike = styled.div`
  width: 2%;
  cursor: pointer;
  /* background-color: red; */
  div {
    right: 10%;
  }
`

export default PlayCard
