import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "@/pages/About";
import Capabilities from "@/pages/Capabilities";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Process from "@/pages/Process";
import Sustainability from "@/pages/Sustainability";
import Categories from "@/pages/Categories";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/process" element={<Process />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
