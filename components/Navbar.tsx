import React from "react";
import { FaBolt, FaHamburger, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-gray-900">
            <div className="flex justify-between items-center">
              <div className="flex justify-items-center items-center gap-2">
                {/* Logo */}
                <FaHamburger className="text-yellow-400 w-6 h-6 hover:text-cyan-300 cursor-pointer " />
                {/* search icon */}
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    className="rounded-3xl py-3 px-3 text-xs w-[350px] pr-10 hidden lg:block md:block"
                    placeholder="Search for your favorite burger from menu. "
                  />
                  <FaSearch className="w-5 h-5 text-lime-300 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
                </div>
              </div>

              <div className="flex justify-center items-center gap-2">
                <FaBolt className="w-5 h-5 lg:block md:block text-amber-400" />
                <p className="text-white text-sm hidden lg:block md:block">
                  Order now and get it with
                  <span className="text-amber-400"> 15 minute</span>
                </p>
                {/* cart icon */}
                <FaCartShopping className="w-8 h-8 p-1 relative rounded-full ring-2 text-cyan-400 hover:ring-amber-400" />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ZP9zTf75vBmTD9BJWQmf3DjamXGuvzw44w&s"
                  alt="image 1"
                  className="w-8 h-8 inline-block rounded-full ring-2 ring-cyan-400 hover:text-amber-400"
                />
              </div>
              {/* exctra */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
