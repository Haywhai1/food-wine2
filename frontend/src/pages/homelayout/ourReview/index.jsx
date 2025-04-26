import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const CustomerReview = () => {
  const paginationRef = useRef(null);
  const items = [
    {
      imageUrl: "/images/mix1.png",
      name: "Daniel Ogenne",
      review:
        "The place is really nice and cool. The atmosphere is very refreshing and i love the way their staffs treat customers. You should really check them out, i promise you won’t regret it.",
      rating: 5.5,
    },
    {
      imageUrl: "/images/mix2.png",
      name: "Utman Bello",
      review: "Entertaining and professional. Made our event unforgettable!",
      rating: 4.5,
    },
    {
      imageUrl: "/images/mix3.png",
      name: "Helen Adeleke",
      review: "Delicious cocktails and a great vibe all around.",
      rating: 5.5,
    },
    {
      imageUrl: "/images/mix5.jpg",
      name: "Titilade Elizabeth",
      review: "The custom drink menu was a huge hit with our guests.",
      rating: 4.5,
    },
    {
      imageUrl: "/images/mix4.jpg",
      name: "Ayobami Olawale",
      review: "Brought energy and elegance — would absolutely book again.",
      rating: 4.5,
    },
    {
      imageUrl: "/images/mix6.jpg",
      name: "Ojo Kuku",
      review:
        "Smooth setup, excellent service, and drinks that wowed everyone.",
      rating: 5.5,
    },
  ];

  return (
    <div className="p-5 py-10 md:py-15 md:p-20">
      <h3 className="pb-2 md:text-center">What Our Customers Say</h3>

      {/* Long version for medium and up */}
      <p className="hidden md:block text-center">
        Real people, real experiences, rave reviews, see what our customers have
        to say about us!
      </p>

      {/* Short version for small screens */}
      <p className="block md:hidden md:text-center">
        Real people, real experiences — hear from them.
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
                swiper?.params?.pagination &&
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
            <div className="flex flex-col justify-between h-72 w-full p-6 rounded-lg overflow-hidden bg-[#FFF5E9] text-black text-center">
              <p className="text-sm italic">"{item.review}"</p>
             <div>
             <img
                src={item.imageUrl}
                alt={item.name}
                className="w-8 h-8 rounded-full mx-auto my-3 object-cover"
              />
              <p className="text-yellow-500 ">{item.rating} ★</p>
              <p><b>{item.name}</b></p>
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

export default CustomerReview;
