import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Research Blogs | Market Research Solutions",
  description:
    "Explore expert insights on survey programming, data processing, verbatim coding, and automated charting for smarter market research decisions.",
};

const BlogPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Insights & Resources"
        description="Expert perspectives, industry best practices, and innovation stories across survey programming, data processing, verbatim coding, and charting."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-1/2 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
