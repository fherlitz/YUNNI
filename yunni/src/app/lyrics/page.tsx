export default function Lyrics() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-gasoek mb-8">Lyrics</h1>
        <div className="grid grid-cols-1 gap-8">
          {/* Add your lyrics content here */}
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Song Title</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-400">
                  Lyrics will be available soon!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 