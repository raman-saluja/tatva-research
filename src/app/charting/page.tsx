import Link from "next/link";

const ChartingPage = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="relative overflow-hidden mt-[120px] bg-white dark:bg-gray-dark"
        style={{ height: "500px" }}
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            src="/videos/charting1.mp4"
            autoPlay
            loop
            playsInline
            muted
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        </div>

        <div className="container relative z-10 h-full flex items-center">
          <div className="w-full text-center">
            <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Analytical & Predictive Trends
            </h1>
            <p className="mx-auto mb-12 max-w-4xl text-base text-gray-200 sm:text-lg md:text-xl">
              Our Analytical and Predictive Trends framework empowers organizations
              to move beyond observation into anticipation. By combining AI-driven
              analytics with intelligent charting, we uncover patterns, forecast
              outcomes, and support proactive decision-making.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-300">
              <div className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                📡 Live Market Signals
              </div>
              <div className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                📊 Consumer & Brand Insights
              </div>
              <div className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                🧠 Predictive & Trend Analytics
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= AI CHARTING SECTION ================= */}
      <section className="bg-white dark:bg-gray-dark py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center mb-14">
            <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
              AI-Driven Charting & Visualization
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              We use AI-powered visualization engines to transform complex datasets
              into intuitive charts that highlight trends, relationships, and
              opportunities with clarity and precision.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Automated Chart Selection",
                desc: "AI identifies the most effective chart types based on data structure, research goals, and audience needs.",
              },
              {
                title: "Interactive Dashboards",
                desc: "Dynamic dashboards allow users to explore trends, filter segments, and compare scenarios in real time.",
              },
              {
                title: "Insight-Focused Design",
                desc: "Every visualization is crafted to communicate insights clearly, not just display data.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-gray-50 dark:bg-white/5 p-8 shadow-sm"
              >
                <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PREDICTIVE ANALYTICS ================= */}
      <section className="bg-gray-50 dark:bg-black/20 py-20">
        <div className="container grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Predictive Analytics & Forecasting
            </h2>
            <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
              Our predictive analytics models combine historical data, real-time
              market signals, and machine learning algorithms to forecast trends
              and outcomes before they fully emerge.
            </p>

            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li>• Market trend and demand forecasting</li>
              <li>• Consumer behavior and preference prediction</li>
              <li>• Brand performance and share modeling</li>
              <li>• Scenario analysis and risk assessment</li>
              <li>• Strategic opportunity identification</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white dark:bg-white/5 p-10 shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
              Why Predictive Charting Matters
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Predictive charts enable organizations to visualize future
              possibilities, supporting proactive planning and faster, more
              confident strategic decisions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TOOLS & TECHNOLOGY ================= */}
      <section className="bg-white dark:bg-gray-dark py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center mb-14">
            <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Tools, Technologies & Research Equipment
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Our analytics ecosystem integrates advanced AI tools and
              research-grade technologies to deliver scalable, accurate, and
              secure insights.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Machine Learning & AI Models",
              "NLP for Text & Verbatim Analysis",
              "Automated Data Pipelines",
              "Enterprise Visualization Engines",
            ].map((tool, index) => (
              <div
                key={index}
                className="rounded-xl bg-gray-50 dark:bg-white/5 p-6 text-center shadow-sm"
              >
                <p className="font-medium text-gray-700 dark:text-gray-300">
                  {tool}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STRATEGIC IMPACT ================= */}
      <section className="bg-black py-20">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            Turning Analytics Into Strategic Advantage
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-300">
            By combining intelligent charting, AI-driven analytics, and predictive
            modeling, we help organizations anticipate change, reduce risk, and
            stay ahead in competitive markets.
          </p>

          <Link
            href="/contact"
            className="inline-block rounded-2xl bg-white px-10 py-4 font-semibold text-black hover:bg-gray-200 transition"
          >
            Explore Our Analytics Capabilities
          </Link>
        </div>
      </section>
    </>
  );
};

export default ChartingPage;
