import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background: rgba(238, 241, 249, 0.7);
`;

export const MainBody = styled.div`
  width: 100%;
  margin-top: 10vh;
  box-sizing: border-box;
  display: flex;
`;

export const SideSection = styled.div`
  width: 15%;
`;

export const MainSection = styled.div`
  width: 85%;
  background: rgba(238, 241, 249, 0.7);
  display: flex;
  justify-content: center;
`;

export const ClipListBox = styled.div`
  width: 81vw;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`;
