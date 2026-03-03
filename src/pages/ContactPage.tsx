import React, { useState } from "react";
import { motion } from "framer-motion";
import { MailIcon, InstagramIcon, TwitterIcon, SendIcon } from "lucide-react";
import { Button } from "../components/Button";
type FormType = "general" | "commission";
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
interface CommissionFormData {
  name: string;
  email: string;
  size: string;
  style: string;
  budget: string;
  timeline: string;
  description: string;
}
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}
export function ContactPage() {
  const [activeForm, setActiveForm] = useState<FormType>("general");
  const [contactSent, setContactSent] = useState(false);
  const [commissionSent, setCommissionSent] = useState(false);
  const [contactForm, setContactForm] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [commissionForm, setCommissionForm] = useState<CommissionFormData>({
    name: "",
    email: "",
    size: "",
    style: "",
    budget: "",
    timeline: "",
    description: "",
  });
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
  };
  const handleCommissionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCommissionSent(true);
  };
  const inputClass =
    "w-full font-inter text-sm px-4 py-3 bg-white border border-blush/40 text-charcoal placeholder-taupe/40 focus:outline-none focus:border-gold transition-colors duration-300";
  const labelClass =
    "block font-inter text-xs tracking-widest uppercase text-taupe/70 mb-1.5";
  return (
    <main className="w-full bg-cream min-h-screen">
      {/* Header */}
      <div className="bg-blush/10 pt-32 pb-16 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <p className="font-inter text-xs tracking-[0.25em] uppercase text-gold mb-3">
            Get in Touch
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-charcoal mb-4">
            Let's Connect
          </h1>
          <p className="font-inter text-base text-taupe max-w-md mx-auto">
            Whether you have a question about a piece, want to discuss a
            commission, or simply want to say hello — I'd love to hear from you.
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="lg:col-span-1"
          >
            <h2 className="font-playfair text-2xl text-charcoal mb-6">
              Studio Details
            </h2>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-3">
                <MailIcon className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-inter text-xs tracking-widest uppercase text-taupe/60 mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:hello@elaravoss.com"
                    className="font-inter text-sm text-charcoal hover:text-gold transition-colors duration-300"
                  >
                    hello@elaravoss.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <p className="font-inter text-xs tracking-widest uppercase text-taupe/60 mb-4">
                Follow Along
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center gap-2 text-taupe hover:text-gold transition-colors duration-300 group"
                >
                  <InstagramIcon className="w-5 h-5" />
                  <span className="font-inter text-sm group-hover:text-gold transition-colors duration-300">
                    @elaravoss
                  </span>
                </a>
              </div>
              <div className="flex items-center gap-4 mt-3">
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  className="flex items-center gap-2 text-taupe hover:text-gold transition-colors duration-300 group"
                >
                  <PinterestIcon className="w-5 h-5" />
                  <span className="font-inter text-sm group-hover:text-gold transition-colors duration-300">
                    elaravoss
                  </span>
                </a>
              </div>
              <div className="flex items-center gap-4 mt-3">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="flex items-center gap-2 text-taupe hover:text-gold transition-colors duration-300 group"
                >
                  <TwitterIcon className="w-5 h-5" />
                  <span className="font-inter text-sm group-hover:text-gold transition-colors duration-300">
                    @elaravoss
                  </span>
                </a>
              </div>
            </div>

            <div className="bg-blush/15 p-6">
              <p className="font-playfair italic text-base text-charcoal leading-relaxed">
                "Every conversation about art is itself a kind of art. I read
                every message personally."
              </p>
              <p className="font-inter text-xs text-taupe/60 mt-3">— Elara</p>
            </div>
          </motion.div>

          {/* Forms */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="lg:col-span-2"
          >
            {/* Form Toggle */}
            <div className="flex gap-0 mb-8 border-b border-blush/40">
              <button
                onClick={() => setActiveForm("general")}
                className={`font-inter text-sm tracking-widest uppercase pb-3 mr-8 relative transition-colors duration-300 ${activeForm === "general" ? "text-gold" : "text-taupe hover:text-charcoal"}`}
              >
                General Enquiry
                {activeForm === "general" && (
                  <motion.div
                    layoutId="form-tab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveForm("commission")}
                className={`font-inter text-sm tracking-widest uppercase pb-3 relative transition-colors duration-300 ${activeForm === "commission" ? "text-gold" : "text-taupe hover:text-charcoal"}`}
              >
                Commission Request
                {activeForm === "commission" && (
                  <motion.div
                    layoutId="form-tab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </button>
            </div>

            {/* General Contact Form */}
            {activeForm === "general" && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                {contactSent ? (
                  <div className="text-center py-16">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <SendIcon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-playfair text-2xl text-charcoal mb-2">
                      Message Sent
                    </h3>
                    <p className="font-inter text-sm text-taupe">
                      Thank you for reaching out. I'll be in touch within 2–3
                      business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className={labelClass}>
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              name: e.target.value,
                            })
                          }
                          placeholder="Your name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClass}>
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              email: e.target.value,
                            })
                          }
                          placeholder="your@email.com"
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className={labelClass}>
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        required
                        value={contactForm.subject}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            subject: e.target.value,
                          })
                        }
                        placeholder="What's on your mind?"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className={labelClass}>
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        value={contactForm.message}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            message: e.target.value,
                          })
                        }
                        placeholder="Tell me more..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                    <Button type="submit" variant="primary" size="lg">
                      Send Message
                    </Button>
                  </form>
                )}
              </motion.div>
            )}

            {/* Commission Form */}
            {activeForm === "commission" && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                {commissionSent ? (
                  <div className="text-center py-16">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <SendIcon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-playfair text-2xl text-charcoal mb-2">
                      Commission Request Received
                    </h3>
                    <p className="font-inter text-sm text-taupe">
                      I'm excited to learn more about your vision. I'll reach
                      out within 5 business days to discuss the details.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleCommissionSubmit} className="space-y-5">
                    <div className="bg-blush/10 px-5 py-4 mb-2">
                      <p className="font-inter text-sm text-taupe leading-relaxed">
                        I take a limited number of commissions each year to
                        ensure each piece receives the attention it deserves.
                        Please share as much detail as you'd like.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="c-name" className={labelClass}>
                          Name
                        </label>
                        <input
                          id="c-name"
                          type="text"
                          required
                          value={commissionForm.name}
                          onChange={(e) =>
                            setCommissionForm({
                              ...commissionForm,
                              name: e.target.value,
                            })
                          }
                          placeholder="Your name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="c-email" className={labelClass}>
                          Email
                        </label>
                        <input
                          id="c-email"
                          type="email"
                          required
                          value={commissionForm.email}
                          onChange={(e) =>
                            setCommissionForm({
                              ...commissionForm,
                              email: e.target.value,
                            })
                          }
                          placeholder="your@email.com"
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="c-size" className={labelClass}>
                          Desired Size
                        </label>
                        <input
                          id="c-size"
                          type="text"
                          value={commissionForm.size}
                          onChange={(e) =>
                            setCommissionForm({
                              ...commissionForm,
                              size: e.target.value,
                            })
                          }
                          placeholder='e.g. 24" × 36"'
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="c-budget" className={labelClass}>
                          Budget Range
                        </label>
                        <select
                          id="c-budget"
                          value={commissionForm.budget}
                          onChange={(e) =>
                            setCommissionForm({
                              ...commissionForm,
                              budget: e.target.value,
                            })
                          }
                          className={`${inputClass} appearance-none`}
                        >
                          <option value="">Select a range</option>
                          <option value="500-1000">$500 – $1,000</option>
                          <option value="1000-2500">$1,000 – $2,500</option>
                          <option value="2500-5000">$2,500 – $5,000</option>
                          <option value="5000+">$5,000+</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="c-style" className={labelClass}>
                          Preferred Style
                        </label>
                        <input
                          id="c-style"
                          type="text"
                          value={commissionForm.style}
                          onChange={(e) =>
                            setCommissionForm({
                              ...commissionForm,
                              style: e.target.value,
                            })
                          }
                          placeholder="Abstract, figurative, botanical..."
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="c-timeline" className={labelClass}>
                          Timeline
                        </label>
                        <select
                          id="c-timeline"
                          value={commissionForm.timeline}
                          onChange={(e) =>
                            setCommissionForm({
                              ...commissionForm,
                              timeline: e.target.value,
                            })
                          }
                          className={`${inputClass} appearance-none`}
                        >
                          <option value="">When do you need it?</option>
                          <option value="flexible">Flexible</option>
                          <option value="3months">Within 3 months</option>
                          <option value="6months">Within 6 months</option>
                          <option value="1year">Within a year</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="c-description" className={labelClass}>
                        Vision & Inspiration
                      </label>
                      <textarea
                        id="c-description"
                        required
                        rows={6}
                        value={commissionForm.description}
                        onChange={(e) =>
                          setCommissionForm({
                            ...commissionForm,
                            description: e.target.value,
                          })
                        }
                        placeholder="Describe the piece you have in mind — the feeling, the colors, the story you want it to tell..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                    <Button type="submit" variant="primary" size="lg">
                      Submit Commission Request
                    </Button>
                  </form>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
