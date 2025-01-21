import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "About Us",
    "Books",
    "New Release",
    "Contact Us",
    "Blog",
  ];

  return (
    <nav className="sticky top-0 z-50">
      {/* Top Bar Section */}
      <div className="bg-purple-700 text-white py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Contact Info */}
          <div className="flex items-center space-x-2">
            <img src="/call.svg" alt="Phone Icon" className="w-5 h-5" />
            <span className="text-lg">+91 8374902234</span>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-300">
              <img src="/facebook.svg" alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-purple-300">
              <img src="/instagram.svg" alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-purple-300">
              <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-purple-300">
              <img
                src="/random.svg"
                alt="Twitter or Random"
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Section */}
      <div className="bg-white shadow-md ">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo Placeholder */}
          <div className="flex items-center">
            <div className="bg-gray-300 rounded-full w-10 h-10"></div>
          </div>
          {/* Navigation Menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-800 text-lg hover:text-purple-600 transition">
                {item}
              </a>
            ))}
          </div>
          {/* Icons & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-800 hover:text-purple-600">
              <img src="/user.svg" alt="User Icon" className="w-5 h-5" />
            </button>
            <button className="text-gray-800 hover:text-purple-600">
              <img src="/wish.svg" alt="Wishlist Icon" className="w-5 h-5" />
            </button>
            <button className="text-gray-800 hover:text-purple-600">
              <img src="/bag.svg" alt="Shopping Bag Icon" className="w-5 h-5" />
            </button>
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-800 text-lg"
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
                className="text-gray-800 text-lg hover:text-purple-600 transition">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
