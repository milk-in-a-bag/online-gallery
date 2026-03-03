import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InstagramIcon, TwitterIcon } from "lucide-react";
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
export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };
  return (
    <footer className="bg-cream border-t border-blush/30">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-playfair italic text-2xl text-charcoal mb-3">
              Elara Voss
            </h3>
            <p className="font-inter text-sm text-taupe leading-relaxed mb-6 max-w-xs">
              Art that speaks before words do. Original paintings, prints, and
              sculptures crafted with intention and heart.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-taupe hover:text-gold transition-colors duration-300"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="text-taupe hover:text-gold transition-colors duration-300"
              >
                <PinterestIcon className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-taupe hover:text-gold transition-colors duration-300"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-inter text-xs tracking-widest uppercase text-taupe mb-5">
              Explore
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                className="font-inter text-sm text-charcoal hover:text-gold transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/gallery"
                className="font-inter text-sm text-charcoal hover:text-gold transition-colors duration-300"
              >
                Gallery
              </Link>
              <Link
                to="/about"
                className="font-inter text-sm text-charcoal hover:text-gold transition-colors duration-300"
              >
                About Elara
              </Link>
              <Link
                to="/contact"
                className="font-inter text-sm text-charcoal hover:text-gold transition-colors duration-300"
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="font-inter text-sm text-charcoal hover:text-gold transition-colors duration-300"
              >
                Commission a Piece
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-inter text-xs tracking-widest uppercase text-taupe mb-5">
              Studio Notes
            </h4>
            <p className="font-inter text-sm text-taupe leading-relaxed mb-4">
              Exclusive previews, studio updates, and first access to new works.
            </p>
            {subscribed ? (
              <p className="font-inter text-sm text-gold italic">
                Thank you for joining the studio ✦
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="font-inter text-sm px-4 py-2.5 bg-white border border-blush/50 text-charcoal placeholder-taupe/50 focus:outline-none focus:border-gold transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="font-inter text-xs tracking-widest uppercase px-4 py-2.5 bg-gold text-white hover:bg-taupe transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Divider + copyright */}
      <div className="border-t border-blush/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-taupe/70">
            © 2025 Elara Voss. All rights reserved.
          </p>
          <p className="font-inter text-xs text-taupe/50 italic">
            Crafted with love & intention
          </p>
        </div>
      </div>
    </footer>
  );
}
