import styled from "styled-components";

export const SideContainer = styled.div`
  width: 15vw;
  height: 90vh;
  justify-content: right;
  display: flex;
  background: rgba(238, 241, 249, 0.7);
  box-sizing: border-box;
  position: fixed;
`;

export const InnerContainer = styled.div`
  width: 11vw;
  height: 89vh;
  margin-top: 1vh;
`;

export const ToggleBox = styled.div`
  width: 11vw;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ToggleText = styled.text`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.2vw;
  font-weight: 600;
  color: rgb(97, 110, 128);
`;

export const InnerToggleText = styled.text`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1vw;
  font-weight: 600;
  margin-left: 1vw;
  color: rgb(97, 110, 128);
`;
