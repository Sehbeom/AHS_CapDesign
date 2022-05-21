import * as S from './style';

import ClipPost from '../organisms/ClipPost';

import { useNavigate } from "react-router-dom";


function MainPage(props) {

  let navigate = useNavigate();

  return (
    <S.Container>
      <S.MainBody>
        <ClipPost OnClick={()=>navigate("/detail")}/>
        <ClipPost />
        <ClipPost />
        <ClipPost />
        <ClipPost />
        <ClipPost />
        <ClipPost />
      </S.MainBody>

    </S.Container>
  );
}

export default MainPage;
