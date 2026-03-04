import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../components/Button";
import { ArtworkCard } from "../components/ArtworkCard";
import { getFeaturedArtworks, type Artwork } from "../data/artworks";
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
export function HomePage() {
  const navigate = useNavigate();
  const featuredArtworks = getFeaturedArtworks();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const handleArtworkClick = (artwork: Artwork) => {
    navigate(`/artwork/${artwork.slug}`);
  };
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };
  return (
    <main className="w-full bg-cream">
      {/* ── HERO ── */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{
            scale: 1.08,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1.8,
            ease: "easeOut",
          }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1600"
            alt="Abstract painting by Elara Voss"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/40" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="font-inter text-xs tracking-[0.3em] uppercase text-white/70 mb-6"
          >
            Original Art & Limited Editions
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.9,
              delay: 0.5,
            }}
            className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6"
          >
            Elara Voss
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.9,
              delay: 0.75,
            }}
            className="font-playfair italic text-xl md:text-2xl text-white/85 mb-10"
          >
            Art that speaks before words do.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.9,
              delay: 1.0,
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate("/gallery")}
            >
              Shop Collection
            </Button>
            <Button
              variant="white-outline"
              size="lg"
              onClick={() => navigate("/gallery")}
            >
              View Gallery
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.8,
            duration: 0.6,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-inter text-[10px] tracking-[0.25em] uppercase text-white/50">
            Scroll
          </span>
          <motion.div
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: "easeInOut",
            }}
            className="w-px h-8 bg-white/30"
          />
        </motion.div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800"
                alt="Elara Voss, artist"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame offset */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-10" />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >
            <p className="font-inter text-xs tracking-[0.25em] uppercase text-gold mb-4">
              About the Artist
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-6">
              Where Emotion
              <br />
              Meets Canvas
            </h2>
            <p className="font-inter text-base text-taupe leading-relaxed mb-4">
              Elara Voss is a contemporary painter and mixed-media artist based
              in the south of France. Her work explores the space between
              feeling and form — the moments when an emotion becomes too large
              for words and must find another way out.
            </p>
            <p className="font-inter text-base text-taupe leading-relaxed mb-4">
              Trained at the École des Beaux-Arts in Lyon, she has spent the
              past decade developing a practice rooted in intuition, texture,
              and the quiet power of restraint. Her studio overlooks an old
              olive grove, and the light there — warm, golden, unhurried — finds
              its way into everything she makes.
            </p>
            <p className="font-inter text-base text-taupe leading-relaxed mb-8">
              Each piece begins not with a sketch, but with a feeling. A memory.
              A conversation overheard in a café. The work is finished when it
              tells the truth.
            </p>
            <button
              onClick={() => navigate("/about")}
              className="group inline-flex items-center gap-2 font-inter text-sm text-gold hover:text-taupe transition-colors duration-300"
            >
              Meet Elara
              <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED ARTWORKS ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24 md:pb-32">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-60px",
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-14"
        >
          <p className="font-inter text-xs tracking-[0.25em] uppercase text-gold mb-3">
            Curated Selection
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-charcoal mb-4">
            Featured Works
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-blush" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="h-px w-16 bg-blush" />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
          {featuredArtworks.map((artwork, i) => (
            <motion.div
              key={artwork.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: "-40px",
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
            >
              <ArtworkCard artwork={artwork} onClick={handleArtworkClick} />
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="text-center mt-12"
        >
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigate("/gallery")}
          >
            View All Works
          </Button>
        </motion.div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-blush/15 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            className="text-center mb-14"
          >
            <p className="font-inter text-xs tracking-[0.25em] uppercase text-gold mb-3">
              Collector Stories
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-charcoal">
              Words from Collectors
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0,
              }}
              className="bg-white p-8 relative"
            >
              <span className="font-playfair text-7xl text-gold/20 absolute top-4 left-6 leading-none select-none">
                "
              </span>
              <blockquote className="font-playfair italic text-lg text-charcoal leading-relaxed mb-6 relative z-10 pt-4">
                Golden Reverie has completely transformed my living room. Every
                time I look at it, I notice something new. It's not just art —
                it's a presence.
              </blockquote>
              <div>
                <p className="font-inter text-sm font-medium text-charcoal">
                  Margot Delacroix
                </p>
                <p className="font-inter text-xs text-taupe/70">
                  Paris, France
                </p>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="bg-white p-8 relative"
            >
              <span className="font-playfair text-7xl text-gold/20 absolute top-4 left-6 leading-none select-none">
                "
              </span>
              <blockquote className="font-playfair italic text-lg text-charcoal leading-relaxed mb-6 relative z-10 pt-4">
                I commissioned a piece for my mother's birthday and Elara
                captured something I couldn't even articulate. She has a rare
                gift for translating feeling into form.
              </blockquote>
              <div>
                <p className="font-inter text-sm font-medium text-charcoal">
                  Isabelle Chen
                </p>
                <p className="font-inter text-xs text-taupe/70">London, UK</p>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="bg-white p-8 relative"
            >
              <span className="font-playfair text-7xl text-gold/20 absolute top-4 left-6 leading-none select-none">
                "
              </span>
              <blockquote className="font-playfair italic text-lg text-charcoal leading-relaxed mb-6 relative z-10 pt-4">
                The packaging alone told me this was something special. The
                print arrived beautifully wrapped, with a handwritten note.
                Elara's attention to every detail is extraordinary.
              </blockquote>
              <div>
                <p className="font-inter text-sm font-medium text-charcoal">
                  Nadia Okonkwo
                </p>
                <p className="font-inter text-xs text-taupe/70">
                  New York, USA
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="bg-blush/25 py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 text-center">
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
          >
            <p className="font-inter text-xs tracking-[0.25em] uppercase text-gold mb-4">
              Studio Updates
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-charcoal mb-4">
              Join the Studio
            </h2>
            <p className="font-inter text-base text-taupe leading-relaxed mb-8">
              Be the first to see new works, receive exclusive previews, and
              follow the creative process from first brushstroke to finished
              piece.
            </p>

            {subscribed ? (
              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="font-playfair italic text-lg text-gold"
              >
                Welcome to the studio. ✦
              </motion.p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 font-inter text-sm px-5 py-3.5 bg-white border border-blush/60 text-charcoal placeholder-taupe/40 focus:outline-none focus:border-gold transition-colors duration-300"
                />
                <Button type="submit" variant="primary" size="md">
                  Subscribe
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
