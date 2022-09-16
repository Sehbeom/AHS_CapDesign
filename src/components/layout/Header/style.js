import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 10vh;
  align-items: center;
  justify-content: left;
  display: flex;
  padding-left: 4vw;
  background: rgba(238, 241, 249, 0.7);
  box-sizing: border-box;
  position: fixed;
  z-index: 99;
  box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.text`
  font-size: 3vw;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: rgb(67, 121, 222);
`;
