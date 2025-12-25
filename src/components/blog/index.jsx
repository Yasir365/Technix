import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import React from "react";
import PostboxArea from "./postbox-area";
import FooterContact from "@/src/layout/footers/footer-contact";

const Blog = () => {
  return (
    <main>
      <Breadcrumb top_title="Blog Page" page_title="Blog" />
      <PostboxArea />
      <FooterContact bg_style={true} />
    </main>
  );
};

export default Blog;
