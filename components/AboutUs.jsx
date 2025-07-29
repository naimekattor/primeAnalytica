import React from "react";

// Reusable Check Icon Component for the features list
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
      clipRule="evenodd"
    />
  </svg>
);

// Data for the feature list, making it easy to manage
const features = [
  { text: "Simplicity first – No complex dashboards, no learning curves" },
  { text: "Real-time answers – Ask, and AI delivers in seconds" },
  {
    text: "Secure platform – Your data is protected with enterprise-grade security",
  }, // Added one more for completeness
];

const AboutUs = () => {
  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[40px] sm:text-4xl font-bold text-[#4F5256] tracking-tight">
              About US
            </h2>
            <h3 className="mt-2 text-[28px] font-semibold text-[#4F5256]">
              Empowering Hotel Teams with AI-Driven Insights
            </h3>
            <p className="mt-6 text-gray-600 text-[18px] leading-relaxed">
              <span className="font-[800] text-[24px] text-red-600 italic">
                PrimeAnalytica
              </span>{" "}
              is an AI-powered platform built for hotel businesses. We connect
              with your Google Drive, analyze reports like sales, CVs,
              financials, and contracts, and deliver fast, accurate answers
              through a smart chatbot. Simple, secure, and made for hotel teams
              to save time and work smarter.
            </p>

            {/* Features List */}
            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#1A7720] text-white">
                      <CheckIcon />
                    </div>
                  </div>
                  <p className="ml-3 text-[20px] text-[#333333]">
                    <strong>{feature.text.split("–")[0]}</strong>–
                    {feature.text.split("–")[1]}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Overlapping Images */}
          <div className="mt-12 lg:mt-0 w-full flex flex-col gap-4 lg:relative lg:h-auto">
            {/* Back Image */}
            {/* <img
              className="hidden lg:block absolute bottom-0 left-0 w-[75%] sm:w-[65%] lg:w-[75%] h-auto object-cover rounded-xl shadow-lg"
              src="/images/img2.jpg"
              alt="Luxury hotel building at night"
            /> */}

            {/* Front Image */}
            {/* <img
              className="hidden lg:block absolute top-0 right-0 w-[70%] sm:w-[60%] lg:w-[70%] h-[484px] object-cover rounded-xl shadow-2xl"
              src="/images/img1.jpg"
              alt="Hotel pool area with palm trees at dusk"
            /> */}

            {/* Responsive stacked images for < lg devices */}
            <div className="flex flex-col gap-4 lg:hidden">
              {/* <img
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                src="/images/img2.jpg"
                alt="Luxury hotel building at night"
              />
              <img
                className="w-full h-[400px] object-cover rounded-xl shadow-2xl"
                src="/images/img1.jpg"
                alt="Hotel pool area with palm trees at dusk"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
