import React, { useEffect, useState } from "react";
import { apiClient } from "../../../shared/client";
import { FaShoppingCart } from "react-icons/fa";


const PopularDishes = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await apiClient.get("/menu");
        setMenu(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching menu", error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div className="bg-[#4d2c04] text-white md:text-center p-5 pb-10 md:pb-0 w-full">
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
            <div className="p-4 flex flex-col space-y-2">
              <h3 className="text-xl md:text-sm font-bold text-black text-center ">
                {menuItem.name}
              </h3>
              <div className="flex justify-between items-center text-black">
                {/* Stars and Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < Math.floor(menuItem.rating)
                          ? "text-[#ff8f08]"
                          : "text-gray-400"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="ml-1 text-sm font-semibold text-black">
                    {menuItem.rating}
                  </span>
                </div>

                {/* Price */}
                <p className="text-sm font-semibold text-[#ff8f08]">
                  {`#${menuItem.price}`}
                </p>
              </div>
              <button className="px-8 py-1 bg-[#ff8f08] text-white text-lg rounded-full flex items-center justify-center gap-2">
  Order Now <FaShoppingCart className="text-white text-xl" />
</button>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularDishes;
