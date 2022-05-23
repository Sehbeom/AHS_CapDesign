import * as S from './style';

import React, { useEffect, useState, useRef } from 'react';

import ClipPost from '../organisms/ClipPost';

import { useNavigate } from "react-router-dom";

const AWS = require('aws-sdk');
AWS.config.update({
  accessKeyId: 'AKIAWUUHSFUWXWTF7AWH',
  secretAccessKey: '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',
  region: 'ap-northeast-2'
});
let s3 = new AWS.S3();
var params = {
  Bucket: "icecapstone",
};

function MainPage(props) {
  const mounted = useRef(false);
  const mounted2 = useRef(false);
  let [videoInfo, setVideoInfo] = useState({});
  let [videoURL, setVideoURL] = useState([]);
  let [clipList, setClipList] = useState([]);

  let navigate = useNavigate();


  useEffect(() => {

    const req = s3.listObjects(params);
    req.send(function (err, data) { setVideoInfo({ ...data }) });
  }, []);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else{
      console.log("print state\n");
      console.log(videoInfo);
      let urls=[];
      videoInfo.Contents.map(content => urls.push(`https://icecapstone.s3.ap-northeast-2.amazonaws.com/${content.Key}`));
      console.log("pushed urls");
      console.log(urls);
      setVideoURL([...urls]);

    }
  }, [videoInfo]);

  useEffect(()=>{
    if (!mounted2.current) {
      mounted2.current = true;
    } else{
      console.log("videoURLs");
      console.log(videoURL);
      let clipLists = [];
      clipLists = videoURL.map(url => <ClipPost videoUrl={url} />);
      setClipList([...clipLists]);
    }

  }, [videoURL]);

  
  return (
    <S.Container>
      <S.MainBody>
        {clipList}
      </S.MainBody>

    </S.Container>
  );
}

export default MainPage;
