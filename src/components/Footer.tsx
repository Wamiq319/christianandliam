import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-gray-600 text-sm mb-4">
          © {new Date().getFullYear()} christinaandliam.com — All rights
          reserved.
        </p>
        <div className="flex justify-center space-x-6 text-sm text-gray-500">
          <a
            href="https://www.instagram.com/cg87mommy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#397d0c] flex items-center cursor-pointer"
          >
            <FaInstagram className="mr-1" /> Instagram
          </a>
          <a
            href="https://www.facebook.com/krissy.michelle.568"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#397d0c] flex items-center cursor-pointer"
          >
            <FaFacebook className="mr-1" /> Facebook
          </a>
          <a
            href="https://www.gofundme.com/f/help-liam-get-a-new-accessible-vehicle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#397d0c]"
          >
            GoFundMe
          </a>
        </div>
      </div>
    </footer>
  );
}
