"use client";
import Link from "next/link";
import React, { useState } from "react";
const solutionsData = [
  {
    id: "contract",
    title: "Contract",
    description:
      "Protect your interests with expertly drafted, legally binding contracts for all your business needs.",
    href: "/dashboard",
  },
  {
    id: "sales",
    title: "Sales Reports",
    description:
      "Your sales data. Our AI. Get insights, spot trends, and recommendations. Smarter decisions, faster.",
    href: "/sales",
  },
  {
    id: "hr",
    title: "CVs & Resumes (HR)",
    description:
      "Upload CVs. Our AI analyzes skills, ranks candidates, and answers questions via chatbot. Recruit faster, smarter.",
    href: "/cvs",
  },
];
const DocumentSolutionChooser = () => {
  const [selectedId, setSelectedId] = useState("");

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Choose Your Document Solution
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Select The Specific Documentation Service You Need To Enhance Your
            Business Operations.
          </p>
        </div>

        {/* Solutions List */}
        <div className="space-y-6">
          {solutionsData.map((solution) => {
            const isSelected = selectedId === solution.id;

            return (
              <Link href={solution.href} key={solution.id} className="block">
                <div
                  onClick={() => setSelectedId(solution.id)}
                  className={`w-full text-left p-8 rounded-2xl transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-4 
                    bg-white text-gray-900 border border-gray-300 shadow-sm hover:shadow-lg hover:border-gray-400 hover:-translate-y-1
                  `}
                >
                  <h3 className="text-xl font-bold">{solution.title}</h3>
                  <p
                    className={`mt-2 text-base ${
                      isSelected ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {solution.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DocumentSolutionChooser;
