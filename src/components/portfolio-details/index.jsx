import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import React from "react";
import PortfolioDetailsArea from "./portfolio-details-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";
import HeaderTwo from "@/src/layout/headers/header-2";

const PortfolioDetails = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="IT Advisor" page_title=" Portfolio Details" />
        <PortfolioDetailsArea />
        <FooterContact bg_style={true} />
      </main>
      <FooterThree />
    </>
  );
};

export default PortfolioDetails;
