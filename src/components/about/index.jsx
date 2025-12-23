import React from 'react';
import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import AboutArea from '../homes/home-2/about-area';
import CounterArea from '../homes/home-2/counter-area';
import FeatureArea from '../homes/home-2/feature-area';
import SupportArea from './support-area';
import VideoArea from '../../common/video-area';
import TestimonialFeature from './feature-testimonial';
import TestimonialArea from '@/src/common/testimonial-area';
import BrandArea from '@/src/common/brand-area';
import TeamArea from '@/src/common/team-area';
import BlogArea from '@/src/common/blog-area';
import FooterContact from '@/src/layout/footers/footer-contact';
import Header from '@/src/layout/headers/header';
import Footer from '@/src/layout/footers/footer';

const About = () => {
  return (
    <>
      <Header />
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
        <TeamArea />
        <BlogArea />
        <FooterContact />
      </main>
      <Footer />
    </>
  );
};

export default About;