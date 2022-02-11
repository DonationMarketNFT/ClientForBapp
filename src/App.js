import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubPage from "./routes/SubPage";
import MainPage from "./routes/MainPage";
import { GlobalStyle } from "./styles/global-style";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/sub" element={<SubPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
