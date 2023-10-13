import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "styled-components";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./style/GlobalStyles";
import theme from "./style/ThemeStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyles />
  </ThemeProvider>,
);

reportWebVitals();
