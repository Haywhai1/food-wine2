import React, { useState } from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-3">
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full cursor-pointer"
      >
        <p className="text-base"><b>{title}</b></p>
        <span>{open ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>
      {open && <div className="mt-4 pl-2">{children}</div>}
    </div>
  );
};

const Footer = () => {
  return (
    <>
      {/* First Layer: Background Image & Input */}
      <div
        className="p-5 py-15 md:p-20 flex flex-col items-center justify-center leading-none text-white"
        style={{
          backgroundImage: "url('/images/footer-img.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h3 className="text-center max-[499px]:block hidden">
          Get An Amazing Discount On Your Next Order
        </h3>
        <h3 className="text-center min-[500px]:block hidden">
          Join Us To Get An Amazing Discount <br />
          On Your Next Order
        </h3>
        <div className="border rounded-full my-4 md:w-[500px] w-[350px] flex items-center justify-between space-x-2 md:space-x-0">
          <input
            type="text"
            placeholder="Your email here"
            className="bg-transparent outline-none pl-6 md:pr-10 w-full"
          />
          <button>Subscribe</button>
        </div>
      </div>

      {/* md and above layout */}
      <div className="p-5 py-10 md:p-15 hidden md:flex flex-wrap justify-between gap-4">
        <div className="leading-8">
          <p>Our Social Handles</p>
          <div className="flex space-x-4 mt-2">
            <div className="w-12 h-12 flex items-center justify-center bg-[#512D02] rounded-full">
              <FaTwitter className="text-white w-6 h-6" />
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-[#512D02] rounded-full">
              <FaFacebookF className="text-white w-6 h-6" />
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-[#512D02] rounded-full">
              <FaInstagram className="text-white w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="leading-8">
          <p><b>Quick Links</b></p>
          <span className="block cursor-pointer hover:underline">Home</span>
          <span className="block cursor-pointer hover:underline">Menu</span>
          <span className="block cursor-pointer hover:underline">Location</span>
          <span className="block cursor-pointer hover:underline">Contact</span>
        </div>

        <div className="leading-8">
          <p><b>Company</b></p>
          <span className="block cursor-pointer hover:underline">FAQ’s</span>
          <span className="block cursor-pointer hover:underline">About us</span>
          <span className="block cursor-pointer hover:underline">Privacy & Policy</span>
          <span className="block cursor-pointer hover:underline">Terms & Conditions</span>
        </div>

        <div className="leading-8">
          <p><b>Contact Us</b></p>
          <span className="block cursor-pointer hover:underline">3, Wuse Zone 2, Abuja, FCT.</span>
          <span className="block cursor-pointer hover:underline">+234-810000000</span>
          <span className="block cursor-pointer hover:underline">foodandwine@gmail.com</span>
        </div>
      </div>

      {/* Accordion for sm and smaller */}
      <div className="block md:hidden p-5 pb-10">
        <AccordionItem title="Our Social Handles">
          <div className="flex space-x-8 mt-2">
            <div className="w-10 h-10 flex items-center justify-center bg-[#512D02] rounded-full">
              <FaTwitter className="text-white w-5 h-5" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-[#512D02] rounded-full">
              <FaFacebookF className="text-white w-5 h-5" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-[#512D02] rounded-full">
              <FaInstagram className="text-white w-5 h-5" />
            </div>
          </div>
        </AccordionItem>

        <AccordionItem title="Quick Links">
          <div className="space-y-4">
            <p className="cursor-pointer">Home</p>
            <p className="cursor-pointer">Menu</p>
            <p className="cursor-pointer">Location</p>
            <p className="cursor-pointer">Contact</p>
          </div>
        </AccordionItem>

        <AccordionItem title="Company">
          <div className="space-y-4">
            <p className="cursor-pointer">FAQ’s</p>
            <p className="cursor-pointer">About us</p>
            <p className="cursor-pointer">Privacy & Policy</p>
            <p className="cursor-pointer">Terms & Conditions</p>
          </div>
        </AccordionItem>

        <AccordionItem title="Contact Us">
          <div className="space-y-4">
            <p className="cursor-pointer">3, Wuse Zone 2, Abuja, FCT.</p>
            <p className="cursor-pointer">+234-810000000</p>
            <p className="cursor-pointer">foodandwine@gmail.com</p>
          </div>
        </AccordionItem>
      </div>
    </>
  );
};

export default Footer;
