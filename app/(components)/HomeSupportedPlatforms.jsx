"use client"
import Image from 'next/image';
import { Sites } from '../utils/sites';
import { useRouter } from 'next/navigation';
import { Ellipsis } from 'lucide-react';

// New HomeSupportedPlatforms component
function HomeSupportedPlatforms() {
  const sites = Sites();
  const router = useRouter();

  // Get the first 4 items and create a link for the 5th one
  const firstFourSites = sites.slice(0, 4);

  return (
    <div className="bg-gray-900 text-gray-400 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid of Supported Platforms */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {firstFourSites.map((site, index) => (
            <div
              key={index}
              className="bg-gray-800 p-2 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105"
            >
              <Image
                src={site.logo}
                alt={`${site.name} logo`}
                width={60} // Adjusted size for smaller icons
                height={60} // Adjusted size for smaller icons
                className="border rounded-full mb-3"
                objectFit="contain"
              />
              <h3 className="text-brand-blue text-sm font-semibold text-center">
                {site.name}
              </h3>
            </div>
          ))}
          {/* More Icon for the 5th item */}
          <div
            onClick={() => router.push('/supported-sites')} // Navigate to supported platforms page
            className="bg-gray-800 p-2 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer transition-transform transform hover:scale-105"
          >
            <Ellipsis size={24} className="text-gray-400 mb-1" />
            <h3 className="text-brand-blue text-sm font-semibold text-center">
              More Platforms
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSupportedPlatforms;
