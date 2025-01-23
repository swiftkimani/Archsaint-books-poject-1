import { useState, useEffect } from "react";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 2) % 2);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div> <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div> <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div> <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div> <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div> <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div> <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div> <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div> <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div> <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div> <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div> <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div> <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div> <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div> <div>Home</div>
      <div>Home</div>
      <div>Home</div> <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div> <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div> <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div> <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div className="w-full max-w-5xl mx-auto p-4">
        <div className="relative flex items-center justify-center overflow-hidden">
          {/* Slide 1 */}
          <div
            className={`flex flex-col lg:flex-row items-center justify-between p-6 bg-white shadow-lg rounded-lg transform transition-transform duration-700 ease-in-out ${
              currentIndex === 0
                ? "translate-x-0"
                : "translate-x-full opacity-0"
            } absolute w-full`}>
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
                src="https://via.placeholder.com/300x400"
                alt="Book Cover"
                className="w-64 h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className={`flex flex-col lg:flex-row items-center justify-between p-6 bg-white shadow-lg rounded-lg transform transition-transform duration-700 ease-in-out ${
              currentIndex === 1
                ? "translate-x-0"
                : "translate-x-full opacity-0"
            } absolute w-full`}>
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
                src="https://via.placeholder.com/300x400"
                alt="Another Book Cover"
                className="w-64 h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 flex space-x-2 justify-center">
            <button
              className={`w-3 h-3 rounded-full ${
                currentIndex === 0 ? "bg-blue-600" : "bg-gray-300"
              } transition-colors duration-300`}
              onClick={() => setCurrentIndex(0)}></button>
            <button
              className={`w-3 h-3 rounded-full ${
                currentIndex === 1 ? "bg-blue-600" : "bg-gray-300"
              } transition-colors duration-300`}
              onClick={() => setCurrentIndex(1)}></button>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
            &larr;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
