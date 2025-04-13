import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen ">
      <img
        className="top-0 left-0 h-full w-full object-cover"
        src="images/hero-img.png"
        alt="/"
      />
      <div className="w-full absolute top-0 h-full flex flex-col text-white">
        <div className="m-10 ml-4 mr-4 md:m-16 items-center justify-between flex border-[0.8px] rounded-full ">
          <h1 className='ml-4' style={{ fontFamily: "MuseoModerno sans-serif", fontWeight: 700}}>FOOD&WINE</h1>
          <ul className="hidden md:flex md:gap-10" style={{ fontFamily: "Inter, sans-serif"}}>
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <button>Book Now</button>
        </div>
        
        <div className=" text-center md:mt-6 p-6 mt-20 ">
          <h1 className=" font-extrabold text-4xl py-4 md:text-7xl leading-8 md:leading-14" style={{ fontFamily: "Darker Grotesque, sans-serif"}}>
            We Serve The Taste <br/>You Love
          </h1>
          <p className="mt-2 mb-4 md:text-xl" style={{ fontFamily: "Inter, sans-serif"}}>
            From gourmet plates to craft cocktails, we serve up the perfect mix
            of bold taste and good vibes.
          </p>
          <button>Order Now</button>
        </div>
        
        {/* <ul className="flex  md:hidden justify-between mt-auto m-6">
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
          </ul> */}
      </div>
    </div>
  );
};

export default Hero;
