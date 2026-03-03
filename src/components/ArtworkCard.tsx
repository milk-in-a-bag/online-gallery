import { motion } from "framer-motion";
import { EyeIcon } from "lucide-react";
import type { Artwork } from "../data/artworks";
interface ArtworkCardProps {
  readonly artwork: Artwork;
  readonly onClick: (artwork: Artwork) => void;
}
const categoryLabels: Record<string, string> = {
  paintings: "Painting",
  prints: "Print",
  digital: "Digital Art",
  sculptures: "Sculpture",
};
export function ArtworkCard({ artwork, onClick }: ArtworkCardProps) {
  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 16,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 16,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="group cursor-pointer"
      onClick={() => onClick(artwork)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(artwork)}
      aria-label={`View ${artwork.title}, ${categoryLabels[artwork.category]}, $${artwork.price}`}
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-blush/20">
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-400 ease-out flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75 transform translate-y-2 group-hover:translate-y-0">
            <div className="flex items-center gap-2 bg-white/95 text-charcoal px-4 py-2.5 text-xs font-inter tracking-widest uppercase">
              <EyeIcon className="w-3.5 h-3.5" />
              Quick View
            </div>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4 pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-playfair text-base text-charcoal group-hover:text-gold transition-colors duration-300 truncate">
              {artwork.title}
            </h3>
            <span className="font-inter text-xs text-taupe/70 tracking-wide uppercase mt-0.5 block">
              {categoryLabels[artwork.category]}
            </span>
          </div>
          <span className="font-inter text-sm font-medium text-gold whitespace-nowrap">
            ${artwork.price.toLocaleString()}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
