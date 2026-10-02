import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "@/pages/About";
import Capabilities from "@/pages/Capabilities";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Products from "@/pages/Products";
import Sustainability from "@/pages/Sustainability";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
