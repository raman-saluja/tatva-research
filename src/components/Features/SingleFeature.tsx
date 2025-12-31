// SingleFeature.tsx
import { Feature } from "@/types/feature";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, path } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <Link href={path}>
          <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-dark">
            {/* Card background effect */}
            <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-primary/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/10 dark:bg-primary/10"></div>
            
            {/* Icon container */}
            <div className="relative mb-8 flex h-[80px] w-[80px] items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <div className="text-3xl">{icon}</div>
            </div>
            
            {/* Content */}
            <div className="relative">
              <h3 className="mb-4 text-xl font-bold text-black transition-colors duration-300 group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                {title}
              </h3>
              <p className="text-body-color text-base leading-relaxed font-medium transition-colors duration-300 group-hover:text-dark dark:text-dark-6 dark:group-hover:text-gray-200">
                {paragraph}
              </p>
            </div>
            
            {/* Arrow indicator */}
            <div className="mt-8 flex items-center text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
              <span className="text-sm font-medium">Learn more</span>
              <svg
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
            
            {/* Bottom border effect */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full"></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SingleFeature;