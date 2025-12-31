// app/blog/[slug]/page.tsx
"use client";

import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import blogData from "@/components/Blog/blogData";
import { 
  FiCalendar, 
  FiEye, 
  FiMessageSquare, 
  FiUser, 
  FiClock,
  FiTag,
  FiShare2
} from "react-icons/fi";
import { RiQuillPenLine } from "react-icons/ri";
import { useEffect, useState } from "react";

const getBlogBySlug = (slug: string) => {
  return blogData.find((blog) => blog.slug === slug);
};

const BlogDetailsPage = () => {
  const params = useParams();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.slug) {
      const foundBlog = getBlogBySlug(params.slug as string);
      if (foundBlog) {
        setBlog(foundBlog);
      }
      setLoading(false);
    }
  }, [params]);

  if (loading) {
    return (
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="flex justify-center">
            <div className="w-full lg:w-8/12">
              <div className="animate-pulse">
                <div className="h-12 bg-gray-200 rounded w-3/4 mb-6"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
                <div className="h-80 bg-gray-200 rounded w-full mb-8"></div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!blog) {
    notFound();
  }

  const createMarkup = (htmlContent: string) => {
    return { __html: htmlContent };
  };

  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                {/* Title */}
                <h1 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight dark:text-white">
                  {blog.title}
                </h1>

                {/* Meta Info */}
                <div className="border-body-color/10 mb-10 flex flex-wrap items-center justify-between border-b pb-4 dark:border-white/10">
                  <div className="flex flex-wrap items-center">
                    <div className="mr-10 mb-5 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary/20">
                          <Image
                            src={blog.author.image}
                            alt={blog.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="flex items-center text-body-color text-base font-medium">
                          <FiUser className="mr-2 h-4 w-4 text-primary" />
                          <span className="font-semibold">{blog.author.name}</span>
                        </div>
                        <p className="text-body-color text-sm ml-6">
                          {blog.author.designation}
                        </p>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center space-x-6">
                      <div className="flex items-center text-body-color text-base font-medium bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-lg">
                        <FiCalendar className="mr-2 h-4 w-4 text-primary" />
                        {blog.publishDate}
                      </div>
                      <div className="flex items-center text-body-color text-base font-medium bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-lg">
                        <FiClock className="mr-2 h-4 w-4 text-primary" />
                        5 min read
                      </div>
                      <div className="flex items-center text-body-color text-base font-medium bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-lg">
                        <FiEye className="mr-2 h-4 w-4 text-primary" />
                        1.2k views
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="bg-primary inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white">
                      <FiTag className="mr-2 h-3 w-3" />
                      {blog.tags[0]}
                    </div>
                  </div>
                </div>

                {/* Single Main Image */}
                <div className="mb-10 w-full overflow-hidden rounded-xl shadow-lg">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      priority
                    />
                  </div>
                </div>

                {/* Blog Content */}
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-body-color mb-10 text-lg leading-relaxed font-medium">
                    {blog.paragraph}
                  </p>
                  
                  {blog.content && (
                    <div 
                      className="blog-content text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"
                      dangerouslySetInnerHTML={createMarkup(blog.content)}
                    />
                  )}

                  {/* Quote Section */}
                  <div className="relative mb-10 overflow-hidden rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 p-8 border-l-4 border-primary">
                    <div className="flex items-start">
                      <RiQuillPenLine className="h-8 w-8 text-primary mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-body-color text-lg font-medium italic mb-3">
                          Advanced survey programming techniques combined with automated data processing create a powerful research ecosystem that delivers timely, actionable insights for data-driven decision making.
                        </p>
                        <p className="text-body-color text-sm font-semibold">
                          — Research Insights Team
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tags and Share */}
                  <div className="items-center justify-between sm:flex border-t border-gray-200 dark:border-gray-800 pt-8 mt-12">
                    <div className="mb-5">
                      <h4 className="text-body-color mb-3 text-sm font-medium flex items-center">
                        <FiTag className="mr-2 h-4 w-4 text-primary" />
                        Popular Tags:
                      </h4>
                      <div className="flex flex-wrap items-center gap-2">
                        {blog.tags.map((tag: string, index: number) => (
                          <TagButton key={index} text={tag} />
                        ))}
                        <TagButton text="Market Research" />
                        <TagButton text="Data Analytics" />
                        <TagButton text="Consumer Insights" />
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="text-body-color mb-3 text-sm font-medium sm:text-right flex items-center justify-end">
                        <FiShare2 className="mr-2 h-4 w-4 text-primary" />
                        Share this post:
                      </h5>
                      <div className="flex items-center sm:justify-end">
                        <SharePost />
                      </div>
                    </div>
                  </div>

                  {/* Author Bio */}
                  <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start">
                      <div className="mb-4 sm:mb-0 sm:mr-6">
                        <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-primary/20">
                          <Image
                            src={blog.author.image}
                            alt={blog.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-dark mb-2 text-xl font-bold dark:text-white">
                          About {blog.author.name}
                        </h4>
                        <p className="text-body-color mb-4 text-base font-medium">
                          {blog.author.designation} with extensive experience in {blog.tags[0].toLowerCase()}. 
                          Dedicated to transforming complex data into clear, actionable insights that drive business growth and innovation.
                        </p>
                      
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;