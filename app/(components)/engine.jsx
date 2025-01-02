"use client"

import React, { useState } from 'react';
import ContentBox from './content-box';
import SearchBar from './seach-bar';
import TermsText from './terms-text';

function Engine() {
  const [videoData, setVideoData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query) => {
    setIsLoading(true);
    try {
      // Make API request here (simulated with a timeout for demonstration)
      const response = await fetch(`/api/scrape?url=${encodeURIComponent(query)}`);
      const data = await response.json();


    
  
      
      // Assuming API response structure matches the videoData shape
      setVideoData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} isLoading={isLoading} />
      <TermsText />
      {videoData && <ContentBox data={videoData.data} />}
    </>
  );
}

export default Engine;
