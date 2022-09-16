import * as S from "./style";

function Header(props) {
  return (
    <S.HeaderContainer>
      <S.Title onClick={props.OnClick}>Accident Handling System</S.Title>
    </S.HeaderContainer>
  );
}

export default Header;
