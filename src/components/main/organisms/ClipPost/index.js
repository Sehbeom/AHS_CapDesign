import * as S from './style';

function ClipPost(props) {
  return (
        <S.PostContainer>
            <S.ThumbnailBox onClick={props.OnClick}/>
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
