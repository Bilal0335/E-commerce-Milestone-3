import React from "react";

const Banner = () => {
  return (
    <div className="overflow-hidden bg-gradient-to-r relative from-black to-gray-700 font-sans px-6 py-12 mb-7">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://img.freepik.com/free-photo/delicious-looking-3d-burger-with-simple-background_23-2150914861.jpg?uid=R106223318&ga=GA1.1.742101399.1735529055&semt=ais_hybrid"
          alt="burger"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="z-10 container relative mx-auto flex flex-col justify-center items-center text-center">
        <h2
          className="text-white sm:text-5xl font-bold
         mb-4 max-w-xl"
        >
          Discover Our Menu
        </h2>
        <p className="text-white text-lg text-center mb-6">
          Shp Now Exclusive Burger Discount!
        </p>
        <button
          type="button"
          className="bg-blue-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Exiting Deal Launch at 12PM
        </button>
      </div>
    </div>
  );
};

export default Banner;
