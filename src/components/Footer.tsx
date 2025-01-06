import { Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#050B20] text-white py-12">
      <div className="px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-xl font-bold mb-2">BOXCARS</h2>
            <p className="text-sm mb-4 max-w-lg">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.
            </p>
            <div className="flex items-center space-x-4">
              <span className="inline-block border px-4 py-2 rounded-full">+76 956 039 999</span>
              <span className="inline-block border px-4 py-2 rounded-full">ali@boxcars.com</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Join BoxCar</h3>
            <p className="text-sm mb-4 max-w-lg">
              Receive pricing updates, shopping tips & more!
            </p>
            <form className="flex items-center space-x-4">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-[#0B112A] text-sm text-white px-4 py-2 rounded-md border border-gray-600 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-2 rounded-md"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-12" />

        {/* Bottom Section */}
        <div className="flex flex-wrap gap-10 justify-between">
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Blog</li>
              <li>Services</li>
              <li>FAQs</li>
              <li>Terms</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>Get in Touch</li>
              <li>Help Center</li>
              <li>Live Chat</li>
              <li>How it Works</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Our Brands</h4>
            <ul className="space-y-2 text-sm">
              <li>Toyota</li>
              <li>Porsche</li>
              <li>Audi</li>
              <li>BMW</li>
              <li>Ford</li>
              <li>Nissan</li>
              <li>Peugeot</li>
              <li>Volkswagen</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Vehicles Type</h4>
            <ul className="space-y-2 text-sm">
              <li>Sedan</li>
              <li>Hatchback</li>
              <li>SUV</li>
              <li>Hybrid</li>
              <li>Electric</li>
              <li>Coupe</li>
              <li>Truck</li>
              <li>Convertible</li>
            </ul>
          </div>
          <div>
            <div>
              <h4 className="font-semibold mb-4">Our Mobile App</h4>
              <ul className="space-y-4">
                <li>
                  <button className="bg-[#0B112A] px-4 py-2 text-sm rounded-md w-full">
                    Download on the Apple Store
                  </button>
                </li>
                <li>
                  <button className="bg-[#0B112A] px-4 py-2 text-sm rounded-md w-full">
                    Get it on Google Play
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold my-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <Instagram />
                <Twitter />
                <Linkedin />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-12" />

        {/* Copyright */}
        <div className="flex justify-between text-sm mt-12">
          <p>&copy; 2023 Boxcars.com. All rights reserved.</p>
          <p>
            <a href="#" className="hover:underline">Terms & Conditions</a> &bull; <a href="#" className="hover:underline">Privacy Notice</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;