import React from "react";

const DietFeeding = () => {
  return (
    <>
    <div
      className="w-full h-[45vh] md:h-[60vh] flex bg-cover bg-center p-5 md:p-20"
      style={{ backgroundImage: "url('images/dietFeeding-img.png')" }}
    >
      {/* Content Div on the Right */}
      
        <div className="flex justify-center flex-col leading-none text-white">
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
     
      <div
  className="p-5 py-10 md:p-20 flex flex-col items-start leading-none  text-white"
  style={{
    backgroundImage: "url('/images/healthyChoice.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
<h3>
            Feed Your Diets,
            <br />
            Save Your Wallet!
          </h3>
{/* Short version: only for <500px */}
<p className=" leading-snug max-[499px]:block hidden py-2">
  Balance your meals, stay hydrated,<br />
  make choices that fuel your lifestyle.
</p>

{/* Full version: for ≥500px */}
<p className="leading-snug min-[500px]:block hidden py-2">
Learn how to balance your meals, stay hydrated, <br />
and make choices that fuel your lifestyle
</p>

<button className="">Get 20% off this week</button>

</div>
   </>   
  );
};

export default DietFeeding;
