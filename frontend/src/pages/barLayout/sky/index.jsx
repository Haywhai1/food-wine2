import React from "react";

const Sky = () => {
  return (
    <div className="max-w-[full] m-auto p-5 md:px-20 md:pb-10 grid lg:grid-cols-2 gap-8 h-auto  ">
      <div className=" hidden md:grid grid-cols-2  h-[50vh] md:h-[70vh] gap-2 ">
        <div className="row-span-4 col-span-1 md:row-span-6 rounded-lg overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="images/sky1-img.png"
            alt="/"
          />
        </div>

        <div className="row-span-2 md:row-span-3 rounded-lg overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="images/sky2-img.png"
            alt="/"
          />
        </div>

        <div className="row-span-2 md:row-span-3 rounded-lg overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="images/sky3-img.png"
            alt="/"
          />
        </div>
      </div>

      {/* div1 - Text Section */}
      <div className="md:flex flex-col h-full md:justify-center ">
        <h3>
          Sky's the limit: Roof Table Experience
        </h3>
        <p className=" py-2">
        Take in breathtaking city skyline views from our exclusive rooftop. Enjoy personalized service, a complimentary champagne toast, and a custom menu. Includes priority access to our bar and lounge, with seating for up to 6 guests.
        </p>
        <p className="pb-1">Minimum of <b>#20,000</b> reservation fee.</p>
        <button className="self-start">Book Now</button>
      </div>

      <div className="md:hidden grid grid-cols-2  h-[45vh] md:h-[70vh] gap-2 ">
        <div className="row-span-4 col-span-1 md:row-span-6 rounded-lg overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="images/sky1-img.png"
            alt="/"
          />
        </div>

        <div className="row-span-2 md:row-span-3 rounded-lg overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="images/sky2-img.png"
            alt="/"
          />
        </div>

        <div className="row-span-2 md:row-span-3 rounded-lg overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="images/sky3-img.png"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Sky;
