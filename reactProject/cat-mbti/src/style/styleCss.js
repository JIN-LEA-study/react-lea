import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* min-height: 100vh; */
  background: radial-gradient(60% 90% at 70% 70%, #fde68c 30%, #ffd0a1 100%);
`;

const Container = styled.div`
  width: 1200px;
  height: 1200px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  flex-direction: column;
  position: relative;
`;

const ContentContainer = styled.div`
  background-color: #fefdf8;
  border-radius: 30px;
  width: 1200px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  box-shadow: 0 2px 10px -5px rgba(133, 122, 81, 0.42);
`;

const Header = styled.div`
  /* background-color: red; */
  width: 90%;
  font-size: 30pt;
  font-family: "yg-jalnan";
  margin-top: 30px;
  color: #413434;
  span {
    color: #ffd0a1;
  }
`;

const QuestionHeader = styled.div`
  width: 90%;
  font-size: 23pt;
  font-family: "yg-jalnan";
  margin-top: 30px;
  color: #413434;
  span {
    color: #ffd0a1;
  }
`;

const ResultHeader = styled.div`
  /* background-color: red; */
  width: 90%;
  font-size: 20pt;
  font-family: "yg-jalnan";
  margin-top: 30px;
  color: #413434;
  span {
    color: #ffd0a1;
  }
`;

const Title = styled.div`
  font-size: 20pt;
  font-family: "S-CoreDream-3Light";
  margin-top: 10px;
  color: #413434;
`;

const Button = styled.div`
  width: 100px;
  height: 50px;
  background-color: #fde68c;
  border-radius: 10px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-family: "yg-jalnan";
`;

const QuestionButton = styled.div`
  width: 500px;
  height: 200px;
  background-color: #fde68c;
  border-radius: 10px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  /* font-family: "yg-jalnan"; */
  font-family: "S-CoreDream-3Light";
  font-size: 18pt;
  padding: 10px;
  &:hover {
    background: #ffd0a1;
  }
`;

const LogoImg = styled.div`
  position: relative;
  top: 100px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 6px solid #fde68c;
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    background-size: contain;
  }
`;

const Desc = styled.div`
  font-family: "yg-jalnan";
  color: #413434;
`;

const Contents = styled.div`
  width: 80%;
`;

const DescContent = styled.div`
  width: 80%;
  margin-top: 30px;
  font-size: 18pt;
  font-family: "S-CoreDream-3Light";
`;

export {
  Wrapper,
  Container,
  Header,
  Title,
  Button,
  LogoImg,
  QuestionButton,
  Desc,
  Contents,
  ResultHeader,
  DescContent,
  ContentContainer,
  QuestionHeader,
};
