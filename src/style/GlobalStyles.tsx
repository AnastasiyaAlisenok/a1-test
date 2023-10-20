import { createGlobalStyle } from "styled-components";
import theme from "./ThemeStyles";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        font-size: 10px;
        @media (max-width: 768px) {
            font-size: 8px;
        }
    }

    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
    button {
        border: none;
    }
    body {
        background-color: ${theme.colors.bgColor};
        max-width: 1600px;
    }
`;

export default GlobalStyles;
