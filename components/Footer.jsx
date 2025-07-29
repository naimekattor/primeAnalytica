import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedInIcon,
} from "./icons/SocialIcons"; // Adjust path as needed

// Data for footer links for easier management
const footerLinks = {
  collaborators: [
    { name: "Demo company limited", href: "#" },
    { name: "Demo task company", href: "#" },
  ],
  about: [
    { name: "Reviews", href: "#" },
    { name: "Learn more", href: "#" },
  ],
  legal: [
    { name: "Privacy Notice", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Cookies Policy & Settings", href: "#" },
  ],
};

// Social media links
const socialMedia = [
  { name: "Facebook", href: "#", icon: FacebookIcon },
  { name: "Instagram", href: "#", icon: InstagramIcon },
  { name: "Twitter", href: "#", icon: TwitterIcon },
  { name: "LinkedIn", href: "#", icon: LinkedInIcon },
];

const Footer = () => {
  return (
    <footer className="bg-[#241f1f] text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <a href="#" className="inline-block bg-white p-2 rounded-lg">
              {/* Placeholder for the actual logo image */}
              <img
                className="h-12 w-auto"
                src="/images/logo.png"
                alt="PrimeAnalytica Logo"
              />
            </a>
            <p className="mt-4 text-sm leading-6">
              Villa No. 45, Street 12, Khalifa City,
              <br />
              Abu Dhabi, United Arab Emirates
            </p>
            <a
              href="mailto:Demovacanza@vacanzMycost.it.com"
              className="mt-4 block text-sm hover:text-white"
            >
              Demovacanza@vacanzMycost.it.com
            </a>
          </div>

          {/* Column 2: Collaborators */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Our collaborators
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.collaborators.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm hover:text-white">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: About Us */}
          <div>
            <h3 className="text-lg font-semibold text-white">About Us</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.about.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm hover:text-white">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow us on</h3>
            <div className="mt-4 flex space-x-4">
              {socialMedia.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-center md:text-left">
            © 2025 Digital. All rights reserved
          </p>
          <div className="mt-4 md:mt-0 flex justify-center space-x-6">
            {footerLinks.legal.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
