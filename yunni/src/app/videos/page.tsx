'use client';

// Videos section component
export default function Videos() {
  // Array of video items
  const videos = [
    {
      id: 'ohBLZYKrFk4',
      title: 'YUNNI - SOMEDAY (Official Music Video)'
    },
    {
      id: '-tehwVGul2k',
      title: 'YUNNI - OLDER PEOPLE (Official Music Video)'
    },
    {
      id: 'e5Tbj91EiEo',
      title: 'YUNNI - KIDDING YOURSELF (Official Music Video)'
    },
    {
      id: '_qsqdjfSx2Q',
      title: 'YUNNI - MOCHAROCKA (Official Music Video)'
    }
  ];

  return (
    <section id="videos" className="content-page">
      <div className="container mx-auto px-4 py-20">
        <h2>VIDEOS</h2>
        <div className="max-w-4xl mx-auto">
          {videos.map((video, index) => (
            <div key={index} className="mb-8">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}?si=dYI71TzB_0YHh9X7`}
                  title={video.title}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 