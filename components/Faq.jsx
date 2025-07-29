"use client";
import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const faqData = [
  {
    question:
      "Can the AI handle multiple file formats like PDF, Word, and Excel?",
    answer:
      "Yes, our AI is designed to process a wide variety of file formats, including PDF, Microsoft Word (.doc, .docx), and Excel (.xls, .xlsx), ensuring seamless integration with your existing documents.",
  },
  {
    question: "Is my data secure when I upload files?",
    answer:
      "Absolutely. We prioritize your data's security using end-to-end encryption and industry-standard security protocols. Your files are processed in a secure, isolated environment.",
  },
  {
    question: "What types of documents can the assistant analyze?",
    answer:
      "Our AI assistant can analyze a wide range of hotel-related documents, including sales reports, financial statements, staff CVs, contracts, booking records, and policy manuals. It reads and understands key data points from PDFs, Word documents, and give you quick, accurate answers.",
  },
  {
    question: "Do I need any technical knowledge to use it?",
    answer:
      "Not at all. The platform is designed with a user-friendly interface that requires no technical expertise. If you can use a search engine, you can use our AI assistant.",
  },
  {
    question: "Is it suitable for both small and large hotel businesses?",
    answer:
      "Yes, our solution is fully scalable. It provides valuable insights and efficiency gains for everyone from small boutique hotels to large international hotel chains.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(2);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fffefe] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Have questions? We've got answers. Here's everything you need to
            know about our AI assistant for hotel document management.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
