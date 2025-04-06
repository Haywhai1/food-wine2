import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen ">
      <img
        className="top-0 left-0 h-full w-full object-cover"
        src="images/Rectangle 50.png"
        alt="/"
      />
      <div className="w-full absolute top-0 h-full flex flex-col text-white">
        <div className="m-10 ml-2 mr-2 md:m-20 items-center justify-between flex border rounded-full ">
          <h1 className='ml-4'>FOOD&WINE</h1>
          <ul className="hidden md:flex md:gap-10">
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <button>Book Now</button>
        </div>
        
        <div className="justify-center text-center md:mt-6 mt-20">
          <h1 className=" font-bold text-4xl md:text-6xl ">
            Flavors That Sizzle <br /> Spirit That Spark
          </h1>
          <p className=" p-3 pb-2 md:pl-70 md:pr-70 md:text-2xl">
            From gourmet plates to craft cocktails, we serve up the perfect mix
            of bold taste and good vibes.
          </p>
          <button>Order Now</button>
        </div>
        
        <ul className="flex  md:hidden justify-between mt-auto m-6">
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
      </div>
    </div>
  );
};

export default Hero;
