'use client';

import Image from 'next/image';

// Releases section component
export default function Releases() {
  // Array of release items
  const releases = [
    {
      title: 'COLORIZED',
      image: '/images/cover.jpg',
      link: 'https://open.spotify.com/album/0I1BUl0E4CJbYYjMGcgdCH?si=QQftWTqDSEGx_PjIbKY_XA'
    },
    {
      title: 'SOMEDAY',
      image: '/images/Artwork_Someday.jpg',
      link: 'https://open.spotify.com/album/6EAWCnwj7JmZdrQYWsew9p?si=ymm0eV7TT6i5ub2pfxEyMQ'
    },
    {
      title: 'OLDER PEOPLE',
      image: '/images/Artwork_Older_People.jpg',
      link: 'https://open.spotify.com/album/59aXyFeJVHqoXkzzYid62l?si=d4PiaDnERJKd6rO5mzkecQ'
    },
    {
      title: 'KIDDING YOURSELF',
      image: '/images/Artwork_Kidding_Yourself.jpg',
      link: 'https://open.spotify.com/track/0BetvDGkK33ugmuF0dSaCq?si=a07a233eb42644a8'
    },
    {
      title: 'MOCHAROCKA',
      image: '/images/ARTWORK_YUNNI_MOCHAROCKA.jpg',
      link: 'https://open.spotify.com/track/45HGuBQgSRYF4VUZq0CLIr?si=573e94ae74e24918'
    },
    {
      title: 'BLACK & WHITE',
      image: '/images/BLACK&WHITE.jpg',
      link: 'https://open.spotify.com/album/1spbY6lulwGc8Ez4Qiu05E?si=q3HQxz5bRqSCV9OgUp-R4g'
    }
  ];

  return (
    <section id="releases" className="content-page">
      <div className="container mx-auto px-4 py-20">
        <h2>RELEASES</h2>
        <div className="artwork-grid">
          {releases.map((release, index) => (
            <div key={index} className="artwork-item">
              <a href={release.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={release.image}
                  alt={`${release.title} Cover Artwork`}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
              </a>
              <h3>{release.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 