import React from "react";

const HowToOrder = () => {
  return (
    <>
      <div className="md:pt-10 pt-5 max-w-7xl min-h-screen items-center justify-center">
        <div className="w-full">
          <h3
            className="text-3xl md:text-4xl text-center font-semibold"
            style={{
              fontFamily: '"Darker Grotesque", sans-serif',
              fontWeight: 700,
            }}
          >
            How To Order
          </h3>
          <p
            className="text-lg md:text-xl text-center text-gray-600  "
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Simplified way to order online or in-person.
          </p>
        </div>

        <div className="max-w-8xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 pt-2 p-5 md:p-20 md:pt-4">
          <div className="flex items-center justify-center w-full">
            <img
              src="images/howToOrder-img.png"
              alt="Image 1"
              className="  w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col  justify-center md:p-2 md:pl-0  gap-2   ">
            {/* Steps Section */}

            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <img
                src="images/order-icon.png"
                alt="Select Dish"
                className="w-6 h-6 mt-1"
              />
              <div>
                <h4
                  className="text-base md:text-lg font-semibold"
                  style={{
                    fontFamily: '"Darker Grotesque", sans-serif',
                    fontWeight: 700,
                  }}
                >
                  Select A Dish
                </h4>
                <p
                  className="text-sm md:text-base text-gray-700"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Take your time to explore our variety of options and select
                  the ones that sound most appealing to you.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <img
                src="images/order-icon.png"
                alt="Confirm Order"
                className="w-6 h-6 mt-1"
              />
              <div>
                <h4
                  className="text-base md:text-lg font-semibold"
                  style={{
                    fontFamily: '"Darker Grotesque", sans-serif',
                    fontWeight: 700,
                  }}
                >
                  Confirm Order
                </h4>
                <p
                  className="text-sm md:text-base text-gray-700"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Review your selection and confirm your order details to ensure
                  everything is correct.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <img
                src="images/order-icon.png"
                alt="Make Payment"
                className="w-6 h-6 mt-1"
              />
              <div>
                <h4
                  className="text-base md:text-lg font-semibold"
                  style={{
                    fontFamily: '"Darker Grotesque", sans-serif',
                    fontWeight: 700,
                  }}
                >
                  Make Payment
                </h4>
                <p
                  className="text-sm md:text-base text-gray-700"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Enter your payment information and complete your order
                  securely. We use a secure payment system to protect your
                  financial information.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-4">
              <img
                src="images/order-icon.png"
                alt="Wait for Delivery"
                className="w-6 h-6 mt-1"
              />
              <div>
                <h4
                  className="text-base md:text-lg font-semibold"
                  style={{
                    fontFamily: '"Darker Grotesque", sans-serif',
                    fontWeight: 700,
                  }}
                >
                  Wait for Delivery
                </h4>
                <p
                  className="text-sm md:text-base text-gray-700"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Relax and wait for your food to arrive. Our delivery team will
                  bring your order to you hot and fresh, so you can enjoy it at
                  your convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToOrder;
