import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
// import Home from "../pages/Home";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Product from "../pages/Product";
import { ProductDetail } from "../pages/ProductDetail";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productDetail" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
