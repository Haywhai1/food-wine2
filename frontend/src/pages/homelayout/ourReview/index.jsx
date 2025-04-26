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
        "The place is really nice with a refreshing atmosphere. The staff are so welcoming — you should definitely check it out!",
      rating: 5.5,
    },
    {
      imageUrl: "/images/mix2.png",
      name: "Utman Bello",
      review:
        "Omg! Food and Wine is the best restaurant I’ve been to. I had an amazing experience with my friend — highly recommend!",
      rating: 4.5,
    },
    {
      imageUrl: "/images/mix3.png",
      name: "Helen Adeleke",
      review:
        "It’s always their bar section for me — great service, and I love that you can make a reservation without worrying about seating.",
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
    <div className="p-5 py-20 md:py-15 md:p-20">
      <h3 className="pb-2 md:text-center">What Our Customers Say</h3>
      <p className=" md:text-center">
      Real people, real experiences, rave reviews, see what our customers have
      to say about us!
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
              <div className="flex flex-col justify-between h-96 md:h-80 shadow-lg w-full p-6  rounded-lg overflow-hidden bg-[#FFF5E9] text-black text-center">
                <p>{item.review}"</p>
                <div>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-9 h-8 rounded-full mx-auto my-3 object-cover"
                  />
                  <div className="flex items-center justify-center gap-1 my-2">
                    {/* Filled stars */}
                    {[...Array(Math.floor(item.rating - 0.5))].map((_, i) => (
                      <svg
                        key={`filled-${i}`}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="#ff8f08"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.571 8.332 1.151-6.064 5.852 1.48 8.306L12 18.896l-7.416 4.571 1.48-8.306L0 9.309l8.332-1.151z" />
                      </svg>
                    ))}

                    {/* Ash stars to complete 5 */}
                    {[...Array(5 - Math.floor(item.rating - 0.5))].map(
                      (_, i) => (
                        <svg
                          key={`empty-${i}`}
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="#d1d5db" // Tailwind's gray-300
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .587l3.668 7.571 8.332 1.151-6.064 5.852 1.48 8.306L12 18.896l-7.416 4.571 1.48-8.306L0 9.309l8.332-1.151z" />
                        </svg>
                      )
                    )}
                    <span>{item.rating}</span>
                  </div>
                  <p>
                    <b>{item.name}</b>
                  </p>
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
