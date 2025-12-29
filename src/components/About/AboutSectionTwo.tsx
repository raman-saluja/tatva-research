import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[550px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/abcd.png"
                alt="AI Data Analytics Dashboard"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none rounded-xl"
              />
              <Image
                src="/images/about/image5.png"
                alt="AI Data Analytics Dashboard"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none rounded-xl"
                //  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0 rounded-xl"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[600px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl ">
                  🎯 Precision Analytics
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                 By combining advanced AI algorithms with rigorous analytical frameworks, we transform raw information into highly accurate, decision-ready intelligence. Every insight is designed to be precise, relevant, and aligned with real business objectives.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  ⚡ Real-time Intelligence
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              By combining real-time AI analytics with expert interpretation, we transform live data into clear, actionable intelligence. The outcome is a more agile, responsive approach to marketing research—one that empowers organizations to stay relevant, competitive, and confidently aligned with market reality.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  🧠 Smart Insights
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                 By combining real-time analysis with predictive intelligence, we help brands anticipate changes, uncover opportunities, and mitigate risks early. Each insight is designed to be actionable—providing clear direction that can be applied directly to campaigns, product decisions, and strategic planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;