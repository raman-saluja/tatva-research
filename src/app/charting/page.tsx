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
              Analytical & Predictive Trend Intelligence
            </h1>

            <p className="mx-auto mb-12 max-w-4xl text-base text-gray-200 sm:text-lg md:text-xl">
              Our analytical and predictive intelligence framework enables
              organizations to move beyond reporting into anticipation. By
              combining AI-driven analytics with advanced charting, we uncover
              patterns, forecast outcomes, and support proactive, data-led
              decision-making.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-300">
              <div className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                📡 Real-Time Market Signals
              </div>
              <div className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                📊 Consumer, Brand & Category Insights
              </div>
              <div className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                🧠 Predictive & Trend Modeling
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
              We leverage AI-powered visualization engines to convert complex
              datasets into clear, intuitive charts that highlight trends,
              relationships, and opportunities with precision.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Automated Chart Intelligence",
                desc: "AI selects optimal chart types based on data structure, analytical objectives, and stakeholder needs.",
              },
              {
                title: "Interactive Dashboards",
                desc: "Dynamic dashboards allow users to explore trends, filter segments, and compare scenarios in real time.",
              },
              {
                title: "Insight-First Design",
                desc: "Every visualization is built to communicate insights clearly—focusing on meaning, not just metrics.",
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
              Our predictive analytics models integrate historical data,
              real-time signals, and machine learning algorithms to anticipate
              trends, risks, and opportunities before they fully emerge.
            </p>

            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li>• Market demand and trend forecasting</li>
              <li>• Consumer behavior and preference prediction</li>
              <li>• Brand performance and share modeling</li>
              <li>• Scenario planning and risk assessment</li>
              <li>• Opportunity and growth identification</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white dark:bg-white/5 p-10 shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
              Why Predictive Visualization Matters
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Predictive visualizations help organizations see potential futures,
              enabling proactive planning, faster alignment, and confident
              strategic decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TOOLS & TECHNOLOGY ================= */}
      <section className="bg-white dark:bg-gray-dark py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center mb-14">
            <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Tools, Technologies & Analytics Stack
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Our analytics ecosystem combines advanced AI technologies with
              research-grade infrastructure to deliver scalable, secure, and
              high-impact insights.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Machine Learning & AI Models",
              "Natural Language Processing (NLP)",
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
            modeling, we help organizations anticipate change, reduce uncertainty,
            and stay ahead in competitive and dynamic markets.
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
