import { Routes, Route, Router } from "react-router-dom";
import Page from "./components/Page";
import "./style/common.scss";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/student/:name" element={<Page />} />
      </Routes>
    </>
  );
}

export default App;
