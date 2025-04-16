import React from "react";

const Footer = () => {
  return (
    <div
      className="w-full relative h-[40vh]"
      style={{ backgroundImage: "url('images/footer-img.png')" }}
    >
      {/* <img
        src="images/footer-img.png"
        alt=""
        className="top-0 left-0 w-full h-full object-cover"
      /> */}
      <div className="w-full absolute top-0 h-full flex flex-col text-white justify-center items-center">
        <div className="flex flex-col justify-center items-center p-5">
          <h3
            className="text-3xl"
            style={{
              fontFamily: '"Darker Grotesque", sans-serif',
              fontWeight: 700,
            }}
          >
            Join Us To Get An Amazing Discount On Your Next Order
          </h3>
          <div className="relative items-center pt-4 ">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-2 pl-2 focus:outline-none border rounded-full text-white"
            />
            <button className="absolute right-0 top-9 -translate-y-1/2   ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
