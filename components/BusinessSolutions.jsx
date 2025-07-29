import React from "react";

// Data for the solutions - easy to update or fetch from an API
const solutions = [
  {
    id: "01",
    title: "Contract",
    description:
      "Protect your interests with expertly drafted, legally binding contracts for all your business needs.",
  },
  {
    id: "02",
    title: "Sales Reports",
    description:
      "Your sales data. Our AI. Get insights, spot trends, and recommendations. Smarter decisions, faster.",
  },
  {
    id: "03",
    title: "CVs & Resumes (HR)",
    description:
      "Upload CVs. Our AI analyzes skills, ranks candidates, and answers questions via chatbot. Recruit faster, smarter.",
  },
];

// Arrow Icon Component for reusability
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
    />
  </svg>
);

const BusinessSolutions = () => {
  return (
    <section id="business" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Business Documentation Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We Manage And Optimize Your Essential Business Paperwork, Ensuring
            Accuracy And Effectiveness For Smooth Operations.
          </p>
        </div>

        {/* Solutions List */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <a
                key={solution.id}
                href="#"
                className={`group block border-t ${"border-[#0C0C0C] pt-8"} `}
              >
                <div className="pb-8">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-6">
                      <span className="text-4xl font-normal text-[#4F5256]">
                        {solution.id}.
                      </span>
                      <div>
                        <h3 className="text-[32px] font-bold text-[#4F5256]">
                          {solution.title}
                        </h3>
                        <p className="mt-1 text-[24px] font-normal text-gray-600 max-w-xl">
                          {solution.description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Icon with hover effect */}
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-900 transition-colors duration-300 ease-in-out">
                      <span className="text-gray-700 group-hover:text-white transition-colors duration-300 ease-in-out">
                        <ArrowIcon />
                      </span>
                    </div>
                  </div>
                </div>
                {/* Add border to the last element */}
                {index === solutions.length - 1 && (
                  <div className="border-b border-[#0C0C0C]"></div>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutions;
