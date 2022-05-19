import * as S from './style';

import Header from '../organisms/Header';
import ClipPost from '../organisms/ClipPost';

function MainPage() {
  return (
    <S.Container>
      <S.MainHeader>
        <Header />
      </S.MainHeader>

      <S.MainBody>
        <ClipPost />
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
