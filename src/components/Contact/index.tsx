// import NewsLatterBox from "./NewsLatterBox";
"use client";

import { useState, FormEvent } from "react";

const Contact = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for form status
  const [status, setStatus] = useState<{
    type: "success" | "error" | "loading" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  // State for loading
  const [isLoading, setIsLoading] = useState(false);

  // Use relative path for Next.js API routes
  const BACKEND_URL = "";

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please fill in all fields",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      return;
    }

    setIsLoading(true);
    setStatus({
      type: "loading",
      message: "Sending your message...",
    });

    try {
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.status === "success") {
        // Success
        setStatus({
          type: "success",
          message:
            data.message ||
            "Thank you! Your message has been sent successfully.",
        });

        // Clear form
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus({ type: "", message: "" });
        }, 5000);
      } else {
        // Error from server
        setStatus({
          type: "error",
          message: data.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      // Network or other errors
      console.error("Error submitting form:", error);
      setStatus({
        type: "error",
        message:
          "Unable to connect to server. Please check your connection and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="shadow-three dark:bg-gray-dark mb-12 rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl dark:text-white">
                Need Help? Open a Ticket
              </h2>
              <p className="text-body-color mb-12 text-base font-medium">
                Our support team will get back to you ASAP via email.
              </p>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`mb-6 rounded-xs p-4 ${
                    status.type === "success"
                      ? "border border-green-200 bg-green-50 text-green-800"
                      : status.type === "error"
                        ? "border border-red-200 bg-red-50 text-red-800"
                        : "border border-blue-200 bg-blue-50 text-blue-800"
                  }`}
                >
                  <div className="flex items-center">
                    {status.type === "success" && (
                      <svg
                        className="mr-2 h-5 w-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {status.type === "error" && (
                      <svg
                        className="mr-2 h-5 w-5 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {status.type === "loading" && (
                      <svg
                        className="mr-2 h-5 w-5 animate-spin text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    )}
                    <span>{status.message}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`bg-primary shadow-submit hover:bg-primary/90 dark:shadow-submit-dark rounded-xs px-9 py-4 text-base font-medium text-white duration-300 ${
                        isLoading ? "cursor-not-allowed opacity-70" : ""
                      }`}
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Submit Ticket"
                      )}
                    </button>
                  </div>
                </div>
              </form>

              {/* Additional Info */}
              <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-700">
                <h3 className="text-dark mb-3 text-lg font-medium dark:text-white">
                  What happens after submission?
                </h3>
                <ul className="text-body-color space-y-2 text-sm">
                  <li className="flex items-start">
                    <svg
                      className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Your message will be sent directly to our support team at
                    researchtatva@gmail.com
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    We'll review your request within 24 hours
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    We'll contact you via the email you provided
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            {/* You can place your NewsLatterBox component here */}
            {/* <NewsLatterBox /> */}

            {/* Contact Information Box */}
            <div className="shadow-three dark:bg-gray-dark rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:px-8 xl:p-[55px]">
              <h3 className="mb-6 text-xl font-bold text-black dark:text-white">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 text-primary mr-4 flex h-10 w-10 items-center justify-center rounded-full">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-dark mb-1 font-medium dark:text-white">
                      Email Support
                    </h4>
                    <p className="text-body-color text-sm">
                      researchtatva@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 text-primary mr-4 flex h-10 w-10 items-center justify-center rounded-full">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-dark mb-1 font-medium dark:text-white">
                      Response Time
                    </h4>
                    <p className="text-body-color text-sm">Within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 text-primary mr-4 flex h-10 w-10 items-center justify-center rounded-full">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-dark mb-1 font-medium dark:text-white">
                      Note
                    </h4>
                    <p className="text-body-color text-sm">
                      Please provide clear details about your issue for faster
                      resolution
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
