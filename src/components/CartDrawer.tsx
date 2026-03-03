import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XIcon, ShoppingBagIcon, Trash2Icon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";
export interface CartItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  category: string;
}
interface CartDrawerProps {
  readonly open: boolean;
  readonly onClose: () => void;
  readonly items: CartItem[];
  readonly onRemove: (id: string) => void;
}
export function CartDrawer({
  open,
  onClose,
  items,
  onRemove,
}: CartDrawerProps) {
  const navigate = useNavigate();
  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const total = items.reduce((sum, item) => sum + item.price, 0);
  const categoryLabels: Record<string, string> = {
    paintings: "Painting",
    prints: "Print",
    digital: "Digital Art",
    sculptures: "Sculpture",
  };
  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
  };
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed inset-0 z-50 bg-charcoal/30 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 35,
            }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-cream flex flex-col shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-blush/30">
              <div className="flex items-center gap-2">
                <ShoppingBagIcon className="w-4 h-4 text-gold" />
                <h2 className="font-playfair text-lg text-charcoal">
                  Your Cart
                  {items.length > 0 && (
                    <span className="font-inter text-sm text-taupe ml-2">
                      ({items.length})
                    </span>
                  )}
                </h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Close cart"
                className="p-2 text-taupe hover:text-charcoal transition-colors duration-200"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <ShoppingBagIcon className="w-10 h-10 text-blush mb-4" />
                  <p className="font-playfair italic text-lg text-taupe mb-2">
                    Your cart is empty
                  </p>
                  <p className="font-inter text-sm text-taupe/60 mb-6">
                    Discover pieces that speak to you.
                  </p>
                  <Link
                    to="/gallery"
                    onClick={onClose}
                    className="font-inter text-sm tracking-widest uppercase text-gold hover:text-taupe transition-colors duration-300 border-b border-gold pb-0.5"
                  >
                    Browse the Collection
                  </Link>
                </div>
              ) : (
                <ul className="space-y-5">
                  {items.map((item) => (
                    <motion.li
                      key={item.id}
                      layout
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: 20,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="flex gap-4 items-start"
                    >
                      <Link
                        to={`/artwork/${item.id}`}
                        onClick={onClose}
                        className="shrink-0"
                      >
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-20 h-20 object-cover"
                        />
                      </Link>
                      <div className="flex-1 min-w-0">
                        <Link
                          to={`/artwork/${item.id}`}
                          onClick={onClose}
                          className="font-playfair text-sm text-charcoal hover:text-gold transition-colors duration-200 block leading-snug"
                        >
                          {item.title}
                        </Link>
                        <span className="font-inter text-xs text-taupe/60 tracking-wide uppercase block mt-0.5">
                          {categoryLabels[item.category] ?? item.category}
                        </span>
                        <span className="font-inter text-sm font-medium text-gold block mt-1">
                          ${item.price.toLocaleString()}
                        </span>
                      </div>
                      <button
                        onClick={() => onRemove(item.id)}
                        aria-label={`Remove ${item.title} from cart`}
                        className="p-1.5 text-taupe/50 hover:text-blush transition-colors duration-200 shrink-0"
                      >
                        <Trash2Icon className="w-4 h-4" />
                      </button>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-blush/30 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-inter text-sm text-taupe tracking-wide uppercase">
                    Total
                  </span>
                  <span className="font-playfair text-xl text-charcoal">
                    ${total.toLocaleString()}
                  </span>
                </div>
                <p className="font-inter text-xs text-taupe/60 leading-relaxed">
                  Free worldwide shipping. Each piece is carefully packaged and
                  insured.
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
                <button
                  onClick={onClose}
                  className="w-full font-inter text-xs tracking-widest uppercase text-taupe hover:text-gold transition-colors duration-300 py-1"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
