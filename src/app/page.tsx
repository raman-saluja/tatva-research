import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Research & Consumer Rights| Data driven marketing Solutions",
  description: "We provide data-driven market research, consumer insights, and marketing analytics to help businesses make smarter decisions and grow faster." ,
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      
      <Hero />
      <Features />
    
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
