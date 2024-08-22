import React from "react";

const Footer = ({ bg }) => {
  const scrollByAmount = (amount) => {
    window.scrollTo({
      top: 0 + amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="px-[8%] py-[3%]">
      <div className="mb-2 flex flex-col md:flex-row justify-between md:items-center ">
        <ul className="flex md:text-lg text-white text-sm">
          <li
            className="mr-4 lg:mr-8 duration-300 transition-all ease-in transform hover:-translate-y-2"
            onClick={() => scrollByAmount(0)}
          >
            <a href="https://deepcal.xyz">Home</a>
          </li>
          <li
            className="mr-4 lg:mr-8 duration-300 transition-all ease-in transform hover:-translate-y-2"
            onClick={() => scrollByAmount(500)}
          >
            <a href="https://deepcal.xyz">Company</a>
          </li>
          <li
            className="mr-4 lg:mr-8 duration-300 transition-all ease-in transform hover:-translate-y-2"
            onClick={() => scrollByAmount(1000)}
          >
            <a href="https://deepcal.xyz">Solutions</a>
          </li>
          <li className="mr-4 lg:mr-8 duration-300 transition-all ease-in transform hover:-translate-y-2">
            <a href="https://blog.deepcal.xyz">Blog</a>
          </li>
          <li className="mr-4 lg:mr-8 duration-300 transition-all ease-in transform hover:-translate-y-2">
            <a href="https://deepcal.xyz/#/industry-news">Industry News</a>
          </li>
        </ul>
        <div className="flex flex-row gap-4">
          <a
            href="https://www.youtube.com/@deep_cal"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* YouTube icon SVG */}
          </a>
          <a
            href="https://www.linkedin.com/company/deepcal/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* LinkedIn icon SVG */}
          </a>
          <a
            href="https://x.com/deep_cal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center"
          >
            {/* X.com icon SVG */}
          </a>
        </div>
      </div>
      <div className="border-b-2 border-white w-[100%] h-1 mb-4"></div>
      <div className="flex justify-between items-center">
        <p className="text-white text-xs md:text-sm">
          Copyright © 2024 DeepCal. All Rights Reserved.
        </p>
        {bg === "black" ? (
          <img
            className="w-[60px] md:w-[120px] object-cover"
            src="./Logo-W.png"
            alt="Logo"
          />
        ) : (
          <img
            className="w-[60px] md:w-[120px] object-cover"
            src="./Logo-B.png"
            alt="Logo"
          />
        )}
      </div>
    </div>
  );
};

export default Footer;