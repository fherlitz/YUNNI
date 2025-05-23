'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: '/images/slide1.jpg', alt: 'YUNNI Band Image 1' },
    { src: '/images/slide2.jpg', alt: 'YUNNI Band Image 2' },
    { src: '/images/slide3.jpg', alt: 'YUNNI Band Image 3' },
    { src: '/images/slide4.jpg', alt: 'YUNNI Band Image 4' },
    { src: '/images/slide5.jpg', alt: 'YUNNI Band Image 5' },
    { src: '/images/slide6.jpg', alt: 'YUNNI Band Image 6' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[calc(100vh-4rem)]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            width={1920}
            height={1080}
            sizes="100vw"
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <ImageSlider />
    </main>
  );
}
