import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import About from "@/pages/About";
import Capabilities from "@/pages/Capabilities";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Process from "@/pages/Process";
import Categories from "@/pages/Categories";
import { Blogs } from "@/pages/Blogs";
import { SinglePageBlog } from "@/pages/SinglePageBlog";
import { ProductInfrastructure } from "@/pages/ProductInfrastructure";
import OurTeam from "@/pages/OurTeam";
import Compliances from "@/pages/resources/Compliances";
import Catalogue from "@/pages/resources/Catalogue";
import LogisticPartners from "@/pages/resources/LogisticPartners";
import TechnologyPartnersPage from "@/pages/resources/TechnologyPartnersPage";
import FutureWithUsPage from "@/pages/resources/FutureWithUsPage";
import { ScrollToHash } from "@/components/sections/ScrollToHash";
import CatalogueBook from "@/pages/resources/CatalogueBook";

export function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<SinglePageBlog />} />
        <Route path="/productInfrastructure" element={<ProductInfrastructure />} />
<Route path="/resources/catalogue" element={<Catalogue />} />
<Route path="/resources/catalogue/:slug" element={<CatalogueBook />} />

        <Route path="/resources" element={<Navigate to="/resources/our-team" replace />} />
        <Route path="/resources/our-team" element={<OurTeam />} />
        <Route path="/resources/compliances" element={<Compliances />} />
        <Route path="/resources/catalogue" element={<Catalogue />} />
        <Route path="/resources/logistic-partners" element={<LogisticPartners />} />
        <Route path="/resources/technology-partners" element={<TechnologyPartnersPage />} />
        <Route path="/resources/future-with-us" element={<FutureWithUsPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}