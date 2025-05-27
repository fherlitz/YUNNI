'use client';

import Link from 'next/link';

// Imprint & Privacy page component
export default function ImprintPrivacy() {
  return (
    <div className="min-h-screen bg-[var(--white)] text-[var(--primary-color)]">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl mb-8">Imprint & Privacy</h1>
        
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl mb-4">Imprint</h2>
            <p className="mb-4">
              YUNNI
              <br />
              Music Mode Agency
              <br />
              Email: jason@musicmodeagency.com
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl mb-4">Privacy Policy</h2>
            <p className="mb-4">
              This website does not collect any personal data. We use YouTube embeds for video content,
              which may collect data according to YouTube's privacy policy.
            </p>
          </section>

          <Link
            href="/"
            className="inline-block px-8 py-2 text-xl tracking-wider transition-all duration-300 border-2 border-black rounded-full hover:bg-black hover:text-white"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 