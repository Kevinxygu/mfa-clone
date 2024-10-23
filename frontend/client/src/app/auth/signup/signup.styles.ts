import styled from 'styled-components';
import {colours} from '../../constants/theme/theme';
import Link from "next/link";

export const Container = styled.div`
margin: 0;
padding: 0;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: ${colours.black};
color: ${colours.offWhite};
flex-direction: column;
`


export const Form = styled.form`
flex-direction: column;
display: flex;
width: 30%;
`

export const Label = styled.label`
font-size: 30px;
text-align: left;
font-weight: 300;
`

export const Input = styled.input`
font-family: 'IBM Plex Mono', monospace;
background-color: ${colours.black};
color: ${colours.offWhite};
font-weight: 200;
font-size: 20px;
border: none;
border-bottom: 1px solid ${colours.green};
padding: 5px;
margin-top: 35px;
margin-bottom: 100px;

&:focus {
    outline: none;
}
`

export const SignupButton = styled.button`
color: ${colours.green};
border: 1px solid ${colours.green};
font-family: 'IBM Plex Mono', monospace;
padding: 15px 30px;
background-color: ${colours.black};
transition: 0.3s;
border-radius: 5px;
font-size: 25px;
cursor: pointer;
margin-top: 50px;
width: 30%;
align-self: flex-end;

&:hover {
    background-color: ${colours.green};
    color: ${colours.black};
}
`