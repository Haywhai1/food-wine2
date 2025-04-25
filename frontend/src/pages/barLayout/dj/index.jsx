import React from 'react'

const Dj = () => {
  return (
    <div
  className="p-5 py-10 md:p-20 flex flex-col items-end leading-none  text-white"
  style={{
    backgroundImage: "url('/images/Dj.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <h3 className='text-end text-2xl sm:text-3xl md:text-4xl'>DJ Chicken Live In Abuja! <br/>Friday, April 19, 2025</h3>
{/* Short version: only for <500px */}
<p className="text-end leading-snug max-[499px]:block hidden mb-2">
  DJ Chicken is bringing the heat.<br />
  Good vibes. Don’t miss it!
</p>

{/* Full version: for ≥500px */}
<p className="text-end leading-snug min-[500px]:block hidden py-2">
  Get ready for an unforgettable night as DJ Chicken <br />
  brings the heat with non-stop beats, good vibes <br />
  and the best party in town. Don’t miss it!
</p>

<button className=''>Get Your Tickets Now</button>

</div>

  )
}

export default Dj