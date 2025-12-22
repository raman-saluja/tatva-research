"use client";

import VideoModal from "@/components/video-modal";
import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

export default function Video() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="relative z-10 py-16 md:py-20 lg:py-28 bg-gray-light dark:bg-gray-dark">
        <div className="container">
          <SectionTitle
            title="See Our AI Platform in Action"
            paragraph="Watch how our AI-powered market intelligence platform transforms complex data into actionable insights. See real demonstrations of predictive analytics, competitive intelligence, and automated research capabilities."
            center
            mb="80px"
          />
        </div>
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[770px] overflow-hidden rounded-md shadow-lg">
                <div className="relative aspect-77/40 items-center justify-center">
                  <Image
                    src="/images/video/image.png"
                    alt="AI Market Intelligence Platform Demo"
                    className="object-cover"
                    fill
                  />
                  <div className="absolute top-0 right-0 flex h-full w-full items-center justify-center">
                    <button
                      aria-label="Watch platform demo video"
                      onClick={() => setOpen(true)}
                      className="text-primary flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/75 transition hover:bg-white hover:scale-110 duration-300 cursor-pointer shadow-lg"
                    >
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        className="fill-current"
                      >
                        <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute bottom-6 left-6 bg-black/70 text-white px-4 py-2 rounded-md">
                    <p className="text-sm font-medium">📊 Live Platform Demo</p>
                    <p className="text-xs opacity-80">AI Market Intelligence Dashboard</p>
                  </div>
                </div>
              </div>
              
              {/* Features highlighted below the video */}
              <div className="mt-12 text-center">
                <h3 className="mb-6 text-2xl font-semibold text-black dark:text-white">
                  What You'll Discover in This Demo:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="text-primary text-3xl mb-3">🤖</div>
                    <h4 className="font-semibold text-lg mb-2">AI Analytics</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Real-time market trend analysis using ML algorithms
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="text-primary text-3xl mb-3">📈</div>
                    <h4 className="font-semibold text-lg mb-2">Predictive Insights</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Forecasting market movements and consumer behavior
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="text-primary text-3xl mb-3">🔍</div>
                    <h4 className="font-semibold text-lg mb-2">Competitive Intelligence</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Automated competitor tracking and analysis
                    </p>
                  </div>
                </div>
                
                <div className="mt-10">
                  <button
                    onClick={() => setOpen(true)}
                    className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 hover:shadow-lg"
                  >
                    🎬 Watch Full Platform Demo
                  </button>
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                    Duration: 4 minutes | See how our AI transforms market research
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 left-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat opacity-50">
            {/* Background shape remains */}
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        channel="youtube"
        videoId="L61p2uyiMSo"
        // title="AI Market Intelligence Platform Demo"
      />
    </>
  );
}