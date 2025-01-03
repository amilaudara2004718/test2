import Image from 'next/image'
import React from 'react'
import DownloadOptions from './download-options'

function ContentBox({ data }) {
      if (!data || !data.title) {
        return (
            <div className="flex justify-center items-center mt-4">
                <p className="text-red-600">No data available or an error occurred.</p>
            </div>
        );
    }
  const { title, duration,thumbnail, items, error } = data;

// Display error message if an error occurs
if (error) {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="p-5 sm:p-6 md:p-7 flex items-center  justify-center w-full sm:w-auto">
        <div className="flex justify-center items-center  flex-col ">
          <svg className="h-8 w-8 text-red-600 mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm sm:text-sm md:text-sm font-normal text-red-600 text-center">
            {error}
          </p>
        </div>
      </div>
    </div>
  );
}

  
  return (
    <div className="flex justify-center items-center mt-3">
      <div className="bg-gray-800 p-4 rounded-xl flex flex-col sm:flex-row items-center w-full sm:w-auto">
        {/* Image Section */}
        <div className="mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto">
          <Image
            src={thumbnail}
            width={200} 
            height={150} 
            alt="Thumbnail"
            className="h-auto w-full sm:w-auto rounded-lg"
          />
        </div>

        {/* Content Section */}
        <div className="flex-col flex justify-between w-full sm:w-auto">
          <p className="text-md font-semibold sm:text-md md:text-md text-white max-w-full sm:max-w-[400px] truncate">
            {title}
          </p>
          <p className="text-sm text-gray-500">{duration}</p>

          {/* Download Options */}
          <div className="mt-4">
            <DownloadOptions items={items} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentBox;
