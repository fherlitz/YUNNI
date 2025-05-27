'use client';

import Link from 'next/link';

// Footer component
export default function Footer() {
  return (
    <footer className="w-full py-5 bg-[var(--white)] text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/yunni_music/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.tiktok.com/@yunnimusic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors duration-300"
            >
              <i className="fab fa-tiktok"></i>
            </a>
            <a
              href="https://open.spotify.com/artist/6YhZhe9BvIMt8qg1VnWrL4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors duration-300"
            >
              <i className="fab fa-spotify"></i>
            </a>
            <a
              href="https://www.youtube.com/@yunnimusic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors duration-300"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <Link
            href="/imprint-privacy"
            className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors duration-300"
          >
            Imprint & Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
} 