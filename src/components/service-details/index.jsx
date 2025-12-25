import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import React from "react";
import ServiceDetailsArea from "./service-details-area";
import FooterContact from "@/src/layout/footers/footer-contact";

const ServiceDetails = () => {
  return (
    <main>
      <Breadcrumb top_title="Machine Learning" page_title="Service Details" />
      <ServiceDetailsArea />
      <FooterContact bg_style={true} />
    </main>
  );
};

export default ServiceDetails;
