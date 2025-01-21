const Topbar = () => {
  return (
    <div>
      <div
        className="bg-[#393280] text-white sm:h-[56px] h-[36px] content-center">
        <div className="container mx-auto pr-4 pl-4 sm:pl-12 sm:pr-12 flex justify-between items-center">
          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <img
              src="/nav/call.svg"
              alt="Phone Icon"
              className="w-4 h-4 sm:w-6 sm:h-6" // Smaller size for small screens
            />
            <span className="font-inter text-sm sm:text-[20px] sm:text-base font-semibold text-left">
              +91 8374902234
            </span>
          </div>
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 sm:space-x-14">
            <a href="#" className="hover:text-purple-300">
              <img
                src="/nav/facebook.svg"
                alt="Facebook"
                className="w-4 h-4 sm:w-6 sm:h-6" // Smaller size for small screens
              />
            </a>
            <a href="#" className="hover:text-purple-300">
              <img
                src="/nav/instagram.svg"
                alt="Instagram"
                className="w-4 h-4 sm:w-6 sm:h-6" // Smaller size for small screens
              />
            </a>
            <a href="#" className="hover:text-purple-300">
              <img
                src="/nav/linkedin.svg"
                alt="LinkedIn"
                className="w-4 h-4 sm:w-6 sm:h-6" // Smaller size for small screens
              />
            </a>
            <a href="#" className="hover:text-purple-300">
              <img
                src="/nav/random.svg"
                alt="Twitter or Random"
                className="w-4 h-4 sm:w-6 sm:h-6" // Smaller size for small screens
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
