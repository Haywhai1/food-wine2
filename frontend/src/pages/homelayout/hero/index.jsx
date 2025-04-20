import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Hero = ({
  heading = "We Love To Serve The Taste You Love",
  subheading = "From gourmet plates to craft cocktails, we serve up the perfect mix of bold taste and good vibes.",
  showOrderButton = true,
  backgroundImage = "images/hero-img.png",
  fullHeight = true,
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleMenuDropdown = () => setMenuDropdownOpen(!menuDropdownOpen);

  // ✨ Close dropdown on scroll
  useEffect(() => {
    const handleScroll = () => setMenuDropdownOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✨ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`w-full ${fullHeight ? "h-screen" : "min-h-[46vh] md:min-h-[52vh]"} relative`}>
      <img
        className="absolute top-0 left-0 h-full w-full object-cover"
        src={backgroundImage}
        alt="hero background"
      />

      <div className="w-full absolute top-0 h-full flex flex-col text-white">
        <div className="m-10 ml-5 mr-5  items-center justify-between flex border-[0.8px] rounded-full">
          <h1
            className="ml-4"
            style={{ fontFamily: '"MuseoModerno",sans-serif' }}
          >
            FOOD&WINE
          </h1>

          <ul className="hidden md:flex " style={{ fontFamily: '"Inter", sans-serif' }}>
            <li>
              <button
                onClick={() => navigate("/")}
                style={{ color: currentPath === "/" ? "#FF8F08" : "#fff" }}
                className="button2 hover:text-orange-400 transition duration-200"
              >
                Home
              </button>
            </li>

            {/* Menu dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={toggleMenuDropdown}
                style={{
                  color:
                    currentPath.startsWith("/menu") ||
                    currentPath.startsWith("/restaurant") ||
                    currentPath.startsWith("/bar")
                      ? "#FF8F08"
                      : "#fff",
                }}
                
                className="button2 hover:text-orange-400 transition duration-200"
              >
                Menu
              </button>
              {menuDropdownOpen && (
                <div className="absolute top-full left-0 bg-white text-black font-bold px-6 py-4 rounded-lg shadow-lg z-10 transition-all duration-300">
                  <Link
                    to="/restaurant"
                    className="block px-4 py-2 hover:bg-[#ff8f08] hover:text-white transition duration-200"
                  >
                    Restaurant
                  </Link>
                  <Link
                    to="/bar"
                    className="block px-4 py-2 hover:bg-[#ff8f08] hover:text-white transition duration-200"
                  >
                    Bar
                  </Link>
                </div>
              )}
            </li>

            <li>
              <button
                onClick={() => navigate("/locations")}
                style={{ color: currentPath === "/locations" ? "#FF8F08" : "#fff" }}
                className="button2 hover:text-orange-400 transition duration-200"
              >
                Locations
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/about")}
                style={{ color: currentPath === "/about" ? "#FF8F08" : "#fff" }}
                className="button2 hover:text-orange-400 transition duration-200"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/contact")}
                style={{ color: currentPath === "/contact" ? "#FF8F08" : "#fff" }}
                className="button2 hover:text-orange-400 transition duration-200"
              >
                Contact
              </button>
            </li>
          </ul>

          <div className="flex items-center gap-2 ">
            <FaShoppingCart className="text-white text-xl cursor-pointer hover:text-[#ff8f08] transition-colors duration-300" />
            <button>Book Now</button>
          </div>
        </div>

        <div
  className={`text-center p-6 ${
    currentPath === "/" ? "mt-18 md:mt-12" : "mt-0 md:mt-0"
  }`}
>
          <h1
            className="text-6xl pb-4 md:text-7xl leading-9 md:leading-16"
            style={{ fontFamily: '"Darker Grotesque", sans-serif' }}
          >
            {heading}
          </h1>
          <p
            className="mt-0 mb-4 md:text-xl"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            {subheading}
          </p>
          {showOrderButton && <button>Order Now</button>}
        </div>
      </div>
    </div>
  );
};

export default Hero;
