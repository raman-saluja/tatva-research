import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Advanced Survey Programming for Smarter Market Insights",
    paragraph:
      "Discover how advanced survey programming techniques like adaptive logic, MaxDiff, and conjoint analysis help brands uncover deep consumer insights with speed and precision.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Research Team",
      image: "/images/blog/author-02.png",
      designation: "Survey Programming Experts",
    },
    tags: ["Survey Programming"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Why Clean Data Processing Is the Backbone of Market Research",
    paragraph:
      "From raw survey responses to analysis-ready datasets, automated data processing ensures accuracy, consistency, and faster turnaround for research-driven decisions.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Data Operations",
      image: "/images/blog/author-03.png",
      designation: "Data Processing Specialists",
    },
    tags: ["Data Processing"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Verbatim Coding: Turning Open-Ended Feedback into Actionable Insights",
    paragraph:
      "Learn how NLP-powered verbatim coding transforms unstructured consumer feedback into meaningful themes, sentiment analysis, and market trends.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Analytics Team",
      image: "/images/blog/author-02.png",
      designation: "NLP & Insights Analysts",
    },
    tags: ["Verbatim Coding"],
    publishDate: "2025",
  },
 
];

export default blogData;
