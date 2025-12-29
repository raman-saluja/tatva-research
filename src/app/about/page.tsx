import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Result driven marketing agency",
  description: " At Tatv Reseach, we turn data into direction and insights into impact. We are a marketing research company dedicated to helping businesses understand their customers, markets, and opportunities with clarity and confidence.Founded in 2010, E2E has grown from a reliable support partner for research projects into a trusted agency that transforms data into actionable insights. Our approach combines expertise, innovation, and a deep commitment to our clients' success.",
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
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div className="container">
          <div className="w-full md:w-4/12 lg:w-5/12 mb-10">
            <div className="text-end">
              <ul className="flex items-center md:justify-start">
                <li className="flex items-center">
                  <Link
                    href="/"
                    className="pr-1 text-base font-medium text-body-color hover:text-primary"
                  >
                    Home
                  </Link>
                  <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span>
                </li>
                <li className="text-base font-medium text-primary">
                  About Our Platform
                </li>
              </ul>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
                <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  About Our Platform
                </h1>
                <p className="text-base font-medium leading-relaxed text-body-color">
                  At Tatv Reseach, we turn data into direction and insights into impact. We are a marketing research company dedicated to helping businesses understand their customers, markets, and opportunities with clarity and confidence.Tatv Research has grown from a reliable support partner for research projects into a trusted agency that transforms data into actionable insights. Our approach combines expertise, innovation, and a deep commitment to our clients' success.
                </p>
              </div>
            </div>
            <div className="w-full md:w-4/12 lg:w-5/12">
              <Image
                src="/images/about/image.png"
                alt="AI Data Analytics Dashboard"
                width={400} height={600}
                className="drop-shadow-three block dark:hidden"
              />
               <Image
                src="/images/about/image2.png"
                alt="AI Data Analytics Dashboard"
                width={400} height={600}
                className="drop-shadow-three hidden dark:block"
              />
            </div>

          </div>
        </div>

        <div>
          <span className="absolute left-0 top-0 z-[-1]">
            <svg
              width="287"
              height="254"
              viewBox="0 0 287 254"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
                fill="url(#paint0_linear_111:578)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_111:578"
                  x1="-40.5"
                  y1="117"
                  x2="301.926"
                  y2="-97.1485"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-0 top-0 z-[-1]">
            <svg
              width="628"
              height="258"
              viewBox="0 0 628 258"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
                fill="url(#paint0_linear_0:1)"
              />
              <path
                opacity="0.1"
                d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
                fill="url(#paint1_linear_0:1)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0:1"
                  x1="644"
                  y1="221"
                  x2="429.946"
                  y2="37.0429"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0:1"
                  x1="18.3648"
                  y1="166.016"
                  x2="105.377"
                  y2="32.3398"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </section>
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