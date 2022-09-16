import * as S from "./style";

import React, { useEffect, useState, useRef } from "react";

import Header from "../../layout/Header";
import SideNav from "../../layout/SideNav";
import ClipPost from "../organisms/ClipPost";

import { useNavigate } from "react-router-dom";

import { S3Info, AWSURL } from "../../../util/privateInfo";

const AWS = require("aws-sdk");
AWS.config.update(S3Info);
let s3 = new AWS.S3();

function MainPage(props) {
  const mounted = useRef(false);
  const mounted2 = useRef(false);
  let [videoInfo, setVideoInfo] = useState({});
  let [videoURL, setVideoURL] = useState([]);
  let [clipList, setClipList] = useState([]);

  let navigate = useNavigate();

  function goDetail(index, url) {
    navigate(`detail/${index}`, { state: { vidUrl: url } });
  }

  function delEvent(key) {
    s3.deleteObject(
      { Bucket: "capdesign-ict", Key: key },
      function (err, data) {
        if (err) {
          console.log(err, err.stack); // an error occurred
        } else {
          console.log(data); // successful response
          getObjectInfo();
        }
      }
    );
  }

  async function getObjectInfo() {
    s3.listObjects({ Bucket: "capdesign-ict" }).send(function (err, data) {
      setVideoInfo({ ...data });
    });
  }

  useEffect(() => {
    getObjectInfo();
  }, []);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      console.log("print state\n");
      console.log(videoInfo);
      let urls = [];
      videoInfo.Contents.map((content) => urls.push(content.Key));
      console.log("pushed urls");
      console.log(urls);
      setVideoURL([...urls]);
    }
  }, [videoInfo]);

  useEffect(() => {
    if (!mounted2.current) {
      mounted2.current = true;
    } else {
      console.log("videoURLs");
      console.log(videoURL);
      let clipLists = [];
      clipLists = videoURL.map((url, index) => {
        return (
          <ClipPost
            videoUrl={AWSURL + url}
            videoName={url}
            OnClick={() => goDetail(index, url)}
            OnDelete={() => delEvent(url)}
          />
        );
      });
      setClipList([...clipLists]);
    }
  }, [videoURL]);

  return (
    <>
      <Header OnClick={() => navigate("")} />

      <S.Container>
        <S.MainBody>
          <S.SideSection>
            <SideNav />
          </S.SideSection>

          <S.MainSection>
            <S.ClipListBox>{clipList}</S.ClipListBox>
          </S.MainSection>
        </S.MainBody>
      </S.Container>
    </>
  );
}

export default MainPage;
