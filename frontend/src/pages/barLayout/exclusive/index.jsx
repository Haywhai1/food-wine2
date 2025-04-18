import React from "react";

const Exclusive = () => {
  return (
    <div className="max-w-[1400px] m-auto p-5 md:p-20 md:pb-10 grid lg:grid-cols-2 gap-4 h-auto  ">
      {/* div1 - Text Section */}
      <div className="md:flex flex-col h-full md:justify-center ">
        <h3 className="text-2xl md:text-4xl">
          Exclusive Suite: Private Dinning Room Experince
        </h3>
        <p className="text-2xl py-3">
          A sleek, modern private dining room with state-of-the-art audiovisual
          equipment personalized service and customized catering for up to 12
          guests Private bar and lounge area plus priority access to our
          business center. Perfect for executive meetings and exclusive
          gatherings.
        </p>
        <p className="pb-6">Minimum of #50,000 reservation fee.</p>
        <button className="self-start">Book Now</button>
      </div>

      <div className="grid grid-cols-2 h-[50vh] md:h-[70vh] gap-2">
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
