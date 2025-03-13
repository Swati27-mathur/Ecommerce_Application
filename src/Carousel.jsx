import React, { useState } from 'react';
import image1 from './assets/image/crousel/logo.png';
import image2 from './assets/image/crousel/ring.jpg';
import image3 from './assets/image/crousel/crausel-logo-006.png';



const Carousel = () => {
  const images = [image1,image2,image3,image1,image2,image3,image1,image2,image3];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

 

  return (
    <div className="relative  h-40 ">
       <div className="grid grid-cols-3 gap-4 ">
        <div className="col-span-1 border-x-[1px] border-y-[1px] border-gray-300 ">
          <img src={images[currentIndex]} alt={`Image ${currentIndex}`} className="size-40 mx-auto bg-linear-to-r p-[26px]" />
        </div>
        <div className="col-span-1 border-x-[1px] border-y-[1px] border-gray-300">
          <img src={images[currentIndex + 1]} alt={`Image ${currentIndex + 1}`} className="size-40 mx-auto bg-linear-to-r p-[26px]" />
        </div>
        <div className="col-span-1 border-x-[1px] border-y-[1px] border-gray-300">
          <img src={images[currentIndex + 2]} alt={`Image ${currentIndex + 2}`} className="size-40  mx-auto bg-linear-to-r p-[26px]" />
        </div>
      </div>
      {/* Previous Button */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        &lt;
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        &gt;
      </button>

      {/* Indicators */}
      <div className="absolute  left-1/2 transform -translate-x-1/2 flex space-x-2 mt-[30px]">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full bg-white cursor-pointer ${
              index === currentIndex ? " bg-orange-400" :" bg-slate-400 " 
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;




