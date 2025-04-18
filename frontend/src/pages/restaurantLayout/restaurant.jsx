import React, { useEffect, useState } from "react";
import Hero from "../homelayout/hero";
import { apiClient } from "../../shared/client";
import { FaShoppingCart } from "react-icons/fa";

const Restaurant = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get("/menu");
        // Optionally filter only restaurant items
        // setMenu(response.data.filter(item => item.category === "restaurant"));
        setMenu(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching menu", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div>
        <Hero
          heading="Our Restaurant"
          subheading={
            <>
              Indulge in our signature entrees, crafted with fresh, locally <br />
              sourced ingredients prepared to delight your taste buds.
            </>
          }
          backgroundImage="images/restaurantHero-img.png"
          showOrderButton={false}
          fullHeight={false}
        />
      </div>

      {/* Menu Display */}
      <div className="text-white md:text-center p-5 pb-10 md:pb-0 w-full">
        {/* Spinner */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-[#ff8f08] border-t-transparent rounded-full animate-spin animate-pulse"></div>
          </div>
        )}

        {/* Menu Items */}
        {!loading && (
          <ul className="flex flex-wrap gap-6 md:gap-4 md:pt-10 pt-6 md:p-14 justify-center sm:justify-around md:justify-between">
            {menu.map((menuItem, index) => (
              <li
                key={index}
                className="md:w-[260px] w-full sm:w-[280px] bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={menuItem.image}
                  alt={menuItem.name}
                  className="w-full md:h-56 h-80 sm:h-56 object-cover"
                />
                <div className="p-4 flex flex-col space-y-2">
                  <h3 className="text-xl md:text-sm sm:text-base font-bold text-black text-center">
                    {menuItem.name}
                  </h3>
                  <div className="flex justify-between items-center text-black">
                    {/* Rating */}
                    <div className="flex items-center px-2">
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
                      ₦{menuItem.price}
                    </p>
                  </div>

                  <button className="px-8 py-1 bg-[#ff8f08] text-white text-lg rounded-full flex items-center justify-center gap-2">
                    Order Now <FaShoppingCart className="text-white text-xl" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Restaurant;
