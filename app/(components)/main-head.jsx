import Image from 'next/image'
import React from 'react'

function MainHead() {
  return (
    <div className='flex justify-center items-center flex-col'>
      <Image 
        src="/snaplood.png" 
        width={450} 
        height={225} 
        alt="Snaplood Logo" 
        className="h-auto w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4"
      />
      <p className="text-center text-sm text-gray-500">Download videos & audios from YouTube, TikTok, Facebook, Instagram & more – fast and free!</p>
    </div>
  )
}

export default MainHead
