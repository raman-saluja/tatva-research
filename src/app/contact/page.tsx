import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | AI Market Intelligence Platform",
  description: "Get in touch with our team to discuss how AI-powered market intelligence can transform your business strategy. Schedule a demo or consultation today.",
  keywords: "contact market research, AI consultation, schedule demo, business intelligence contact",
  openGraph: {
    title: "Contact Us | AI Market Intelligence Solutions",
    description: "Connect with our experts to explore AI-powered market research solutions for your business",
    type: "website",
  },
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Get in Touch"
        description="Ready to transform your market research with AI? Contact our team for a personalized consultation, platform demo, or to discuss your specific research needs."
      />

      <Contact />
      
      {/* Additional Contact Information Section */}
      <section className="py-16 md:py-20 lg:py-28 bg-gray-light dark:bg-bg-color-dark">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
              Additional Ways to Connect
            </h2>
            <p className="mt-4 text-base text-body-color dark:text-body-color-dark sm:text-lg md:text-xl max-w-3xl mx-auto">
              Choose the communication method that works best for you. Our team is available to support your market intelligence needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-dark p-8 rounded-lg shadow-md text-center">
              <div className="text-primary text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">Phone Support</h3>
              <p className="text-body-color dark:text-body-color-dark mb-4">
                Speak directly with our solutions team
              </p>
              <a 
                href="tel:+18001234567" 
                className="text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                +1 (800) 123-4567
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Mon-Fri, 9am-6pm EST
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-dark p-8 rounded-lg shadow-md text-center">
              <div className="text-primary text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">Enterprise Sales</h3>
              <p className="text-body-color dark:text-body-color-dark mb-4">
                For large organizations and custom solutions
              </p>
              <a 
                href="mailto:enterprise@marketintel.ai" 
                className="text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                enterprise@marketintel.ai
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Dedicated account management
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-dark p-8 rounded-lg shadow-md text-center">
              <div className="text-primary text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">Visit Our Office</h3>
              <p className="text-body-color dark:text-body-color-dark mb-4">
                Schedule an in-person meeting
              </p>
              <div className="text-gray-700 dark:text-gray-300">
                <p>123 Innovation Drive</p>
                <p>San Francisco, CA 94107</p>
                <p>United States</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                By appointment only
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
              Frequently Asked Questions
            </h3>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="text-left">
                <h4 className="font-semibold text-lg text-black dark:text-white mb-2">
                  How quickly can I get started with the platform?
                </h4>
                <p className="text-body-color dark:text-body-color-dark">
                  Most clients can begin using our AI platform within 24 hours of sign-up. Enterprise implementations with custom integrations typically take 1-2 weeks.
                </p>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg text-black dark:text-white mb-2">
                  Do you offer training for my team?
                </h4>
                <p className="text-body-color dark:text-body-color-dark">
                  Yes, we provide comprehensive onboarding and training sessions for all clients. Enterprise plans include dedicated training workshops and ongoing support.
                </p>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg text-black dark:text-white mb-2">
                  Can the platform integrate with our existing systems?
                </h4>
                <p className="text-body-color dark:text-body-color-dark">
                  Our platform offers API integration capabilities for most CRM, BI, and data visualization tools. Our technical team can assist with custom integrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;