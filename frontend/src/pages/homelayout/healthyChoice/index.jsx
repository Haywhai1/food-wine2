import React from "react";

const HealthyChoice = () => {
  return (
    <div
      className="w-full h-[45vh] md:h-[60vh] flex bg-cover bg-center px-5 md:px-20"
      style={{ backgroundImage: "url('images/healthyChoice.png')" }}
    >
      {/* Content Div on the Right */}
      <div
        className=" flex justify-center sm:justify-end w-full "
        style={{ fontFamily: '"Inter", sans-serif' }}
      >
        <div className="flex justify-center flex-col  text-white">
          <h3
            className="text-3xl md:text-4xl sm:self-end"
            style={{
              fontFamily: '"Darker Grotesque", sans-serif',
              fontWeight: 700,
            }}
          >
            Healthy Choices,
          </h3>
          <h3
            className="text-3xl md:text-4xl sm:self-end "
            style={{
              fontFamily: '"Darker Grotesque", sans-serif',
              fontWeight: 700,
            }}
          >
            Happy You!
          </h3>
          <p className="text-lg md:text-xl sm:self-end">
            Learn how to balance your meals, stay hydrated,
          </p>
          <p className="text-lg md:text-xl sm:self-end">
            {" "}
            and make choices that fuel your lifestyle
          </p>
          <button className="mt-3 self-start sm:self-end">BOOK NOW</button>
        </div>
      </div>
    </div>
  );
};

export default HealthyChoice;
