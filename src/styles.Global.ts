import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    :root{
        --Blue: #0030b4;
        --BlueLight: #007ee6;
        --GreyText: #313131;
        --GreyTextLight: #919191;
        --GreyTitle: #5f5f5f;
        --White: #FFFFFF;
        --Error: red;

    }
`;
