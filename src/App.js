import "./styles/App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./views/Home.jsx";
import Products from "./views/Products";
import ContactUs from "./views/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/ContactUs" element={<ContactUs/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
