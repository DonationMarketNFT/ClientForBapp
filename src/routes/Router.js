import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Campaigns from "../Components/Campaigns/Campaigns";
import SubPage from "../Components/SubPage";
import Header from "./Header";
import Past from "../Components/Campaigns/Past";
import Present from "../Components/Campaigns/Present";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/campaigns/*" element={<Campaigns />}>
          <Route path="present" element={<Present />} />
          <Route path="past" element={<Past />} />
          {/* <Route path=":id" element={<SubPage />} /> */}
        </Route>
        {/* <Route path="/sub" element={<SubPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
