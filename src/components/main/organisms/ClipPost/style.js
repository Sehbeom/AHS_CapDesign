import styled from 'styled-components';

export const PostContainer = styled.div`
width:50%;
height:40vh;
/* border-style: solid; */
box-sizing: border-box;
padding: 1vw 3vw;
display: flex;
justify-content: space-around;
align-items: center;
`

export const ThumbnailBox = styled.div`
width:45%;
height:100%;
background-color: skyblue;
`

export const InfoBox = styled.div`
width:45%;
height:100%;
padding: 1vw 1vw;

/* border-style: solid; */

display: flex;
flex-direction: column;
box-sizing: border-box;
justify-content: space-around;
`

export const InfoText = styled.text`
font-size: 1.2vw;
font-weight: bold;
`