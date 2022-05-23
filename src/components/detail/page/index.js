import * as S from './style';
import S3 from 'aws-sdk/clients/s3';

import ReactWebMediaPlayer from 'react-web-media-player';
import React, { useEffect, useState, useRef } from 'react';



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

function DetailPage() {
  const mounted = useRef(false);
  let [videoInfo, setVideoInfo] = useState({});
  let [videoURL, setVideoURL] = useState('');



  useEffect(() => {
    const req = s3.listObjects(params);
    req.send(function(err, data){setVideoInfo({...data})});

  }, []);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      console.log("print state\n");
      console.log(videoInfo);
      setVideoURL(`https://icecapstone.s3.ap-northeast-2.amazonaws.com/${videoInfo.Contents[15].Key}`);
      console.log(videoURL);
    }
  }, [videoInfo]);

  return (
    <S.Container>
      <S.TestText>DetailPage!!!</S.TestText>

      <ReactWebMediaPlayer 
      video={videoURL} 
      width={400}/>

    </S.Container>
  );
}

export default DetailPage;
