import React from "react";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import ServiceArea from "./service-area";
import IndustryArea from "@/src/common/industry-area";
import BrandArea from "@/src/common/brand-area";
import BlogArea from "@/src/common/blog-area";
import FooterContact from "@/src/layout/footers/footer-contact";

const Sevice = () => {
  return (
    <main>
      <Breadcrumb top_title="Our Services" page_title="Service" />
      <ServiceArea />
      <IndustryArea service={true} />
      <BrandArea service={true} />
      <BlogArea service={true} />
      <FooterContact />
    </main>
  );
};

export default Sevice;
