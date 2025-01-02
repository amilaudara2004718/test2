import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        {/* Logo Section */}
        <div className="mb-4 md:mb-0">
          <Image 
            src="/snaplood.png" 
            width={150} 
            height={25} 
            alt="Snaplood Logo" 
            className="h-6 w-auto md:h-7"
          />
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center md:justify-start">
          <Link href="/privacy-policy" className="text-sm mx-2 hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-sm mx-2 hover:underline">
            Terms of Service
          </Link>
          <Link href="/faq" className="text-sm mx-2 hover:underline">
            FAQ
          </Link>
          <Link href="/contact-us" className="text-sm mx-2 hover:underline">
            Contact Us
          </Link>
          <Link href="/how-to-use" className="text-sm mx-2 hover:underline">
            How to Use
          </Link>
          <Link href="/supported-sites" className="text-sm mx-2 hover:underline">
            Supported Sites
          </Link>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm mt-4">
        © {new Date().getFullYear()} SnapLood.com. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
