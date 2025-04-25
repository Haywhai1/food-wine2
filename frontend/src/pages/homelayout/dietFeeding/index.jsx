import React from "react";

const DietFeeding = () => {
  return (
    <div
      className="p-5 py-15 md:p-20 flex flex-col items-start leading-none  text-white"
      style={{
        backgroundImage: "url('/images/dietFeeding-img.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3 className="leading-7 sm:leading-10">
        Feed Your Diets,
        <br />
        Save Your Wallet!
      </h3>
      {/* Short version: only for <500px */}
      <p className=" leading-snug max-[499px]:block hidden py-2">
        Enjoy your favorite flavor,
        <br />
        while keeping your pocket in check.
      </p>

      {/* Full version: for ≥500px */}
      <p className="leading-snug min-[500px]:block hidden py-2">
        Enjoy the flavor you love without the guilt of overspending.
        <br />
        Treat yourself to delicious meal while keeping your pocket in check.
      </p>

      <button className="">Get 20% off this week</button>
    </div>
  );
};

export default DietFeeding;
