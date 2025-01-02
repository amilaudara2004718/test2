// app/supported-sites/page.jsx
import Image from 'next/image';
import { Sites } from '../utils/sites';

export default async function SupportedSites() {

      const sites = Sites()
    return (
      <div className="bg-gray-900 text-gray-400 min-h-screen p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-brand-blue text-4xl font-bold mb-6 text-center">
            Supported Sites
          </h1>
          <p className="text-center mb-6">
            SnapLood supports downloading media from various platforms. Check if your desired platform is supported.
          </p>

          {/* Grid of Supported Sites */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sites.map((site, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
              >
                <Image
                  src={site.logo}
                  alt={`${site.name} logo`}
                  width={160} // Adjusted width
                  height={160} // Adjusted height
                  className="mb-4 border rounded-md" // Adjusted margin-bottom
                  objectFit="contain" // Ensures the image maintains its aspect ratio
                />
                <h3 className="text-brand-blue text-xl font-semibold mb-2">
                  {site.name}
                </h3>
                <p className="text-sm text-gray-400 text-center mb-4">
                  {site.description}
                </p>
                <a
                  href={site.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue hover:underline"
                >
                  Visit {site.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
