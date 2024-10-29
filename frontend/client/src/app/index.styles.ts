import styled from 'styled-components';
import {colours} from './constants/theme/theme';
import Link from "next/link";

// Styles for main page

export const IndexContainer = styled.div`
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

export const Title = styled.h1`
font-weight: 500;
font-size: 50px;
padding: 35px;
`

export const ButtonLink = styled(Link)`
text-decoration: none;
`

export const LoginButton = styled.button`
color: ${colours.green};
border: 1px solid ${colours.green};
font-family: 'IBM Plex Mono', monospace;
padding: 20px 50px;
background-color: ${colours.black};
transition: 0.3s;
border-radius: 5px;
font-size: 35px;
cursor: pointer;
margin-top: 150px;

&:hover {
    background-color: ${colours.green};
    color: ${colours.black};
}
`

export const SignupButton = styled.button`
color: ${colours.grey};
margin-top: 50px;
cursor: pointer;
padding: 5px;
cursor: pointer;
font-size: 15px;
transition: 0.3s ease;
background-color: ${colours.black};
border: none;
font-family: 'IBM Plex Mono', monospace;
font-size: 25px;

&:hover {
    color: ${colours.offWhite};
}
`