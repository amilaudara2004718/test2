import React from 'react';
import HomeSupportedPlatforms from './HomeSupportedPlatforms';

const MainPageDescription = () => {
  return (
    <section className="bg-gray-900 py-12 px-6 lg:px-24">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-xl sm:text-2xl lg:text-xl font-extrabold text-brand-blue mb-6">
          SnapLood.com - The Best Free Online Video Downloader for All Platforms
        </h1>
        <HomeSupportedPlatforms/>
        <p className="text-base sm:text-lg lg:text-md text-gray-300 mb-8 leading-relaxed">
  SnapLood.com offers a fast, secure, and easy way to download high-quality videos from YouTube, TikTok, Facebook, Instagram Reels, Twitter, and more—free, with no sign-ups or hidden charges!
</p>


        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-brand-blue mb-6">Why Choose SnapLood.com?</h2>

        <div className="text-left text-gray-200 space-y-8">
          <div>
            <h3 className="font-bold text-base sm:text-lg">1. Download Videos from Top Platforms:</h3>
            <p className="mt-2">
              SnapLood.com supports an extensive list of platforms, including:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>YouTube</li>
              <li>TikTok (No Watermarks!)</li>
              <li>Facebook</li>
              <li>Instagram (Posts, Reels, Stories)</li>
              <li>Twitter/X</li>
              <li>Pornhub</li>
              <li><a href="https://example.com/supported-sites" className="text-brand-blue hover:underline">And many more!</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base sm:text-lg">2. No Software or Extensions Needed:</h3>
            <p className="mt-2">
              Say goodbye to unnecessary downloads and installations! Use SnapLood.com directly in your browser for a seamless experience.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base sm:text-lg">3. High-Quality Downloads:</h3>
            <p className="mt-2">
              Save videos in stunning resolutions, from HD to 4K, ensuring the best quality for your offline viewing.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base sm:text-lg">4. Completely Free, Secure & Hassle-Free:</h3>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>No Sign-Up Required</li>
              <li>No Hidden Costs</li>
              <li>No Hacks</li>
              <li>Protect your data while enjoying speedy downloads.</li>
            </ul>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-brand-blue mt-12 mb-6">
          How to Download Videos with SnapLood.com
        </h2>
        <div className="text-left text-gray-200">
          <ol className="list-decimal list-inside mt-4 space-y-4">
            <li>Copy the Video URL: Navigate to the video you want to download and copy its link.</li>
            <li>Paste the URL: Enter the URL in the input field on SnapLood.com’s homepage.</li>
            <li>Click "Download": Select your preferred format and resolution, then save your video instantly!</li>
          </ol>
        </div>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-brand-blue mt-12 mb-6">
          Features You’ll Love
        </h2>
        <ul className="list-disc list-inside text-left text-gray-200 mt-4 space-y-4">
          <li>No Watermarks: Perfect for content creators and personal use.</li>
          <li>Multi-Device & Browser Compatible: Works on Chrome, Firefox, Safari, Edge, and more!</li>
          <li>Multiple Resolutions: Download videos in SD, HD, Full HD, 2K, or 4K formats.</li>
          <li>Completely Free: No subscriptions, fees, or downloads required.</li>
        </ul>

        

        <p className="text-base sm:text-lg lg:text-xl text-gray-400 mt-12 leading-relaxed">
          SnapLood.com makes downloading videos as easy as 1-2-3! Save your favorite content without watermarks, sign-ups, or hidden fees.
        </p>
      </div>
    </section>
  );
};

export default MainPageDescription;
