import styled from "styled-components";

export const SelectCard = styled.div`
height: 100%;
display: grid;
gap: 3rem;
align-items: center;
justify-items: center;
align-content: center;
grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
`;

export const CardStyle = styled.div`
/* border-image: linear-gradient(deepskyblue, deeppink) 20 / 10px; */
/* border: 8px solid #FF7C08; */
/* border-radius: 50%; */
/* overflow: hidden; */
display: inline-flex;
align-items: center;
justify-content: center;
position: relative;
`;

export const CardBackground = styled.div`
position: absolute;
  top: calc(50% + 10px);
  left: calc(50% + 10px);
  transform: translate(-50%, -50%);
  background-color: #FDB751;
  width: 10rem;
  aspect-ratio: 1.23540177492;
  z-index: -1;
  /* 给我写一个box shadow */
  /* box-shadow: 10px 10px 10px #FDB751; */
`

export const CardChild = styled.div`
width: 100%;
height: 100%;
background-color: white;
border-radius: 50%;
`

export const CardText = styled.div`
font-family: 'Verdana","arial","microsoft yahei","STXihei';
font-size: 1.375rem;
text-align: center;
font-weight: normal;
`;

export const CardIconStyle = styled.div`
/* width: 50%;
height: 50%; */
font-size: 3.70rem;
`

export const Container = styled.div`
flex: 1;
width: 80%;
`
