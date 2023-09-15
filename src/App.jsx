import React from "react";
import { GlobalStyle, MainContainer } from "./styles";
import MainPage from "./pages/MainPage/MainPage";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Sidebar />
        <MainPage />
      </MainContainer>
    </>
  );
};

export default App;
