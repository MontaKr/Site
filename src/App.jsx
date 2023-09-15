import React from "react";
import { GlobalStyle, MainContainer } from "./styles";
import Sidebar from "./components/sidebar/Sidebar";
import RootRoute from "./routes/index";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <MainContainer>
        <Sidebar />
        <RootRoute />
      </MainContainer>
    </BrowserRouter>
  );
};

export default App;
