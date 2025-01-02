"use client"

import { useRouter } from "next/navigation";
import Head from "next/head";
import { useEffect, useState } from "react";

const FAQ = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [filteredFAQs, setFilteredFAQs] = useState([]);

  // Static FAQs data
  const faqs = [
    {
      question: "What is SnapLood.com?",
      answer:
        "SnapLood.com is a free online video downloader that allows you to download videos from platforms like YouTube, TikTok, Instagram, Facebook, and more without any sign-ups or hidden charges.",
    },
    {
      question: "Is SnapLood.com free to use?",
      answer:
        "Yes, SnapLood.com is completely free to use with no hidden charges or subscriptions required.",
    },
    {
      question: "Can I download videos from TikTok without a watermark?",
      answer: "Absolutely! SnapLood.com supports downloading TikTok videos without a watermark.",
    },
    {
      question: "Is it safe to use SnapLood.com?",
      answer: "Yes, SnapLood.com is secure and ensures your privacy while downloading videos.",
    },
    {
      question: "Do I need to install any software to use SnapLood.com?",
      answer: "No, SnapLood.com is a web-based tool. You can use it directly from your browser without any software installation.",
    },
    {
      question: "Which platforms are supported by SnapLood.com?",
      answer:
        "SnapLood.com supports platforms like YouTube, TikTok, Instagram, Facebook, Twitter, and many more.",
    },
    {
      question: "What video formats can I download?",
      answer:
        "SnapLood.com supports various video formats, including MP4, and different quality options such as 720p, 1080p, and 4K.",
    },
    {
      question: "Why is my download not working?",
      answer:
        "Ensure the video URL is correct and the platform is supported. If the issue persists, try again later or contact support.",
    },
    {
      question: "Can I use SnapLood.com on mobile devices?",
      answer: "Yes, SnapLood.com is mobile-friendly and works seamlessly on smartphones and tablets.",
    },
    {
      question: "Are there any limits on the number of downloads?",
      answer: "No, SnapLood.com offers unlimited downloads for free.",
    },
  ];

  useEffect(() => {
    const lowerCaseQuery = query.toLowerCase();
    const results = faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(lowerCaseQuery) ||
        faq.answer.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredFAQs(results);
  }, [query]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>FAQs - SnapLood.com | Free Online Video Downloader</title>
        <meta
          name="description"
          content="Find answers to common questions about SnapLood.com. Learn how to download videos securely and for free from platforms like YouTube, TikTok, Instagram, and more."
        />
        <meta name="keywords" content="FAQs, video downloader, SnapLood, free video downloader, online video downloader" />
        <meta name="author" content="SnapLood.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* FAQ Content */}
      <div className="bg-gray-800 text-gray-400 min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-10">
            <h1 className="text-brand-blue text-3xl md:text-4xl font-bold">Frequently Asked Questions</h1>
            <p className="text-base md:text-lg mt-2">
              Find answers to common questions about SnapLood.com and how to use it.
            </p>
          </header>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={query}
              onChange={handleSearch}
              className="w-full p-3 rounded-lg bg-gray-700 text-gray-300 placeholder-gray-500"
            />
          </div>

          {/* FAQs */}
          <section>
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <div key={index} className="border-b border-gray-600 py-4">
                  <h2 className="text-brand-blue text-lg font-semibold mb-2">{faq.question}</h2>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No results found for your search.</p>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default FAQ;
