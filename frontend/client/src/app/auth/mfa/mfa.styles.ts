import styled from "styled-components";
import { colours } from "../../constants/theme/theme";

export const MfaContainer = styled.div`
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
`;

export const Header = styled.h1`
font-weight: 200;
margin-bottom: 150px;
`;

export const MFAInput = styled.input`
    font-family: 'IBM Plex Mono', monospace;
    background-color: ${colours.black};
    border: none;
    border-bottom: 1px solid ${colours.green};
    color: ${colours.offWhite};
    font-size: 35px;
    padding: 5px;
    width: 10%;
    margin-bottom: 35px;
    text-align: center;

    &:focus {
        outline: none;
    }
`

export const MFAButton = styled.button`
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

    &:hover {
        background-color: ${colours.green};
        color: ${colours.black};
    }
`