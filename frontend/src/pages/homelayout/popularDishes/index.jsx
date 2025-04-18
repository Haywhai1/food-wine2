import React, { useEffect, useState } from "react";
import { apiClient } from "../../../shared/client";
import { FaShoppingCart } from "react-icons/fa";

const PopularDishes = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true); // Start loading
        const response = await apiClient.get("/menu");
        setMenu(response.data);
      } catch (error) {
        console.error("Error fetching menu", error);
      } finally {
        setLoading(false); // End loading
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
      <p className="text-xl md:px-2" style={{ fontFamily: '"Inter", sans-serif' }}>
        These are the crowd-pleasers, our signature dishes that keep guests
        coming back for more.
      </p>

      {/* Spinner */}
      {loading && (
        <div className="flex justify-center items-center py-20">
          <div className="w-12 h-12 border-4 border-[#ff8f08] border-t-transparent rounded-full animate-spin animate-pulse"></div>
        </div>
      )}

      {/* Menu Items */}
      {!loading && (
        <ul className="flex flex-wrap gap-6 md:gap-4 md:pt-10 pt-6 md:p-14 justify-center sm:justify-around md:justify-between">
          {menu.slice(0, 4).map((menuItem, index) => (
            <li
              key={index}
              className="md:w-[260px] w-full sm:w-[280px] bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={menuItem.image}
                alt={menuItem.name}
                className="w-full md:h-52 h-80 sm:h-56 object-cover"
              />
              <div className="p-2 pb-3 flex flex-col space-y-1">
                <h3 className="text-xl md:text-sm sm:text-base font-bold text-black text-center">
                  {menuItem.name}
                </h3>
                <div className="flex justify-between items-center text-black">
                  {/* Stars and Rating */}
                  <div className="flex items-center  px-2">
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
                  <p className="text-sm font-semibold text-[#ff8f08] px-2">
                    {`#${menuItem.price}`}
                  </p>
                </div>
                <button className="px-8 py-0 bg-[#ff8f08] text-white text-lg rounded-full flex items-center justify-center gap-2">
                  Order Now <FaShoppingCart className="text-white text-xl" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PopularDishes;
