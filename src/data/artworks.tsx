export type ArtworkCategory = "paintings" | "prints" | "digital" | "sculptures";

export interface Artwork {
  id: string;
  slug: string;
  title: string;
  category: ArtworkCategory;
  price: number;
  size: string;
  materials: string;
  description: string;
  inspiration: string;
  imageUrl: string;
  featured: boolean;
}

export const artworks: Artwork[] = [
  {
    id: "1",
    slug: "golden-reverie",
    title: "Golden Reverie",
    category: "paintings",
    price: 1200,
    size: '24" × 36"',
    materials: "Oil on linen canvas",
    description:
      "A luminous exploration of warmth and memory, this piece captures the fleeting quality of golden afternoon light as it dissolves into shadow. Layers of translucent oil glazes build a depth that seems to glow from within.",
    inspiration:
      "I painted this during a particularly quiet autumn afternoon in my studio. The light came through the window at such an angle that everything turned to gold — my hands, the canvas, the dust in the air. I wanted to hold that moment forever.",
    imageUrl:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800",
    featured: true,
  },
  {
    id: "2",
    slug: "bloom-and-silence",
    title: "Bloom & Silence",
    category: "paintings",
    price: 980,
    size: '20" × 20"',
    materials: "Acrylic and gold leaf on canvas",
    description:
      "Soft botanical forms emerge from a warm, hazy background. The gold leaf catches light differently throughout the day, making this piece feel alive and ever-changing.",
    inspiration:
      "My grandmother had a garden that smelled of roses and earth. This painting is my letter to her — to the quiet mornings we spent together before the world woke up.",
    imageUrl:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800",
    featured: true,
  },
  {
    id: "3",
    slug: "the-tender-hour",
    title: "The Tender Hour",
    category: "paintings",
    price: 1450,
    size: '30" × 40"',
    materials: "Oil on canvas",
    description:
      "A large-scale meditation on vulnerability and strength. The figure at the center is both fragile and monumental — a contradiction that feels deeply human.",
    inspiration:
      "This piece came from a period of personal transformation. I was learning to sit with discomfort, to let it be part of me rather than something to escape. The painting became a mirror.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    featured: true,
  },
  {
    id: "4",
    slug: "soft-geometry",
    title: "Soft Geometry",
    category: "prints",
    price: 320,
    size: '18" × 24"',
    materials: "Archival giclée print on cotton rag",
    description:
      "A limited edition print exploring the tension between organic form and geometric structure. Printed on museum-quality cotton rag paper with archival inks.",
    inspiration:
      "I am fascinated by the geometry hidden in nature — the spirals in shells, the angles of crystals. This print is my attempt to make that hidden order visible.",
    imageUrl:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800",
    featured: true,
  },
  {
    id: "5",
    slug: "whisper-of-dusk",
    title: "Whisper of Dusk",
    category: "paintings",
    price: 1100,
    size: '24" × 30"',
    materials: "Mixed media on canvas",
    description:
      "The transition between day and night has always felt sacred to me. This painting captures that liminal space where colors bleed into one another and the world holds its breath.",
    inspiration:
      "I painted this in one sitting, starting at sunset and finishing by lamplight. The shift in my own perception as the light changed became part of the work itself.",
    imageUrl: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800",
    featured: false,
  },
  {
    id: "6",
    slug: "terra-memoria",
    title: "Terra Memoria",
    category: "sculptures",
    price: 2200,
    size: '12" × 8" × 8"',
    materials: "Hand-formed ceramic with gold glaze",
    description:
      "A sculptural vessel that references ancient forms while remaining entirely contemporary. The gold glaze pools in the crevices, suggesting age and preciousness.",
    inspiration:
      "I spent a summer in the south of France, visiting ancient sites. The fragments of pottery I saw — broken but still beautiful — stayed with me. This piece is my response to that encounter with time.",
    imageUrl: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800",
    featured: false,
  },
  {
    id: "7",
    slug: "chromatic-dream",
    title: "Chromatic Dream",
    category: "digital",
    price: 180,
    size: 'Digital file, print up to 24" × 36"',
    materials: "Digital art, high-resolution file",
    description:
      "A vibrant digital composition exploring color relationships and emotional resonance. Available as a high-resolution digital download or printed on demand.",
    inspiration:
      "I created this during a period of intense joy — a feeling I wanted to translate directly into color and movement without the mediation of physical materials.",
    imageUrl: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800",
    featured: false,
  },
  {
    id: "8",
    slug: "the-quiet-room",
    title: "The Quiet Room",
    category: "prints",
    price: 280,
    size: '16" × 20"',
    materials: "Archival giclée print on fine art paper",
    description:
      "An intimate interior scene rendered in soft, muted tones. The empty chair, the window light — this print speaks to solitude as a form of presence.",
    inspiration:
      "My studio is my sanctuary. This print is a portrait of that space — not as it looks, but as it feels on a quiet morning when the world is still.",
    imageUrl:
      "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=800",
    featured: false,
  },
  {
    id: "9",
    slug: "rose-and-ruin",
    title: "Rose & Ruin",
    category: "paintings",
    price: 890,
    size: '16" × 20"',
    materials: "Watercolor and ink on paper",
    description:
      "Delicate watercolor blooms emerge from inky darkness. The contrast between the fragile petals and the deep background creates a sense of beauty persisting against all odds.",
    inspiration:
      "Beauty and decay are not opposites — they are partners. This painting explores that relationship through the most classic of subjects: the rose.",
    imageUrl:
      "https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=800",
    featured: false,
  },
  {
    id: "10",
    slug: "vessel-of-light",
    title: "Vessel of Light",
    category: "sculptures",
    price: 1800,
    size: '10" × 6" × 6"',
    materials: "Blown glass with gold leaf inclusions",
    description:
      "A hand-blown glass vessel with suspended gold leaf that catches and refracts light in constantly shifting patterns. Each piece is unique.",
    inspiration:
      "I collaborated with a master glassblower for this series. Watching the molten glass respond to breath and gravity felt like witnessing creation itself.",
    imageUrl:
      "https://images.unsplash.com/photo-1531913764164-f85c52e6e654?w=800",
    featured: false,
  },
  {
    id: "11",
    slug: "frequency",
    title: "Frequency",
    category: "digital",
    price: 150,
    size: 'Digital file, print up to 20" × 30"',
    materials: "Digital art, high-resolution file",
    description:
      "Abstract digital work exploring sound made visible. Undulating forms suggest music, breath, and the invisible energies that move through us.",
    inspiration:
      "I made this while listening to a piece of music that made me cry without knowing why. I wanted to see what that feeling looked like.",
    imageUrl:
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800",
    featured: false,
  },
  {
    id: "12",
    slug: "atlas-of-tenderness",
    title: "Atlas of Tenderness",
    category: "prints",
    price: 350,
    size: '20" × 28"',
    materials: "Archival giclée print, edition of 50",
    description:
      "A large-format print mapping emotional geography — the places in us that hold memory, longing, and love. Part of a limited edition series.",
    inspiration:
      "I think of emotions as places we inhabit. This print is a map of the interior landscape — not scientific, but true.",
    imageUrl: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=800",
    featured: false,
  },
];

export const getFeaturedArtworks = (): Artwork[] =>
  artworks.filter((a) => a.featured);
export const getArtworkBySlug = (slug: string): Artwork | undefined =>
  artworks.find((a) => a.slug === slug);
export const getArtworksByCategory = (category: ArtworkCategory): Artwork[] =>
  artworks.filter((a) => a.category === category);
export const getRelatedArtworks = (artwork: Artwork, limit = 3): Artwork[] =>
  artworks
    .filter((a) => a.category === artwork.category && a.id !== artwork.id)
    .slice(0, limit);
