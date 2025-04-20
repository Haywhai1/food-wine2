import React from "react";

const Exclusive = () => {
  return (
    <div className="max-w-[1400px] m-auto p-5 md:p-20 md:pb-10 grid lg:grid-cols-2 gap-8 h-auto  ">
      {/* div1 - Text Section */}
      <div className="md:flex flex-col h-full md:justify-center ">
        <h3 className="text-2xl md:text-4xl">
          Exclusive Suite: Private Dinning Room Experince
        </h3>
        <p className="text-2xl py-2">
        Modern private dining with audiovisual equipment, personalized service, custom catering for 12, private bar, lounge, and business center access—ideal for executive meetings.
        </p>
        <p className="pb-1">Minimum of <b>#50,000</b> reservation fee.</p>
        <button className="self-start">Book Now</button>
      </div>

      <div className="grid grid-cols-2 h-[45vh] md:h-[70vh] gap-2">
        <div className="row-span-4 col-span-1 md:row-span-6 rounded-lg overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="images/exclusive1-img.png"
            alt="/"
          />
        </div>

        <div className="row-span-2 md:row-span-3 rounded-lg overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="images/exclusive2-img.png"
            alt="/"
          />
        </div>

        <div className="row-span-2 md:row-span-3 rounded-lg overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="images/exclusive3-img.png"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Exclusive;
