import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import FAQs from "@/components/faq";

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
                href="tel:+918700187929"
                className="text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                +91-8700187929
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Mon-Fri, 9am-6pm IST
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
                researchtatva@gmail.com
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
                <p>Rohini, Delhi</p>

              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                By appointment only
              </p>
            </div>
          </div>

         <FAQs />

        </div>
      </section>
    </>
  );
};

export default ContactPage;