import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBagIcon, MenuIcon, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CartDrawer } from "./CartDrawer";
import { useCart } from "../context/CartContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { items, isOpen, openCart, closeCart, removeItem } = useCart();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);
  const navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];
  const isActive = (href: string) => location.pathname === href;
  const isHome = location.pathname === "/";
  const useWhiteText = !scrolled && isHome;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-playfair italic text-xl md:text-2xl transition-colors duration-300 ${useWhiteText ? "text-white hover:text-white/80" : "text-charcoal hover:text-gold"}`}
            >
              Elara Voss
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                let linkColor: string;
                if (isActive(link.href)) {
                  linkColor = "text-gold";
                } else if (useWhiteText) {
                  linkColor = "text-white/90 hover:text-white";
                } else {
                  linkColor = "text-charcoal hover:text-gold";
                }

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`font-inter text-sm tracking-widest uppercase transition-colors duration-300 relative group ${linkColor}`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"}`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <button
                onClick={openCart}
                aria-label={`Shopping cart, ${items.length} items`}
                className={`relative p-2 transition-colors duration-300 ${useWhiteText ? "text-white/90 hover:text-white" : "text-charcoal hover:text-gold"}`}
              >
                <ShoppingBagIcon className="w-5 h-5" />
                {items.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-white text-[10px] font-inter font-semibold rounded-full flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className={`md:hidden p-2 transition-colors duration-300 ${useWhiteText ? "text-white/90 hover:text-white" : "text-charcoal hover:text-gold"}`}
              >
                {menuOpen ? (
                  <XIcon className="w-5 h-5" />
                ) : (
                  <MenuIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/98 backdrop-blur-sm border-b border-blush/30 shadow-lg md:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.2,
                  }}
                >
                  <Link
                    to={link.href}
                    className={`font-inter text-sm tracking-widest uppercase block transition-colors duration-300 ${isActive(link.href) ? "text-gold" : "text-charcoal hover:text-gold"}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <CartDrawer
        open={isOpen}
        onClose={closeCart}
        items={items}
        onRemove={removeItem}
      />
    </>
  );
}
