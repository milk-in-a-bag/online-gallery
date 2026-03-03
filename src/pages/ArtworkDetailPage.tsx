import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRightIcon,
  HeartIcon,
  ShoppingBagIcon,
  ZoomInIcon,
} from "lucide-react";
import { Button } from "../components/Button";
import { ArtworkCard } from "../components/ArtworkCard";
import {
  getArtworkBySlug,
  getRelatedArtworks,
  Artwork,
} from "../data/artworks";
const categoryLabels: Record<string, string> = {
  paintings: "Painting",
  prints: "Print",
  digital: "Digital Art",
  sculptures: "Sculpture",
};
export function ArtworkDetailPage() {
  const { slug } = useParams<{
    slug: string;
  }>();
  const navigate = useNavigate();
  const [addedToCart, setAddedToCart] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const artwork = slug ? getArtworkBySlug(slug) : undefined;
  if (!artwork) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-playfair text-3xl text-charcoal mb-4">
            Artwork not found
          </h1>
          <Button variant="secondary" onClick={() => navigate("/gallery")}>
            Back to Gallery
          </Button>
        </div>
      </div>
    );
  }
  const related = getRelatedArtworks(artwork);
  const handleRelatedClick = (a: Artwork) => {
    navigate(`/artwork/${a.slug}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main className="w-full bg-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-6">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 font-inter text-xs text-taupe/60 tracking-wide"
        >
          <Link
            to="/"
            className="hover:text-gold transition-colors duration-200"
          >
            Home
          </Link>
          <ChevronRightIcon className="w-3 h-3" />
          <Link
            to="/gallery"
            className="hover:text-gold transition-colors duration-200"
          >
            Gallery
          </Link>
          <ChevronRightIcon className="w-3 h-3" />
          <span className="text-taupe">{artwork.title}</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative"
          >
            <div
              className={`relative overflow-hidden cursor-zoom-in ${zoomed ? "cursor-zoom-out" : ""}`}
              onClick={() => setZoomed(!zoomed)}
              role="button"
              aria-label={zoomed ? "Zoom out" : "Zoom in"}
            >
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className={`w-full object-cover transition-transform duration-700 ease-out ${zoomed ? "scale-150" : "hover:scale-105"}`}
                style={{
                  aspectRatio: "4/5",
                }}
              />
              {!zoomed && (
                <div className="absolute bottom-4 right-4 bg-white/90 p-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <ZoomInIcon className="w-4 h-4 text-charcoal" />
                </div>
              )}
            </div>
            <p className="font-inter text-xs text-taupe/50 text-center mt-3 tracking-wide">
              Click image to zoom
            </p>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="flex flex-col"
          >
            {/* Category */}
            <span className="font-inter text-xs tracking-[0.25em] uppercase text-gold mb-3">
              {categoryLabels[artwork.category]}
            </span>

            {/* Title */}
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-4">
              {artwork.title}
            </h1>

            {/* Price */}
            <p className="font-playfair text-2xl text-gold mb-6">
              ${artwork.price.toLocaleString()}
            </p>

            {/* Divider */}
            <div className="h-px bg-blush/40 mb-6" />

            {/* Specs */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="font-inter text-xs tracking-widest uppercase text-taupe/60 mb-1">
                  Size
                </p>
                <p className="font-inter text-sm text-charcoal">
                  {artwork.size}
                </p>
              </div>
              <div>
                <p className="font-inter text-xs tracking-widest uppercase text-taupe/60 mb-1">
                  Materials
                </p>
                <p className="font-inter text-sm text-charcoal">
                  {artwork.materials}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="font-inter text-base text-taupe leading-relaxed mb-8">
              {artwork.description}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => setAddedToCart(true)}
                className="flex-1"
              >
                <ShoppingBagIcon className="w-4 h-4" />
                {addedToCart ? "Added to Cart ✓" : "Add to Cart"}
              </Button>
              <button
                onClick={() => setWishlisted(!wishlisted)}
                aria-label={
                  wishlisted ? "Remove from wishlist" : "Save to wishlist"
                }
                className={`flex items-center justify-center gap-2 px-6 py-4 border transition-all duration-300 font-inter text-sm tracking-widest uppercase ${wishlisted ? "border-blush bg-blush/20 text-taupe" : "border-blush/50 text-taupe hover:border-blush hover:bg-blush/10"}`}
              >
                <HeartIcon
                  className={`w-4 h-4 ${wishlisted ? "fill-blush text-blush" : ""}`}
                />
                <span className="hidden sm:inline">
                  {wishlisted ? "Saved" : "Wishlist"}
                </span>
              </button>
            </div>

            {/* Shipping note */}
            <p className="font-inter text-xs text-taupe/60 leading-relaxed">
              Free worldwide shipping. Each piece is carefully packaged and
              insured. Arrives in 5–10 business days.
            </p>
          </motion.div>
        </div>

        {/* Story Behind the Piece */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 bg-blush/40" />
            <p className="font-inter text-xs tracking-[0.25em] uppercase text-gold whitespace-nowrap">
              The Story
            </p>
            <div className="h-px flex-1 bg-blush/40" />
          </div>
          <h2 className="font-playfair text-2xl md:text-3xl text-charcoal mb-6">
            The Story Behind This Piece
          </h2>
          <p className="font-playfair italic text-lg md:text-xl text-taupe leading-relaxed">
            "{artwork.inspiration}"
          </p>
          <p className="font-inter text-sm text-taupe/60 mt-4">— Elara Voss</p>
        </motion.div>

        {/* Related Artworks */}
        {related.length > 0 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mt-20"
          >
            <div className="text-center mb-10">
              <p className="font-inter text-xs tracking-[0.25em] uppercase text-gold mb-3">
                You May Also Like
              </p>
              <h2 className="font-playfair text-2xl md:text-3xl text-charcoal">
                Related Works
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {related.map((a) => (
                <ArtworkCard
                  key={a.id}
                  artwork={a}
                  onClick={handleRelatedClick}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
