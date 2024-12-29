import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-footer-gradient px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          {/* Logo and Social Links */}
          <div className="flex flex-col space-y-6">
            <Link href="/" className="text-2xl font-bold text-[#FF8FAB]">
              <img src="/images/Frame 1597885004.png" className="h-8" alt="Logo" />
            </Link>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/kreatoors/posts/?feedView=all" target="_blank" aria-label="LinkedIn">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <img
                    src="/images/akar-icons_linkedin-fill.png"
                    className="h-5 w-5"
                    alt="LinkedIn"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-20">
            <div>
              <h3 className="font-semibold text-black mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-customGray hover:text-gray-700">
                    Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="text-customGray hover:text-gray-700">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-customGray hover:text-gray-700">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#" className="text-customGray hover:text-gray-700">
                    Members
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-black mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-customGray hover:text-gray-700">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-black mb-4">Contact Us</h3>
              <ul className="space-y-3 text-customGray">
                <li>AI Loves HR Ltd</li>
                <li>128 City Road</li>
                <li>London EC1V 2NX</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 mt-16 pt-8 border-t border-gray-200">
          <p className="font-medium text-black text-sm">
            Email: hello@kreatoors.com
          </p>
          <p className="font-medium text-sm text-black">
            Copyright © 2024 Kreatoors an AI Loves HR Ltd Company. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;