import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "@/pages/About";
import Capabilities from "@/pages/Capabilities";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Process from "@/pages/Process";

import Categories from "@/pages/Categories";
import Resources from "@/pages/Resources";
import { Blogs } from "@/pages/Blogs";
import { SinglePageBlog } from "@/pages/SinglePageBlog";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/process" element={<Process />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
         <Route path="/blogs/:slug" element={<SinglePageBlog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
