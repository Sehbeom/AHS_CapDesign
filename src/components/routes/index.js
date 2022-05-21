import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import MainPage from "../main/page";
import DetailPage from "../detail/page";



function MainRoutes() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="" element={<MainPage />} />
            <Route path="detail" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default MainRoutes;
