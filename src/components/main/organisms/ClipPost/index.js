import * as S from './style';

import ReactWebMediaPlayer from 'react-web-media-player';

function ClipPost(props) {
  return (
        <S.PostContainer>
            <ReactWebMediaPlayer 
            video={props.videoUrl}
            width={400}
            height={250}/>

            <S.InfoBox>
                <S.InfoText>사고 정보 1</S.InfoText>
                <S.InfoText>사고 정보 2</S.InfoText>
                <S.InfoText>사고 정보 3</S.InfoText>
                <S.InfoText>사고 정보 4</S.InfoText>
                <S.InfoText>사고 정보 5</S.InfoText>
            </S.InfoBox>
        </S.PostContainer>
  );
}

export default ClipPost;
