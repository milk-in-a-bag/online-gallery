import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  LockIcon,
  CheckCircleIcon,
  CreditCardIcon,
  PackageIcon,
} from "lucide-react";
import { Button } from "../components/Button";
interface CartItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  category: string;
}
interface ShippingForm {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
}
interface PaymentForm {
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}
const MOCK_ITEMS: CartItem[] = [
  {
    id: "golden-reverie",
    title: "Golden Reverie",
    price: 1200,
    imageUrl:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800",
    category: "paintings",
  },
  {
    id: "soft-geometry",
    title: "Soft Geometry",
    price: 320,
    imageUrl:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800",
    category: "prints",
  },
];
const categoryLabels: Record<string, string> = {
  paintings: "Painting",
  prints: "Print",
  digital: "Digital Art",
  sculptures: "Sculpture",
};
type Step = "shipping" | "payment" | "confirmation";
const steps: {
  key: Step;
  label: string;
}[] = [
  {
    key: "shipping",
    label: "Shipping",
  },
  {
    key: "payment",
    label: "Payment",
  },
  {
    key: "confirmation",
    label: "Confirmation",
  },
];
function formatCardNumber(value: string) {
  return value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();
}
function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length >= 3) return digits.slice(0, 2) + "/" + digits.slice(2);
  return digits;
}
const inputClass =
  "w-full font-inter text-sm px-4 py-3 bg-white border border-blush/40 text-charcoal placeholder-taupe/40 focus:outline-none focus:border-gold transition-colors duration-300";
const labelClass =
  "block font-inter text-xs tracking-widest uppercase text-taupe/70 mb-1.5";
export function CheckoutPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>("shipping");
  const [orderNumber] = useState(
    () => `EV-${Math.floor(10000 + Math.random() * 90000)}`,
  );
  const [shipping, setShipping] = useState<ShippingForm>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });
  const [payment, setPayment] = useState<PaymentForm>({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const subtotal = MOCK_ITEMS.reduce((s, i) => s + i.price, 0);
  const shipping_cost = 0;
  const total = subtotal + shipping_cost;
  const stepIndex = steps.findIndex((s) => s.key === currentStep);
  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep("payment");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep("confirmation");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const fadeSlide = {
    initial: {
      opacity: 0,
      x: 20,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: -20,
    },
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  };
  return (
    <main className="w-full bg-cream min-h-screen pt-20">
      {/* Top bar */}
      <div className="border-b border-blush/30 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="font-playfair italic text-lg text-charcoal hover:text-gold transition-colors duration-300"
          >
            Elara Voss
          </Link>
          <div className="flex items-center gap-1.5 text-taupe/60">
            <LockIcon className="w-3.5 h-3.5" />
            <span className="font-inter text-xs tracking-wide">
              Secure Checkout
            </span>
          </div>
        </div>
      </div>

      {currentStep !== "confirmation" && (
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-8">
          {/* Step indicator */}
          <div className="flex items-center gap-3 mb-10">
            {steps.slice(0, 2).map((step, i) => (
              <div key={step.key} className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-inter font-semibold transition-colors duration-300 ${stepIndex > i ? "bg-gold text-white" : stepIndex === i ? "bg-charcoal text-white" : "bg-blush/30 text-taupe"}`}
                  >
                    {stepIndex > i ? (
                      <CheckCircleIcon className="w-4 h-4" />
                    ) : (
                      i + 1
                    )}
                  </div>
                  <span
                    className={`font-inter text-xs tracking-widest uppercase transition-colors duration-300 ${stepIndex === i ? "text-charcoal" : stepIndex > i ? "text-gold" : "text-taupe/50"}`}
                  >
                    {step.label}
                  </span>
                </div>
                {i < 1 && (
                  <ChevronRightIcon className="w-3.5 h-3.5 text-taupe/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        {currentStep !== "confirmation" ? (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Form Column */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {/* ── SHIPPING ── */}
                {currentStep === "shipping" && (
                  <motion.form
                    key="shipping"
                    {...fadeSlide}
                    onSubmit={handleShippingSubmit}
                    className="space-y-5"
                  >
                    <h2 className="font-playfair text-2xl text-charcoal mb-6">
                      Shipping Information
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>First Name</label>
                        <input
                          type="text"
                          required
                          value={shipping.firstName}
                          onChange={(e) =>
                            setShipping({
                              ...shipping,
                              firstName: e.target.value,
                            })
                          }
                          placeholder="Margot"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Last Name</label>
                        <input
                          type="text"
                          required
                          value={shipping.lastName}
                          onChange={(e) =>
                            setShipping({
                              ...shipping,
                              lastName: e.target.value,
                            })
                          }
                          placeholder="Delacroix"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Email Address</label>
                      <input
                        type="email"
                        required
                        value={shipping.email}
                        onChange={(e) =>
                          setShipping({
                            ...shipping,
                            email: e.target.value,
                          })
                        }
                        placeholder="your@email.com"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Street Address</label>
                      <input
                        type="text"
                        required
                        value={shipping.address}
                        onChange={(e) =>
                          setShipping({
                            ...shipping,
                            address: e.target.value,
                          })
                        }
                        placeholder="12 Rue des Artistes"
                        className={inputClass}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>City</label>
                        <input
                          type="text"
                          required
                          value={shipping.city}
                          onChange={(e) =>
                            setShipping({
                              ...shipping,
                              city: e.target.value,
                            })
                          }
                          placeholder="Paris"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Postal Code</label>
                        <input
                          type="text"
                          required
                          value={shipping.postalCode}
                          onChange={(e) =>
                            setShipping({
                              ...shipping,
                              postalCode: e.target.value,
                            })
                          }
                          placeholder="75001"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Country</label>
                      <select
                        required
                        value={shipping.country}
                        onChange={(e) =>
                          setShipping({
                            ...shipping,
                            country: e.target.value,
                          })
                        }
                        className={`${inputClass} appearance-none`}
                      >
                        <option value="">Select country</option>
                        <option>France</option>
                        <option>United Kingdom</option>
                        <option>United States</option>
                        <option>Germany</option>
                        <option>Italy</option>
                        <option>Spain</option>
                        <option>Netherlands</option>
                        <option>Australia</option>
                        <option>Canada</option>
                        <option>Japan</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => navigate("/gallery")}
                        className="flex items-center gap-1.5 font-inter text-sm text-taupe hover:text-gold transition-colors duration-300"
                      >
                        <ChevronLeftIcon className="w-4 h-4" />
                        Back to cart
                      </button>
                      <Button type="submit" variant="primary" size="lg">
                        Continue to Payment
                        <ChevronRightIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.form>
                )}

                {/* ── PAYMENT ── */}
                {currentStep === "payment" && (
                  <motion.form
                    key="payment"
                    {...fadeSlide}
                    onSubmit={handlePaymentSubmit}
                    className="space-y-5"
                  >
                    <h2 className="font-playfair text-2xl text-charcoal mb-6">
                      Payment Details
                    </h2>

                    <div className="flex items-center gap-2 bg-blush/10 px-4 py-3 mb-2">
                      <LockIcon className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      <p className="font-inter text-xs text-taupe">
                        Your payment information is encrypted and secure. We
                        never store card details.
                      </p>
                    </div>

                    <div>
                      <label className={labelClass}>Name on Card</label>
                      <input
                        type="text"
                        required
                        value={payment.cardName}
                        onChange={(e) =>
                          setPayment({
                            ...payment,
                            cardName: e.target.value,
                          })
                        }
                        placeholder="Margot Delacroix"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Card Number</label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={payment.cardNumber}
                          onChange={(e) =>
                            setPayment({
                              ...payment,
                              cardNumber: formatCardNumber(e.target.value),
                            })
                          }
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          className={`${inputClass} pr-10`}
                        />
                        <CreditCardIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe/40" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Expiry Date</label>
                        <input
                          type="text"
                          required
                          value={payment.expiry}
                          onChange={(e) =>
                            setPayment({
                              ...payment,
                              expiry: formatExpiry(e.target.value),
                            })
                          }
                          placeholder="MM/YY"
                          maxLength={5}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>CVV</label>
                        <input
                          type="text"
                          required
                          value={payment.cvv}
                          onChange={(e) =>
                            setPayment({
                              ...payment,
                              cvv: e.target.value
                                .replace(/\D/g, "")
                                .slice(0, 4),
                            })
                          }
                          placeholder="•••"
                          maxLength={4}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setCurrentStep("shipping")}
                        className="flex items-center gap-1.5 font-inter text-sm text-taupe hover:text-gold transition-colors duration-300"
                      >
                        <ChevronLeftIcon className="w-4 h-4" />
                        Back to shipping
                      </button>
                      <Button type="submit" variant="primary" size="lg">
                        <LockIcon className="w-4 h-4" />
                        Place Order · ${total.toLocaleString()}
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Order Summary Column */}
            <div className="lg:col-span-2">
              <div className="bg-white/70 border border-blush/30 p-6 sticky top-28">
                <h3 className="font-playfair text-lg text-charcoal mb-5">
                  Order Summary
                </h3>

                <ul className="space-y-4 mb-5">
                  {MOCK_ITEMS.map((item) => (
                    <li key={item.id} className="flex gap-3 items-start">
                      <div className="relative flex-shrink-0">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-16 h-16 object-cover"
                        />
                        <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-taupe text-white text-[10px] font-inter rounded-full flex items-center justify-center">
                          1
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-playfair text-sm text-charcoal leading-snug">
                          {item.title}
                        </p>
                        <p className="font-inter text-xs text-taupe/60 mt-0.5">
                          {categoryLabels[item.category] ?? item.category}
                        </p>
                      </div>
                      <span className="font-inter text-sm text-charcoal whitespace-nowrap">
                        ${item.price.toLocaleString()}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-blush/30 pt-4 space-y-2">
                  <div className="flex justify-between font-inter text-sm text-taupe">
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-inter text-sm text-taupe">
                    <span>Shipping</span>
                    <span className="text-gold">Free</span>
                  </div>
                  <div className="flex justify-between font-playfair text-lg text-charcoal pt-2 border-t border-blush/30">
                    <span>Total</span>
                    <span>${total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-2 text-taupe/60">
                  <PackageIcon className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <p className="font-inter text-xs leading-relaxed">
                    Free worldwide shipping. Arrives in 5–10 business days,
                    carefully packaged and insured.
                  </p>
                </div>
              </div>
            </div>
          </div> /* ── CONFIRMATION ── */
        ) : (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="max-w-2xl mx-auto text-center py-16"
          >
            <motion.div
              initial={{
                scale: 0.5,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircleIcon className="w-8 h-8 text-gold" />
            </motion.div>

            <p className="font-inter text-xs tracking-[0.25em] uppercase text-gold mb-3">
              Order Confirmed
            </p>
            <h1 className="font-playfair text-3xl md:text-4xl text-charcoal mb-4">
              Thank you, {shipping.firstName || "dear collector"}.
            </h1>
            <p className="font-inter text-base text-taupe leading-relaxed mb-2">
              Your order{" "}
              <span className="text-charcoal font-medium">{orderNumber}</span>{" "}
              has been received.
            </p>
            <p className="font-inter text-sm text-taupe/70 leading-relaxed mb-10">
              A confirmation has been sent to{" "}
              <span className="text-charcoal">
                {shipping.email || "your email"}
              </span>
              . Each piece is carefully packaged by hand and will arrive within
              5–10 business days.
            </p>

            {/* Items recap */}
            <div className="bg-white/60 border border-blush/30 p-6 mb-10 text-left">
              <h3 className="font-playfair text-base text-charcoal mb-4">
                Your Order
              </h3>
              <ul className="space-y-3">
                {MOCK_ITEMS.map((item) => (
                  <li key={item.id} className="flex items-center gap-3">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-12 h-12 object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-playfair text-sm text-charcoal">
                        {item.title}
                      </p>
                      <p className="font-inter text-xs text-taupe/60">
                        {categoryLabels[item.category]}
                      </p>
                    </div>
                    <span className="font-inter text-sm text-gold">
                      ${item.price.toLocaleString()}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-blush/30 mt-4 pt-4 flex justify-between">
                <span className="font-inter text-sm text-taupe">
                  Total paid
                </span>
                <span className="font-playfair text-lg text-charcoal">
                  ${total.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate("/gallery")}
              >
                Continue Browsing
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate("/")}
              >
                Back to Home
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
