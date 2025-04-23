import React from "react";

const DietFeeding = () => {
  return (
    <div
      className="w-full h-[45vh] md:h-[60vh] flex bg-cover bg-center p-5 md:p-20"
      style={{ backgroundImage: "url('images/dietFeeding-img.png')" }}
    >
      {/* Content Div on the Right */}
      <div
        className=" flex justify-center sm:justify-start w-full"
        style={{ fontFamily: '"Inter", sans-serif' }}
      >
        <div className="flex justify-center flex-col  text-white">
          <h3>
            Feed Your Diets,
            <br />
            Save Your Wallet!
          </h3>

          <p>Enjoy the flavor you love without the guilt of overspending.</p>
          <p>
            Treat yourself to delicious meal while keeping your pocket in check.
          </p>
          <button className=" mt-3 self-start ">Get 20% off this week</button>
        </div>
      </div>
    </div>
  );
};

export default DietFeeding;
