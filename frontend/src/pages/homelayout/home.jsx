import React from "react";
import Hero from "./hero";
import About from "./about";
import GetReady from "./getReady";
import DietFeeding from "./dietFeeding";
import HowToOrder from "./howToOrder";
import HealthyChoice from "./healthyChoice";
import Footer from "../../components/footer";
import PopularDishes from "./popularDishes";
import CustomerReview from "./ourReview";

const Home = () => {
  return (
    <div>
      <Hero
        heading={<>We Love To Serve <br /> The Taste You Love</>}
        subheading="From gourmet plates to craft cocktails, we serve up the perfect mix of bold taste and good vibes."
      />

      <About />
      <PopularDishes />
      <GetReady />
      <DietFeeding />
      <HowToOrder />
      <HealthyChoice />
      <CustomerReview />
      <Footer />
    </div>
  );
};

export default Home;
