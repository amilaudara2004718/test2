"use client";

import { VolumeX } from 'lucide-react';
import { useState, useEffect } from 'react';

const DownloadOptions = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (items.length > 0) {
      setSelectedItem(items[0]);
    }
  }, [items]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const handleDownload = () => {
    window.location.href = selectedItem.url;
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={handleToggle}
        className="inline-flex items-center px-3 py-1.5 bg-white rounded-md text-sm sm:text-base"
      >
        <div className="cursor-pointer flex flex-row justify-between items-center px-2 py-1 text-sm w-full text-left">
          <span className="font-semibold text-brand-blue">{selectedItem.name}</span>
          <span className="text-gray-500">{selectedItem.resolution}</span>
          {selectedItem.icon !== "none" && (
            <span className="text-gray-500">
              <VolumeX className="text-red-500" />
            </span>
          )}
        </div>

        <svg
          className="ml-2 w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute left-0 mt-2 w-58 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 max-h-60 overflow-y-auto">
          <div className="py-1">
            {items.map((item, index) => (
              <div
                key={index}
                onClick={() => handleSelect(item)}
                role="button"
                className="cursor-pointer flex flex-row justify-between items-center px-3 py-2 text-sm w-full text-left"
              >
                <span className="font-semibold text-brand-blue">{item.name}</span>
                <span className="text-gray-500">{item.resolution}</span>
                {item.icon !== "none" && (
                  <span className="text-gray-500">
                    <VolumeX className="text-red-500" />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={handleDownload}
        className="mt-2 px-4 py-2 bg-brand-blue text-white rounded-md mx-1 text-sm sm:text-base"
      >
        {selectedItem?.fileSize ? `Download (${selectedItem.fileSize})` : "Download"}
      </button>
    </div>
  );
};

export default DownloadOptions;
