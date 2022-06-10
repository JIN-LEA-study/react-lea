import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
const { Kakao } = window;

const KakaoShareButton = () => {
  const url = "https://cat-mbti-test.netlify.app/";
  const resultUrl = window.location.href;

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("2141a7a76a6537cfe1e2fec8b19a7b4f");
    Kakao.isInitialized();
    console.log(Kakao.isInitialized());
  });

  Kakao.Link.createDefaultButton({
    container: "#kakao-link-btn",
    objectType: "feed",
    content: {
      title: "예비집사 판별기 결과",
      description: "예비집사님이 고양이를 키운다면 가장 잘 맞는 고양이는?",
      imageUrl:
        "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
      link: {
        mobileWebUrl: "https://developers.kakao.com",
        androidExecutionParams: "test",
      },
    },
    buttons: [
      {
        title: "나도 테스트 하러가기!",
        link: {
          mobileWebUrl: url,
        },
      },
    ],
  });
  return (
    <Button
      style={{
        fontFamily: "S-CoreDream-3Light",
        width: 170,
        marginLeft: "10px",
      }}
      data={resultData}
    >
      카카오톡 공유하기
    </Button>
  );
};

export default KakaoShareButton;
