import styled from "styled-components";

// const getButtonStyle = props => {
//     if(props.signInWithGoogle){
//         return 'background-color: #4285f4; color: white; &:hover{background-color: white; color: black;  border: 1px solid black;}'
//     }
//     else{
//         return ''
//     }
// }

export const StyledButton = styled.button`
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 35px 0 35px;
font-size: 15px;
background-color: black;
color: white;
text-transform: uppercase;
font-family: 'Open Sans';
font-weight: bolder;
border: none;
cursor: pointer;
transition: background-color 0.1s linear;

&:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

export const GoogleButton = styled(StyledButton)`
background-color: #4285f4; 
color: white; 

&:hover{
    background-color: white;
    color: black; 
    border: 1px solid black
`