import styled from "styled-components";
import { colours } from "../constants/theme/theme";

export const SuccessContainer = styled.div`
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