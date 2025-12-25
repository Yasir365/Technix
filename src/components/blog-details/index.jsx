import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import React from "react";
import BlogDetailsPostbox from "./blog-details-postbox";
import FooterContact from "@/src/layout/footers/footer-contact";

const BlogDetails = () => {
  return (
    <main>
      <Breadcrumb top_title="Blog Details" page_title="Blog Details" />
      <BlogDetailsPostbox />
      <FooterContact bg_style={true} />
    </main>
  );
};

export default BlogDetails;
