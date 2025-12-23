import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import React from "react";
import PortfolioDetailsArea from "./portfolio-details-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import Header from "@/src/layout/headers/header";
import Footer from "@/src/layout/footers/footer";

const PortfolioDetails = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb top_title="IT Advisor" page_title=" Portfolio Details" />
        <PortfolioDetailsArea />
        <FooterContact bg_style={true} />
      </main>
      <Footer />
    </>
  );
};

export default PortfolioDetails;
