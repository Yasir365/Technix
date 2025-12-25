import React from "react";
import HeroArea from "./hero-area";
import OfferArea from "./offer-area";
import BusinessArea from "./business-area";
import CounterArea from "./counter-area";
import IndustryArea from "../../common/industry-area";
import FeatureArea from "./feature-area";
import BrandArea from "./brand-area";
import BlogArea from "./blog-area";
import TestimonialArea from "./testimonial-area";
import CtaArea from "./cta-area";

const Home = () => {
  return (
    <main>
      <HeroArea />
      <OfferArea />
      <BusinessArea />
      <CounterArea />
      <IndustryArea />
      <FeatureArea />
      <BrandArea />
      <BlogArea />
      <TestimonialArea />
      <CtaArea />
    </main>
  );
};

export default Home;
