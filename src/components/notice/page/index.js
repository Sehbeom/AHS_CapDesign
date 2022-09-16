import * as S from "./style";

import Header from "../../layout/Header";
import ClipPost from "../../main/organisms/ClipPost";
import SideNav from "../../layout/SideNav";

import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { S3Info, AWSURL } from "../../../util/privateInfo";

const AWS = require("aws-sdk");
AWS.config.update(S3Info);
let s3 = new AWS.S3();

function NoticePage(props) {
  let navigate = useNavigate();
  const { videoUrl } = useParams();

  function delEvent(key) {
    s3.deleteObject(
      { Bucket: "capdesign-ict", Key: key },
      function (err, data) {
        if (err) {
          console.log(err, err.stack); // an error occurred
        } else {
          console.log(data); // successful response
          navigate("/");
        }
      }
    );
  }

  return (
    <>
      <Header OnClick={() => navigate("/")} />
      <S.Container>
        <S.MainBody>
          <S.SideSection>
            <SideNav />
          </S.SideSection>

          <S.MainSection>
            <ClipPost
              videoUrl={AWSURL + videoUrl}
              videoName={videoUrl}
              OnClick={() => console.log("Clicked in Detail Page")}
              OnDelete={() => delEvent(videoUrl)}
            />
          </S.MainSection>
        </S.MainBody>
      </S.Container>
    </>
  );
}

export default NoticePage;
