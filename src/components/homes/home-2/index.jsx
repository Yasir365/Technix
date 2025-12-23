import React from "react";
import HeroArea from "./hero-area";
import OfferArea from "./offer-area";
import BusinessArea from "./business-area";
import CounterArea from "./counter-area";
import IndustryArea from "../../../common/industry-area";
import FeatureArea from "./feature-area";
import BrandArea from "./brand-area";
import BlogArea from "./blog-area";
import TestimonialArea from "./testimonial-area";
import CtaArea from "./cta-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";

const HomeTwo = () => {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export default HomeTwo;
