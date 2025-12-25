import React from 'react';
import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import AboutArea from '../home/about-area';
import CounterArea from '../home/counter-area';
import FeatureArea from '../home/feature-area';
import SupportArea from './support-area';
import VideoArea from '../../common/video-area';
import TestimonialFeature from './feature-testimonial';
import TestimonialArea from '@/src/common/testimonial-area';
import BrandArea from '@/src/common/brand-area';
import BlogArea from '@/src/common/blog-area';
import FooterContact from '@/src/layout/footers/footer-contact';

const About = () => {
  return (
    <main>
      <Breadcrumb top_title="Our Company" page_title="Our Company" />
      <AboutArea about={true} />
      <CounterArea about={true} />
      <FeatureArea about={true} />
      <SupportArea />
      <VideoArea />
      <TestimonialFeature />
      <TestimonialArea />
      <BrandArea />
      <BlogArea />
      <FooterContact />
    </main>
  );
};

export default About;