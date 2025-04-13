import React from "react";

const HowToOrder = () => {
  return (
    <>
    <div className="pt-10 max-w-7xl min-h-screen items-center justify-center">
      <div className="w-full">
        <h3 className="text-3xl md:text-4xl text-center font-semibold">How To Order</h3>
        <p className="text-lg md:text-xl text-center text-gray-600 mt-2 ">
          Simplified way to order online or in-person.
        </p>

        
      </div>
    

<div className="max-w-8xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 p-10 ">
    
    <div className="flex items-center justify-center md:h-[85vh] w-full">
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
              <img src="images/order-icon.png" alt="Select Dish" className="w-6 h-6 mt-1" />
              <div>
                <h4 className="text-base md:text-lg font-semibold">Select A Dish</h4>
                <p className="text-sm md:text-base text-gray-700">
                  Take your time to explore our variety of options and select the ones that sound most appealing to you.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <img src="images/order-icon.png" alt="Confirm Order" className="w-6 h-6 mt-1" />
              <div>
                <h4 className="text-base md:text-lg font-semibold">Confirm Order</h4>
                <p className="text-sm md:text-base text-gray-700">
                  Review your selection and confirm your order details to ensure everything is correct. 
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <img src="images/order-icon.png" alt="Make Payment" className="w-6 h-6 mt-1" />
              <div>
                <h4 className="text-base md:text-lg font-semibold">Make Payment</h4>
                <p className="text-sm md:text-base text-gray-700">
                  Enter your payment information and complete your order securely. We use a secure payment system to protect your financial information.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-4">
              <img src="images/order-icon.png" alt="Wait for Delivery" className="w-6 h-6 mt-1" />
              <div>
                <h4 className="text-base md:text-lg font-semibold">Wait for Delivery</h4>
                <p className="text-sm md:text-base text-gray-700">
                  Relax and wait for your food to arrive. Our delivery team will bring your order to you hot and fresh, so you can enjoy it at your convenience.
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
