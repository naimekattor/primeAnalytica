"use client";
import React, { useState } from "react";
import InputField from "./InputField";
import Image from "next/image";

const ContactUsForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    town: "",
    location: "",
    message: "",
  });

  // Handler to update state on input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission,
    // e.g., send the data to an API endpoint.
    console.log("Form Submitted:", formData);
    alert("Thank you for your message!");
  };

  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Have a question? Reach out to us!
          </p>
        </div>

        {/* Contact Form */}
        <div className="mt-12">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
          >
            <InputField
              id="firstName"
              label="First name"
              placeholder="Enter here"
            />
            <InputField
              id="lastName"
              label="Last name"
              placeholder="Enter here"
            />
            <InputField
              id="email"
              label="Email"
              type="email"
              placeholder="Enter here"
            />
            <InputField
              id="phoneNumber"
              label="Phone number"
              type="tel"
              placeholder="Enter here"
            />
            <InputField id="town" label="Town" placeholder="Enter here" />
            <InputField
              id="location"
              label="Location"
              placeholder="Enter here"
            />
            <div className="md:col-span-2">
              <InputField
                id="message"
                label="How can we help you?"
                placeholder="Enter here"
                isTextArea
              />
            </div>
            <div className="md:col-span-2 text-center space-x-2">
              <button
                type="submit"
                className="inline-flex justify-center py-3 px-8 border shadow-sm text-base font-medium rounded-md text-[#020202] border-[#020202] cursor-pointer"
              >
                Send Message
              </button>
              <a
                href="https://wa.me/01851613453"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={50}
                  height={50}
                  alt="whatsapp"
                  src="/images/whatsapp.png"
                  className="inline-flex shadow-sm text-base font-medium rounded-md text-[#020202] border-[#020202] cursor-pointer w-[50px] h-[50px] object-cover"
                />
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
