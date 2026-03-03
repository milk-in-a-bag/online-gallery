import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
export function AboutPage() {
  const navigate = useNavigate();
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
            The Artist
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-charcoal">
            Elara Voss
          </h1>
        </motion.div>
      </div>

      {/* Portrait + Intro */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative"
          >
            <div className="aspect-3/4 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800"
                alt="Elara Voss in her studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-blush/20 -z-10" />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl text-charcoal mb-6 leading-tight">
              Painting the Space
              <br />
              Between Feeling and Form
            </h2>
            <p className="font-inter text-base text-taupe leading-relaxed mb-4">
              I grew up in a small village in Provence, where the light is
              golden and slow and the afternoons last forever. My mother painted
              watercolors at the kitchen table. My father read poetry aloud. I
              learned early that beauty was not a luxury — it was a way of
              paying attention.
            </p>
            <p className="font-inter text-base text-taupe leading-relaxed mb-4">
              I studied fine art at the École des Beaux-Arts in Lyon, where I
              spent three years learning to see before I learned to paint. My
              professors taught me that the most important thing an artist can
              do is be honest — not technically perfect, but true.
            </p>
            <p className="font-inter text-base text-taupe leading-relaxed">
              Today I work from a studio in the south of France, surrounded by
              olive trees and the particular silence of the countryside. I paint
              every day, not because I have to, but because it is the closest I
              know how to come to saying what I mean.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-blush/10 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
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
              Artistic Philosophy
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-charcoal mb-8">
              On Making Art
            </h2>
            <blockquote className="font-playfair italic text-xl md:text-2xl text-taupe leading-relaxed mb-8">
              "I don't begin with a concept. I begin with a feeling — something
              half-remembered, half-imagined. The painting is the process of
              finding out what that feeling actually is. Sometimes I'm surprised
              by what I discover."
            </blockquote>
            <p className="font-inter text-base text-taupe leading-relaxed max-w-2xl mx-auto mb-4">
              My practice is rooted in the belief that art should do something
              to you — not just please the eye, but move something deeper. I
              work in layers, building up surfaces that hold light and shadow in
              unexpected ways.
            </p>
            <p className="font-inter text-base text-taupe leading-relaxed max-w-2xl mx-auto">
              I am drawn to the in-between: the moment before dawn, the pause
              between words, the quality of light just before a storm. These are
              the thresholds where feeling lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Studio Images */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28">
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
          className="text-center mb-12"
        >
          <p className="font-inter text-xs tracking-[0.25em] uppercase text-gold mb-3">
            Behind the Scenes
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-charcoal">
            In the Studio
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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
            className="aspect-square overflow-hidden col-span-2 md:col-span-1 row-span-2"
          >
            <img
              src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800"
              alt="Studio workspace"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
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
            className="aspect-square overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
              alt="Painting in progress"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.15,
            }}
            className="aspect-square overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800"
              alt="Art materials"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
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
            className="aspect-square overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800"
              alt="Finished artwork"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
            className="aspect-square overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800"
              alt="Studio detail"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 text-center">
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
            Ready to Begin?
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-6">
            Find a piece that speaks to you.
          </h2>
          <p className="font-inter text-base text-white/60 max-w-md mx-auto mb-8">
            Or reach out about a commission — I love collaborating on pieces
            that are deeply personal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate("/gallery")}
            >
              View the Collection
            </Button>
            <Button
              variant="white-outline"
              size="lg"
              onClick={() => navigate("/contact")}
            >
              Commission a Piece
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
