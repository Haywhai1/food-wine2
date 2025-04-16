import React from "react";

const About = () => {
  return (
    <div className="max-w-[1400px] m-auto p-5 md:py-10 md:px-20 grid lg:grid-cols-2 gap-6">
      <div className="w-full h-full flex justify-center lg:justify-start items-center">
        <img
          className="object-cover w-[485px] max-w-full h-auto"
          src="images/about-img.png"
          alt="About Food and Wine"
        />
      </div>

      <div
        className=" flex flex-col justify-center "
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        <h1
          className="text-4xl md:text-5xl"
          style={{
            fontFamily: '"Darker Grotesque", sans-serif',
            fontWeight: 700,
          }}
        >
          About Food and Wine
        </h1>

        <p className="pt-2 text-xl">
          At Food and Wine, we believe the best dishes are the ones that remind
          you of childhood.
        </p>
        <p className=" py-2 text-xl">
          A portion of great food should make you feel like you are wrapped in a
          warm blanket. At our location in Wuse or online, you will find the
          best dishes you didn't know you craved.
        </p>
        <p className="pb-2 text-xl">
          {" "}
          We’re more than a restaurant and bar, we’re a neighborhood
          gatheringspot where flavor meets flair and every night feels like the
          weekend.
        </p>
      </div>
    </div>
  );
};

export default About;
