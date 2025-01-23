import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Header from "./components/Header";
import BaseLayout from "./helper/BaseLayout";
import "./styles/custom.css";
import Loader from "./helper/Loader";
import WebDevelopment from "./pages/servicesPages/WebDevelopment";
import AppDevelopment from "./pages/servicesPages/AppDevelopment";
import DigitalMarketing from "./pages/servicesPages/DigitalMarketing";
import WebMaintenance from "./pages/servicesPages/WebMaintenance";
import GraphicDesign from "./pages/servicesPages/GraphicDesign";
import DomainHosting from "./pages/servicesPages/DomainHosting";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopifyEcommerce from "./pages/servicesPages/ShopifyEcommerce";
import TravelAgency from "./pages/servicesPages/TravelAgency";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="w-100 min-vh-100 text-main-color bg-main-color-1 sour-gummy-uniqueClass">
        <Header />
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            {/* services pages */}
            <Route path="/website-development" element={<WebDevelopment />} />
            <Route path="/app-development" element={<AppDevelopment />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/website-maintenance" element={<WebMaintenance />} />
            <Route path="/graphic-design" element={<GraphicDesign />} />
            <Route path="/domain-hosting" element={<DomainHosting />} />
            <Route path="/shopify-ecommerce" element={<ShopifyEcommerce />} />
            <Route path="/travel-agency-services" element={<TravelAgency />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
