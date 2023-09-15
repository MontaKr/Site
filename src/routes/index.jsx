import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import AboutWrap from "../pages/About/AboutWrap";

export default function index() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutWrap />} />
    </Routes>
  );
}
