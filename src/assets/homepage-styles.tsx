import styled from "styled-components";

export const SelectCard = styled.div`
height: 100%;
display: grid;
gap: 3rem;
align-items: center;
justify-items: center;
align-content: center;
grid-template-columns: repeat(auto-fit, minmax(7.87rem, 1fr));
`;

export const CardStyle = styled.div`
width: 7.87rem;
height: 7.87rem;
/* border-image: linear-gradient(deepskyblue, deeppink) 20 / 10px; */
border: 8px solid #FF7C08;
border-radius: 50%;
overflow: hidden;
display: inline-flex;
align-items: center;
justify-content: center;
`;

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
