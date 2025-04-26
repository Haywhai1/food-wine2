import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Mix = () => {
  const paginationRef = useRef(null); 

  const items = [
    {
      imageUrl: "/images/mix1.png",
      name: "Samantha",
      role: "Senior Mixologist",
    },
    {
      imageUrl: "/images/mix2.png",
      name: "Derek",
      role: "Flair Bartender",
    },
    {
      imageUrl: "/images/mix3.png",
      name: "Ava",
      role: "Craft Cocktail Expert",
    },
    {
      imageUrl: "/images/mix5.jpg",
      name: "Liam",
      role: "Seasonal Drink Specialist",
    },
    {
      imageUrl: "/images/mix4.jpg",
      name: "Nora",
      role: "Classic Cocktail Creator",
    },
    {
      imageUrl: "/images/mix6.jpg",
      name: "Ethan",
      role: "Bar Manager",
    },
  ];
  

  return (
    <div className="p-5 py-10 md:p-20  md:py-10 md:text-center">
      <h3 className="">Meet Our Mixologists</h3>
      <p className="py-2">
        Meet the creative minds behind the bar and crafting cocktails that
        elevate every sip.
      </p>

      <div className="mt-5 ">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: paginationRef.current,
            clickable: true,
          }}
          onSwiper={(swiper) => {
            // Wait until ref is set to mount pagination
            setTimeout(() => {
              if (
                swiper.params.pagination &&
                typeof swiper.params.pagination === "object"
              ) {
                swiper.params.pagination.el = paginationRef.current;
                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
              }
            });
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
            <div
              className="relative w-full h-96 rounded-lg overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-4">
                <h5 className="text-lg font-semibold">{item.name}</h5>
                <p className="text-sm">{item.role}</p>
              </div>
            </div>
          </SwiperSlide>
          
          ))}
        </Swiper>

        {/* Dots */}
        <div
          ref={paginationRef}
          className="custom-swiper-pagination mt-6 flex justify-center gap-2"
        ></div>
      </div>
    </div>
  );
};

export default Mix;
