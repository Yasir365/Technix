import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import React from "react";
import PortfolioArea from "./portfolio-area";
import FooterContact from "@/src/layout/footers/footer-contact";

const Portfolio = () => {
  return (
    <main>
      <Breadcrumb top_title="Our Portfolio" page_title="Portfolio" />
      <PortfolioArea />
      <FooterContact bg_style={true} />
    </main>
  );
};

export default Portfolio;
