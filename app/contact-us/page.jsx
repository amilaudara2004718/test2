import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-800 text-gray-400 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-gray-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-brand-blue text-3xl md:text-4xl font-bold mb-6 text-center">
          Contact Us
        </h1>
        <p className="mb-6 text-center text-sm md:text-base">
          Have questions or feedback? Fill out the form below or reach us
          directly at{" "}
          <a
            href="mailto:contact@snaplood.com"
            className="text-brand-blue hover:underline"
          >
            contact@snaplood.com
          </a>.
        </p>
        <form
          action="mailto:contact@snaplood.com"
          method="post"
          encType="text/plain"
          className="space-y-4"
        >
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-700 bg-gray-800 rounded-lg focus:ring-2 focus:ring-brand-blue focus:outline-none"
              required
            />
          </div>
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-700 bg-gray-800 rounded-lg focus:ring-2 focus:ring-brand-blue focus:outline-none"
              required
            />
          </div>
          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-1"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="4"
              className="w-full p-3 border border-gray-700 bg-gray-800 rounded-lg focus:ring-2 focus:ring-brand-blue focus:outline-none"
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-brand-blue text-white font-semibold py-2 rounded-lg hover:bg-brand-blue-dark transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
