import { useState, useEffect } from "react";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 2; // Number of slides

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full mx-auto p-4 relative">
      <div className="relative flex items-center justify-center overflow-hidden h-96">
        {/* Slide 1 */}
        <div
          className={`absolute top-0 left-0 w-full h-full flex flex-col lg:flex-row items-center justify-between p-6 bg-white shadow-lg rounded-lg transform transition-all duration-700 ease-in-out ${
            currentIndex === 0
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}>
          {/* Left Section */}
          <div className="lg:w-1/2 w-full text-center lg:text-left space-y-4">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">
              Ipsum Dolor Si
            </h2>
            <p className="text-gray-600 text-sm lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque vel urna sit amet velit cursus aliquet.
            </p>
            <button className="px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
              READ MORE
            </button>
          </div>
          {/* Right Section */}
          <div className="lg:w-1/2 w-full flex justify-center mt-6 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1734014938077-af9026508051?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
              alt="Book Cover"
              className="w-64 h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className={`absolute top-0 left-0 w-full h-full flex flex-col lg:flex-row items-center justify-between p-6 bg-white shadow-lg rounded-lg transform transition-all duration-700 ease-in-out ${
            currentIndex === 1
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}>
          {/* Left Section */}
          <div className="lg:w-1/2 w-full text-center lg:text-left space-y-4">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">
              Another Slide
            </h2>
            <p className="text-gray-600 text-sm lg:text-base">
              This is another slide with placeholder text for demonstration
              purposes.
            </p>
            <button className="px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
              LEARN MORE
            </button>
          </div>
          {/* Right Section */}
          <div className="lg:w-1/2 w-full flex justify-center mt-6 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1734014938077-af9026508051?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
              alt="Another Book Cover"
              className="w-64 h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 flex space-x-2 justify-center">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-blue-600" : "bg-gray-300"
              } transition-colors duration-300`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}></button>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Previous Slide">
          &larr;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Next Slide">
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Home;
