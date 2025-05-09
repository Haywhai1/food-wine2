import React from "react";
import { useNavigate } from "react-router-dom";

const GetReady = () => {
  const navigate = useNavigate();
  return (
    <div
      className="max-w-8xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-5 py-10 md:p-20"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      
      <h3 className="sm:hidden">Get Ready To Book a Seat For Your Comfort</h3>

      {/* Div 2 - Image */}
      <div className="flex items-center justify-center h-full md:hidden">
        <img
          src="images/getReady-img.png"
          alt="Image 1"
          className="w-full h-full object-cover "
        />
      </div>
      {/* Div 1 - Text */}
      <div className="flex flex-col  justify-center md:p-8 md:pl-0  gap-2   ">
        <h3 className="hidden sm:block">Get Ready To Book a Seat For Your Comfort</h3>
        <p>
          Planning a romantic evening, a catch-up with friends or just craving
          something special? Your perfect table is just a few clicks away.
        </p>
        <p>
          Our space blends comfort and elegance, setting the mood for fresh,
          flavorful dishes and memorable moments
        </p>
        <p>
          Book ahead to skip the wait and savor the moment from the very first
          bite.
        </p>
        <button className="self-start mb-3 sm:mb-0" onClick={() => navigate("/restaurant")}>
          BOOK NOW
        </button>
      </div>

      {/* Div 2 - Image */}
      <div className="hidden items-center justify-center h-full md:flex">
        <img
          src="images/getReady-img.png"
          alt="Image 1"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
       
      <h3 className="sm:hidden">Your Spot at the Bar Awaits</h3>

      {/* Div 3 - Image */}
      <div className="flex items-center justify-center h-full">
        <img
          src="images/getReady-img2.png"
          alt="Image 2"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Div 4 - Text */}
      <div className="flex flex-col  justify-center md:p-4 md:pr-0 gap-2 h-full ">
        <h3 className="hidden sm:block">Your Spot at the Bar Awaits</h3>
        <p>Mixing Traditions, Creating Tastes and flavors without borders.</p>
        <p>
          Immerse yourself in the ultimate cocktail experience. Our expert
          mixologists are dedicated to crafting bold, innovative drinks that
          blend traditional flavors with modern twists, using only the freshest
          ingredients and cutting-edge techniques.
        </p>
        <p>
          Reserve your spot and slide into a scene of curated music, creative
          mixology, and great conversations.
        </p>
        <button className="self-start" onClick={() => navigate("/bar")}>
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default GetReady;
