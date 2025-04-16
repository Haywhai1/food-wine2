import React, { useEffect, useState } from "react";
import { apiClient } from "../../../shared/client";

const PopularDishes = () => {

  const [menu, setMenu] = useState([]);

  useEffect(() => {
      const fetchMenu = async () => {
          try {
              const response = await apiClient.get('/menu')
              setMenu(response.data); 
              console.log(response.data);
          } catch (error) {
              console.error('Error fetching menu', error);
          }
      };
  
      fetchMenu(); 
  }, []); 
  

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

      <ul className="flex flex-wrap gap-6 md:pt-10 pt-6 md:p-20 justify-center md:justify-between">
  {menu.map((menuItem, index) => (
    <li
      key={index}
      className="md:w-[230px] w-full bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={menuItem.image}
        alt={menuItem.name}
        className="w-full md:h-48 h-80 object-cover"
      />
      <div className="p-4 flex flex-col items-center space-y-2">
        <h3 className="text-xl md:text-sm font-bold text-black ">{menuItem.name}</h3>
        <button className="px-8 py-1  text-white text-xs rounded ">
          Order Now
        </button>
      </div>
    </li>
  ))}
</ul>


    </div>
  );
};

export default PopularDishes;
