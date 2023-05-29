import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import InnerPage from "./pages/Inner";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pet" element={<InnerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
