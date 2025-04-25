import React from "react";

const HealthyChoice = () => {
  return (
    <div
  className="p-5 py-10 md:p-20 flex flex-col items-end leading-none  text-white"
  style={{
    backgroundImage: "url('/images/healthyChoice.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <h3 className='text-end '>Healthy Choices,<br/>Happy You!</h3>
{/* Short version: only for <500px */}
<p className="text-end leading-snug max-[499px]:block hidden py-2 ">
  Balance your meals, stay hydrated,<br />
  make choices that fuel your lifestyle.
</p>

{/* Full version: for ≥500px */}
<p className="text-end leading-snug min-[500px]:block hidden py-2">
Learn how to balance your meals, stay hydrated, <br />
and make choices that fuel your lifestyle
</p>

<button >BOOK NOW</button>

</div>
  );
};

export default HealthyChoice;
