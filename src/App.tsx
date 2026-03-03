import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { ArtworkDetailPage } from "./pages/ArtworkDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { CheckoutPage } from "./pages/CheckoutPage";
export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<ShopPage />} />
            <Route path="/artwork/:slug" element={<ArtworkDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
