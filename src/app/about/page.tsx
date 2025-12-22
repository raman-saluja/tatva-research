import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AI-Powered Market Intelligence Platform",
  description: "Learn how we're revolutionizing market research with artificial intelligence. Discover our mission, technology, and approach to delivering actionable insights.",
  keywords: "AI market research, market intelligence, competitive analysis, predictive analytics, business insights",
  openGraph: {
    title: "About Us | AI Market Intelligence Platform",
    description: "Transforming market research with AI-powered insights and predictive analytics",
    type: "website",
  },
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Our Platform"
        description="We're pioneering the future of market intelligence by combining artificial intelligence with deep domain expertise. Our mission is to transform how businesses discover opportunities and make strategic decisions."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      
      {/* Additional About Section */}
      <section className="py-16 md:py-20 lg:py-28 bg-gray-light dark:bg-bg-color-dark">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
              Our Core Philosophy
            </h2>
            <p className="mt-4 text-base text-body-color dark:text-body-color-dark sm:text-lg md:text-xl max-w-3xl mx-auto">
              We believe that data should empower, not overwhelm. Our AI platform transforms complex market information into clear, actionable intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-dark p-8 rounded-lg shadow-md">
              <div className="text-primary text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">Data-Driven Precision</h3>
              <p className="text-body-color dark:text-body-color-dark">
                We combine quantitative analysis with qualitative insights to deliver accurate, reliable market intelligence that drives results.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-dark p-8 rounded-lg shadow-md">
              <div className="text-primary text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">Continuous Innovation</h3>
              <p className="text-body-color dark:text-body-color-dark">
                Our AI models constantly learn and adapt, ensuring you always have access to the most advanced market research capabilities.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-dark p-8 rounded-lg shadow-md">
              <div className="text-primary text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">Client Success Focus</h3>
              <p className="text-body-color dark:text-body-color-dark">
                We partner with our clients to understand their unique challenges and deliver insights that create tangible business value.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;