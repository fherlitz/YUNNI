export default function Videos() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-gasoek mb-8">Videos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add your video content here */}
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Music Videos</h2>
              <p className="text-gray-400">Videos will be available soon!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 