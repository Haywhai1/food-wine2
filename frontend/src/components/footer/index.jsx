import React from "react";

const Footer = () => {
  return (
    <div
      className="p-5 py-15 md:p-20 flex flex-col items-center justify-center leading-none  text-white"
      style={{
        backgroundImage: "url('/images/footer-img.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3 className="text-center max-[499px]:block hidden">Get An Amazing Discount On Your Next Order</h3>
      <h3 className="text-center min-[500px]:block hidden">Join Us To Get An Amazing Discount <br />On Your Next Order</h3>
      <div className="border rounded-full my-4 md:w-[500px] w-[350px] flex items-center justify-between space-x-2 md:space-x-0">
  <input
    type="text"
    placeholder="Your email here"
    className="bg-transparent outline-none pl-6 md:pr-10 w-full"
  />
  <button >
    Subscribe
  </button>
</div>

      </div>
   
  );
};

export default Footer;
