import React from "react";

const Vip = () => {
  return (
    <div className="max-w-[1400px] m-auto p-5 md:p-20 md:pb-10 grid lg:grid-cols-2 gap-8 h-auto  ">
      {/* div1 - Text Section */}
      <div className="md:flex flex-col h-full md:justify-center ">
        <h3 className="text-2xl md:text-4xl">
          VIP Treatment: Indoor Table Experience
        </h3>
        <p className="text-2xl py-2">
          Exclusive indoor seating for up to 8 guests, occupied by luxurious
          ambiance and soft lighting personalized service, complimentary wine
          pairing and a customized menu tailored to your preferences.
        </p>
        <p className="pb-1">Minimum of <b>#10,000</b> reservation fee.</p>
        <button className="self-start">Book Now</button>
      </div>

      <div className="grid grid-cols-2 h-[45vh] md:h-[70vh] gap-2">
        <div className="row-span-4 col-span-1 md:row-span-6 rounded-lg overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="images/vip1-img.png"
            alt="/"
          />
        </div>

        <div className="row-span-2 md:row-span-3 rounded-lg overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="images/vip2-img.png"
            alt="/"
          />
        </div>

        <div className="row-span-2 md:row-span-3 rounded-lg overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="images/vip3-img.png"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Vip;
