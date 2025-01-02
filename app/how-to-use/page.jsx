import Image from 'next/image';
import Head from 'next/head';

const HowToUse = () => {
  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>How to Use SnapLood.com - Free Online Video Downloader</title>
        <meta
          name="description"
          content="Learn how to use SnapLood.com to download videos from YouTube, TikTok, Instagram, and more. Fast, secure, and free video downloading guide!"
        />
        <meta name="keywords" content="video downloader, how to use SnapLood, download YouTube videos, TikTok downloader, free online video downloader" />
        <meta name="author" content="SnapLood.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Content */}
      <div className="bg-gray-900 text-gray-400 min-h-screen p-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <header className="text-center">
            <h1 className="text-brand-blue text-3xl md:text-4xl font-bold mb-4">
              How to Use SnapLood.com
            </h1>
            <p className="text-base md:text-lg mb-8">
              Follow these simple steps to download your favorite videos quickly and securely!
            </p>
          </header>

          {/* Steps */}
          <section>
            {/* Step 1 */}
            <div className="mb-12 flex flex-col md:flex-row md:items-center">
              <div className="md:w-1/2 md:pr-6">
                <h2 className="text-brand-blue text-xl md:text-2xl font-semibold mb-3">
                  Step 1: Copy the Shareable Link
                </h2>
                <p className="mb-4">
                  Open the platform (e.g., YouTube, TikTok, Instagram) and copy the shareable video link.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/step1.png"
                  alt="Copy the video link from YouTube, TikTok, or Instagram"
                  width={600}
                  height={350}
                  className="rounded-lg w-full"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-12 flex flex-col md:flex-row-reverse md:items-center">
              <div className="md:w-1/2 md:pl-6">
                <h2 className="text-brand-blue text-xl md:text-2xl font-semibold mb-3">
                  Step 2: Paste the Link
                </h2>
                <p className="mb-4">
                  Paste the copied link into the SnapLood.com input box and hit the star button.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/step2.png"
                  alt="Paste the copied link in the SnapLood input box"
                  width={600}
                  height={350}
                  className="rounded-lg w-full"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-12 flex flex-col md:flex-row md:items-center">
              <div className="md:w-1/2 md:pr-6">
                <h2 className="text-brand-blue text-xl md:text-2xl font-semibold mb-3">
                  Step 3: Choose the Download Option
                </h2>
                <p className="mb-4">
                  Select your preferred quality or format and click the download button. Your video will start downloading!
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/step3.png"
                  alt="Choose the download quality and click the download button"
                  width={600}
                  height={350}
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HowToUse;
