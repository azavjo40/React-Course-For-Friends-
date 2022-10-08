import { Routes, Route } from "react-router-dom";
import { Basket } from "../pages/basket/Basket";
import { Home } from "../pages/home/Home";
import { Product } from "../pages/product/Product"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/product/:id" element={<Product />} />
        </Routes>
    )
}