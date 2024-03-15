import React from "react";

const Hero = ({ images }) => {
  const halfLength = Math.ceil(images.length / 2);
  const leftImages = images.slice(0, halfLength);
  const rightImages = images.slice(halfLength, images.length);

  return (
    <div className="flex flex-wrap  md:-m-2">
      <div className="flex flex-wrap w-1/2">
        {leftImages.map((image, index) => (
          <div
            key={image.id}
            className={`md:p-4 p-1 ${
              index === leftImages.length - 1 ? "w-full" : "w-1/2"
            }`}
          >
            <img
              alt={image.description}
              className="w-full h-full object-cover object-center block"
              src={image.src}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap w-1/2">
        {rightImages.map((image, index) => (
          <div
            key={image.id}
            className={`md:p-2 p-1 ${index === 0 ? "w-full" : "w-1/2"}`}
          >
            <img
              alt={image.description}
              className="w-full h-full object-cover object-center block"
              src={image.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
