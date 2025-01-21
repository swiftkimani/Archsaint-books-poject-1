import PropTypes from "prop-types";

const Footer = () => {
  return (
    <footer className="bg-[#ED553B] px-4 pt-8  text-white flex">
      <div className="">
        <img
          src="/footer/ornament.svg"
          alt="ornament"
          className="sm:-mt-12 sm:h-[158px] sm:w-20 "
        />
      </div>
      <div>
        <div className="mx-auto py-12 grid grid-cols-1 md:grid-cols-3 pl-2 sm:pl-12 gap-6 pr-0 sm:pr-32">
          {/* Left Section */}
          <div>
            <div className="mb-4 mr-0 sm:mr-12">
              <div className="w-16 h-16 rounded-full mb-4">
                <img
                  src="/logo.svg"
                  alt="logo"
                  className=" cursor-pointer hover:scale-110"
                />
              </div>
              <p className="text-sm">
                Nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-1 mt-0 sm:mt-8 sm:space-x-12">
              <img
                src="/footer/facebook.svg"
                alt="Facebook"
                className="w-4 h-4 sm:w-8 sm:h-8 cursor-pointer hover:scale-110"
              />
              <img
                src="/footer/linkedin.svg"
                alt="LinkedIn"
                className="w-4 h-4 sm:w-8 sm:h-8 cursor-pointer hover:scale-110"
              />
              <img
                src="/footer/x.svg"
                alt="Twitter/X"
                className="w-4 h-4 sm:w-8 sm:h-8 cursor-pointer hover:scale-110"
              />
              <img
                src="/footer/youtube.svg"
                alt="YouTube"
                className="w-4 h-4 sm:w-8 sm:h-8 cursor-pointer hover:scale-110"
              />
            </div>
          </div>

          {/* Middle Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <FooterLink href="#">HOME</FooterLink>
              <FooterLink href="#">ABOUT US</FooterLink>
              <FooterLink href="#">BOOKS</FooterLink>
              <FooterLink href="#">NEW RELEASE</FooterLink>
              <FooterLink href="#">CONTACT US</FooterLink>
              <FooterLink href="#">BLOG</FooterLink>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">IMPORTANT LINKS</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">FAQs</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="bg-[#ED553B] py-4 text-center  text-sm sm:pr-8 pr-2">
          <div className="flex justify-between">
            <p>© 2022 Arihant. All Rights Reserved.</p>
            <p>
              <a href="#" className="hover:underline">
                Privacy
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </p>
          </div>
          <div className="flex justify-end mt-12 -mr-0 sm:-mr-12">
            <div>{ ""}</div>
            <div>
              <img
                src="/footer/rightornament.svg"
                alt="rightornament"
                className="sm:-mt-12 sm:w-[158px] sm:h-20 "
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="hover:underline">
      {children}
    </a>
  </li>
);

// Add PropTypes validation
FooterLink.propTypes = {
  href: PropTypes.string.isRequired, // Ensure href is required
  children: PropTypes.node.isRequired, // Ensure children is required
};

export default Footer;

