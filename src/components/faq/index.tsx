"use client";
import { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can I start getting insights from your platform?",
      answer:
        "Most clients can start receiving basic market insights within 24 hours of onboarding. Full-scale research dashboards and custom reports are typically ready within 1-2 weeks.",
    },
    {
      question: "Do you provide support and training for our team?",
      answer:
        "Yes, we offer detailed onboarding and training sessions to help your team leverage the platform effectively. Enterprise clients can also request dedicated workshops and ongoing research support.",
    },
    {
      question: "Can the platform integrate with our existing systems and tools?",
      answer:
        "Absolutely. Our platform supports API integrations with most CRM, BI, and analytics tools. Our technical team can also help implement custom integrations for seamless workflow.",
    },
    {
      question: "What types of research can your platform handle?",
      answer:
        "Our platform covers a wide range of market research including consumer behavior analysis, competitor benchmarking, brand health studies, trend tracking, and real-time market monitoring.",
    },
    {
      question: "Is my data secure on your platform?",
      answer:
        "Yes, we adhere to strict data security standards and encryption protocols. All client data is stored securely, and access is controlled to ensure confidentiality.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[40px] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-body-color dark:text-body-color-dark md:text-lg max-w-2xl mx-auto">
            Find answers to common questions about our AI-powered market intelligence platform
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-300 ${
                  openIndex === index 
                    ? "shadow-lg dark:shadow-gray-800/30" 
                    : "shadow-sm hover:shadow-md dark:hover:shadow-gray-800/20"
                }`}
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-lg text-black dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 ml-2 text-primary dark:text-primary-light text-xl font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index 
                      ? "max-h-96 opacity-100 py-4 border-t border-gray-100 dark:border-gray-800" 
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-base text-body-color dark:text-body-color-dark leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default FAQs;