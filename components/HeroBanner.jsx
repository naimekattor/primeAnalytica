import React from "react";

const HeroBanner = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Effortlessly Manage All Your Hotel Documents
            <span className="block">
              With One Smart <span className="text-red-600">AI</span> Assistant.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
            Easily Manage Reports, CVs, Contracts, And Financial Data—All In One
            Place. Our AI Connects With Your Google Drive To Give You Fast,
            Reliable Answers Whenever You Need Them.
          </p>
          <div className="mt-8 sm:mt-10">
            <a
              href="#"
              className="inline-block text-black border-gray-600 border-1 font-[500] px-10 py-2 rounded-md shadow-lg  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-transform transform hover:scale-105 text-[28px]"
            >
              Start Analysis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
