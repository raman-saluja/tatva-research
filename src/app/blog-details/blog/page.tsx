import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details | Market Research Insights",
  description: "In-depth insights on survey programming, data processing, verbatim coding, and charting.",
};

const BlogDetailsPage = () => {
  return (
    <section className="pt-[120px] pb-[120px]">
      <div className="container max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">
          Blog Details
        </h1>
        <p className="text-body-color">
          Detailed blog content will appear here.
        </p>
      </div>
    </section>
  );
};

export default BlogDetailsPage;
