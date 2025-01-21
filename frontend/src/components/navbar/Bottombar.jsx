import { useState } from "react";

const Bottombar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "About Us",
    "Books",
    "New Release",
    "Contact Us",
  ];

  return (
    <nav className="sticky top-0 z-50 h-[122px] font-inter">
      {/* Top Bar Section */}

      {/* Main Navigation Section */}
      <div className="bg-white shadow-md pr-2 pl-2 sm:pl-12 sm:pr-12 sm:py-2 content-center">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Placeholder */}
          <div className="flex items-center py-2 pl-2 pr-2 sm:pr-0">
            <div className="w-8 h-8 sm:w-16 sm:h-16 bg-[#393280] rounded-full">
              <img
                src="/logo.svg"
                alt="logo"
                className=" sm:p-2 cursor-pointer hover:scale-110"
              />
            </div>
          </div>
          {/* Navigation Menu */}
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#111111] text-[18px] hover:text-red-600 px-6 border-r-2 border-r-[#393280] transition">
                {item}
              </a>
            ))}
            <a
              href="#"
              className="text-[#111111] text-[18px] pl-2 hover:text-red-600 transition">
              Blog
            </a>
          </div>
          {/* Icons & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-800 sm:border-r-2 sm:border-r-[#393280] sm:px-6 hover:text-purple-600">
              <img src="/nav/user.svg" alt="User Icon" className="w-5 h-5" />
            </button>
            <button className="text-gray-800 sm:border-r-2 sm:border-r-[#393280] sm:px-6 hover:text-purple-600">
              <img
                src="/nav/wish.svg"
                alt="Wishlist Icon"
                className="w-5 h-5"
              />
            </button>
            <button className="text-gray-800 sm:pl-2 hover:text-purple-600">
              <img
                src="/nav/bag.svg"
                alt="Shopping Bag Icon"
                className="w-5 h-5"
              />
            </button>
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-[#393280] text-lg pl-4 pr-2"
              aria-label="menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-2 p-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-800 text-lg hover:text-purple-600 transition-all">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Bottombar;
