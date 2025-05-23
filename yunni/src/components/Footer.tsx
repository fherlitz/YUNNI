import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-4 lg:mb-0">
            <div className="flex space-x-6">
              <a 
                href="https://www.instagram.com/yunni_music/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a 
                href="https://www.tiktok.com/@yunnimusic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <i className="fab fa-tiktok text-2xl"></i>
              </a>
              <a 
                href="https://open.spotify.com/artist/6YhZhe9BvIMt8qg1VnWrL4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <i className="fab fa-spotify text-2xl"></i>
              </a>
              <a 
                href="https://www.youtube.com/@yunnimusic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <i className="fab fa-youtube text-2xl"></i>
              </a>
            </div>
          </div>
          <div>
            <Link 
              href="/imprint-privacy" 
              className="text-white no-underline hover:text-gray-300 transition-colors"
            >
              Imprint & Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 