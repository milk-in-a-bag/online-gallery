import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArtworkCard } from "../components/ArtworkCard";
import { artworks, Artwork, ArtworkCategory } from "../data/artworks";
type FilterOption = "all" | ArtworkCategory;
const filters: {
  label: string;
  value: FilterOption;
}[] = [
  {
    label: "All Works",
    value: "all",
  },
  {
    label: "Paintings",
    value: "paintings",
  },
  {
    label: "Prints",
    value: "prints",
  },
  {
    label: "Digital Art",
    value: "digital",
  },
  {
    label: "Sculptures",
    value: "sculptures",
  },
];
export function ShopPage() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");
  const navigate = useNavigate();
  const filtered =
    activeFilter === "all"
      ? artworks
      : artworks.filter((a) => a.category === activeFilter);
  const handleArtworkClick = (artwork: Artwork) => {
    navigate(`/artwork/${artwork.slug}`);
  };
  return (
    <main className="w-full bg-cream min-h-screen">
      {/* Page Header */}
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
            Original Art & Editions
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-charcoal mb-4">
            The Collection
          </h1>
          <p className="font-inter text-base text-taupe max-w-md mx-auto">
            Each piece is made with intention — a small act of beauty in a
            complicated world.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Filter Tabs */}
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
            duration: 0.5,
            delay: 0.2,
          }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-6 mb-12"
          role="tablist"
          aria-label="Filter artworks by category"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              role="tab"
              aria-selected={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`relative font-inter text-sm tracking-widest uppercase pb-2 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${activeFilter === filter.value ? "text-gold" : "text-taupe hover:text-charcoal"}`}
            >
              {filter.label}
              {activeFilter === filter.value && (
                <motion.div
                  layoutId="filter-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Count */}
        <p className="font-inter text-xs text-taupe/60 tracking-wide mb-8 text-center">
          {filtered.length} {filtered.length === 1 ? "work" : "works"} available
        </p>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((artwork) => (
              <ArtworkCard
                key={artwork.id}
                artwork={artwork}
                onClick={handleArtworkClick}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="text-center py-24"
          >
            <p className="font-playfair italic text-xl text-taupe">
              No works in this category yet.
            </p>
            <p className="font-inter text-sm text-taupe/60 mt-2">
              Check back soon — new pieces are always in progress.
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
