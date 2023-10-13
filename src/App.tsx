import React from "react";
import "./App.css";
import { HeaderContainer } from "./containers/header/HeaderContainer";
import GreetingSection from "./containers/GreetingSection/GreetingSection";

const App = (): JSX.Element => {
  return (
    <>
      <HeaderContainer />
      <GreetingSection />
    </>
  );
};

export default App;
