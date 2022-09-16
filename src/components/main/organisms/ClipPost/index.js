import React, { useEffect, useState } from "react";

import * as S from "./style";

import ReactWebMediaPlayer from "react-web-media-player";
import { Button } from "react-bootstrap";

function ClipPost(props) {
  const [size, setSize] = useState({
    vidwidth: parseInt(window.screen.width * 0.34),
    vidheight: parseInt(window.screen.width * 0.2),
  });

  const handleResize = () => {
    setSize({
      vidwidth: parseInt(window.screen.width * 0.34),
      vidheight: parseInt(window.screen.width * 0.2),
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <S.PostContainer>
      <S.ApplyBgColor>
        <S.InnerContainer>
          <S.VideoBox>
            <ReactWebMediaPlayer
              video={props.videoUrl}
              width={size.vidwidth}
              height={size.vidheight}
            />
          </S.VideoBox>

          <S.InfoBox>
            <S.InfoTextBox
              onClick={props.OnClick || console.log("Clip Post got no OnClick")}
            >
              <S.InfoText>사고 정보 1</S.InfoText>
              <S.InfoText>{props.videoName}</S.InfoText>
            </S.InfoTextBox>
            <S.DelBox>
              <Button
                onClick={props.OnDelete}
                variant="danger"
                style={{ width: "7vw" }}
              >
                <text style={{ fontWeight: 600 }}>삭제</text>
              </Button>
            </S.DelBox>
          </S.InfoBox>
        </S.InnerContainer>
      </S.ApplyBgColor>
    </S.PostContainer>
  );
}

export default ClipPost;
