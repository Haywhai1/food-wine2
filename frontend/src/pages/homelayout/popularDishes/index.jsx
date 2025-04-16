import React from "react";

const PopularDishes = () => {
  return (
    <div className="bg-[#4d2c04] text-white md:text-center p-5  w-full">
      <h1
        className="text-4xl md:text-5xl mb-2 "
        style={{
          fontFamily: '"Darker Grotesque", sans-serif',
          fontWeight: 700,
        }}
      >
        Our Popular Dishes
      </h1>
      <p className="text-xl" style={{ fontFamily: '"Inter", sans-serif' }}>
        These are the crowd-pleasers, our signature dishes that keep guests
        coming back for more.
      </p>
    </div>
  );
};

export default PopularDishes;
