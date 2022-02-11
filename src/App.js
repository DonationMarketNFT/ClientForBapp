import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubPage from "./routes/SubPage";
import MainPage from "./routes/MainPage";
import { GlobalStyle } from "./styles/global-style";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route path="/sub" element={<SubPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
