import React, { useState } from "react";
import Navbar from "./Navbar";
import ContentSection from "./ContentSection";

const AboutPage = () => {
  const [showCallForm, setShowCallForm] = useState(false);
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  const [showRequestForm, setShowRequestForm] = useState(false);

  const openCallForm = () => {
    setShowCallForm(true);
    setShowScheduleForm(false);
    setShowRequestForm(false);
  };

  const closeCallForm = () => setShowCallForm(false);

  const openScheduleForm = () => {
    setShowScheduleForm(true);
    setShowCallForm(false);
    setShowRequestForm(false);
  };

  const closeScheduleForm = () => setShowScheduleForm(false);

  const openRequestForm = () => {
    setShowRequestForm(true);
    setShowCallForm(false);
    setShowScheduleForm(false);
  };

  const closeRequestForm = () => setShowRequestForm(false);

  return (
    <div className="w-full bg-white">
      <Navbar />
      {/* Header Section */}
      <header className="w-full bg-blue-700 py-6 md:py-8 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Get to Know Us
          </h1>
          <h2 className="text-lg sm:text-xl font-semibold">
            Shell-Entertenment Digital Marketing Agency - About Us
          </h2>
        </div>
      </header>

      {/* Main Content and Sidebar */}
      <div className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Sidebar */}
        {/* <aside className="w-full md:w-1/4 order-2 md:order-1">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 sticky top-4">
            <h4 className="text-base sm:text-lg font-semibold text-gray-700 mb-4">
              TABLE OF CONTENTS
            </h4>
            <ul className="space-y-2 text-sm sm:text-base">
              {[
                "Our Culture",
                "Our Team",
                "Intrinsic Multiplier Approach",
                "Websites Right Methodology",
                "Why Choose Shell-Entertenment",
                "Blog Posts",
                "Frequently Asked Questions",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-blue-600 hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside> */}

        {/* Main Content */}
        {/* <main className="w-full md:w-3/4 order-1 md:order-2">
          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg h-auto min-h-[16rem]">
            <p className="text-gray-700 text-sm sm:text-base">
              Additional content about Shell-Entertenment Digital Marketing
              Agency will go here.
            </p>
          </div>
        </main> */}
      </div>

      {/* Proposal Section */}
      <section className="relative w-full bg-white overflow-hidden py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
            {/* Proposal Options */}
            <div className="w-full lg:w-1/2 z-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Get Your Free Proposal
              </h1>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Choose your option and connect with a Shell-Entertenment expert.
              </p>

              {[
                {
                  title: "Call me now",
                  desc: "Have an expert call within five minutes.",
                  icon: "phone",
                  action: openCallForm,
                  active: showCallForm,
                },
                {
                  title: "Schedule a call",
                  desc: "Pick a time that works best for you.",
                  icon: "calendar",
                  action: openScheduleForm,
                  active: showScheduleForm,
                },
                {
                  title: "Request a Proposal",
                  desc: "Provide project info and we'll follow up.",
                  icon: "document",
                  action: openRequestForm,
                  active: showRequestForm,
                },
              ].map((option, index) => (
                <div
                  key={index}
                  className={`mb-4 p-4 sm:p-6 border rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    option.active
                      ? "bg-gray-50 shadow-lg"
                      : "bg-white hover:shadow-md"
                  }`}
                  onClick={option.action}
                >
                  <div className="flex items-start">
                    <div className="text-blue-500 mr-3 sm:mr-4 flex-shrink-0">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={
                            option.icon === "phone"
                              ? "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              : option.icon === "calendar"
                              ? "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              : "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          }
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                        {option.title}
                      </h3>
                      <p className="text-blue-600 text-sm sm:text-base">
                        {option.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form/Image Section */}
            <div className="w-full lg:w-1/2 relative">
              {showCallForm ? (
                <div className="bg-white p-4 sm:p-6 rounded-lg border shadow-lg relative">
                  <button
                    onClick={closeCallForm}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="flex items-center mb-4">
                    <div className="text-blue-500 mr-3 sm:mr-4">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                        Call me now
                      </h3>
                      <p className="text-blue-600 text-sm sm:text-base">
                        Have an expert call within five minutes.
                      </p>
                    </div>
                  </div>
                  <form className="space-y-3 sm:space-y-4">
                    {["First Name", "Last Name", "Phone"].map((field, idx) => (
                      <div key={idx}>
                        <label
                          htmlFor={field.toLowerCase().replace(" ", "")}
                          className="block text-gray-700 text-sm sm:text-base mb-1"
                        >
                          {field} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type={field === "Phone" ? "tel" : "text"}
                          id={field.toLowerCase().replace(" ", "")}
                          className="w-full px-3 sm:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                          required
                        />
                      </div>
                    ))}
                    <button
                      type="submit"
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition duration-300 text-sm sm:text-base"
                    >
                      Call Me
                    </button>
                  </form>
                </div>
              ) : showScheduleForm ? (
                <div className="bg-white p-4 sm:p-6 rounded-lg border shadow-lg relative">
                  <button
                    onClick={closeScheduleForm}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="flex items-center mb-4">
                    <div className="text-blue-500 mr-3 sm:mr-4">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                        Schedule a call
                      </h3>
                      <p className="text-blue-600 text-sm sm:text-base">
                        Pick a time that works best for you.
                      </p>
                    </div>
                  </div>
                  <form className="space-y-3 sm:space-y-4">
                    {["Date", "Time"].map((field, idx) => (
                      <div key={idx}>
                        <label
                          htmlFor={`schedule${field}`}
                          className="block text-gray-700 text-sm sm:text-base mb-1"
                        >
                          {field} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type={field.toLowerCase()}
                          id={`schedule${field}`}
                          className="w-full px-3 sm:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                          required
                        />
                      </div>
                    ))}
                    <button
                      type="submit"
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition duration-300 text-sm sm:text-base"
                    >
                      Schedule Call
                    </button>
                  </form>
                </div>
              ) : showRequestForm ? (
                <div className="bg-white p-4 sm:p-6 rounded-lg border shadow-lg relative">
                  <button
                    onClick={closeRequestForm}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="flex items-center mb-4">
                    <div className="text-blue-500 mr-3 sm:mr-4">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                        Request a Proposal
                      </h3>
                      <p className="text-blue-600 text-sm sm:text-base">
                        Provide project info and we'll follow up.
                      </p>
                    </div>
                  </div>
                  <form className="space-y-3 sm:space-y-4">
                    <div>
                      <label
                        htmlFor="projectName"
                        className="block text-gray-700 text-sm sm:text-base mb-1"
                      >
                        Project Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="projectName"
                        className="w-full px-3 sm:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="projectDetails"
                        className="block text-gray-700 text-sm sm:text-base mb-1"
                      >
                        Project Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="projectDetails"
                        className="w-full px-3 sm:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                        rows="3 sm:rows-4"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition duration-300 text-sm sm:text-base"
                    >
                      Submit Request
                    </button>
                  </form>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <img
                    src="https://Webolutionsmarketingagency.com/wp-content/uploads/Webo-Contact-Us-16-Right.webp"
                    alt="Marketing professional smiling"
                    className="max-w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              )}
              <div className="absolute top-0 right-0 w-full h-full bg-blue-700 transform -skew-y-6 -z-10 translate-y-16 sm:translate-y-24" />
            </div>
          </div>
        </div>
      </section>

      <ContentSection
        imageSrc="https://Webolutionsmarketingagency.com/wp-content/uploads/Webo-Team-2048x1366.jpg"
        title="Our Culture"
        paragraphs={[
          "Dive into the heartbeat of Shell-Entertenment Digital Marketing Agency. Discover the vibrant tapestry that defines who we are. Explore our values, team spirit, and the unique blend of passion that fuels our success. Join us on a journey where collaboration meets innovation, and every day is a celebration of growth. Uncover what makes Shell-Entertenment a dynamic and inspiring place to be. Shell-Entertenment is a Denver-based full-spectrum digital marketing agency, providing business strategy, digital marketing and web design & development services. As a leading online marketing agency since 1994, we help businesses across the country identify and effectively bring their unique story to life throughout all communications and experiences, allowing them to grow and scale faster, smarter, and easier. Whether it’s custom website design, branding, digital marketing or website design and development, our streamlined, data-driven solutions have helped thousands of clients gain a competitive edge in their industry, enabling them and their teams to thrive.",
        ]}
        buttonText="Websolutin culture"
        reverse={true}
      />
      <ContentSection
        imageSrc="https://Webolutionsmarketingagency.com/wp-content/uploads/Webo-Conference-Room-1440x960.jpg"
        title="Our Team"
        paragraphs={[
          "Step into the beating heart of Shell-Entertenment by exploring Our Team, where a dynamic ensemble of creators, designers, and world-class problem solvers collaboratively shape the future of our endeavors. Click on this link to unveil the diverse talents and stories that fuel our success—meet the passionate operators who are the driving force behind our commitment to excellence.",
        ]}
        buttonText="Our Team"
      />
      <div
        className="w-full flex flex-col items-center gap-8 md:gap-12"
        id="intrinsic-multiplier-approach m-t-5"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
          {" "}
          Our Certificate{" "}
        </h1>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={"/assets/certificed.jpg"}
            alt="Section visual"
            className="w-full h-[50vw] object-cover"
          />
        </div>
      </div>

      {/* Contact & Email Section */}
      {/* <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Feel free to reach out for any inquiries or consultations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                📞 Phone
              </h3>
              <p className="text-blue-600 text-lg">+918003570024</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                📧 Email
              </h3>
              <p className="text-blue-600 text-lg">shellentertainment30@gmail.com</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact & Email Section */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Feel free to reach out for any inquiries or consultations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {/* Phone */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                📞 Phone
              </h3>
              <p className="text-blue-600 text-lg">+918003570024</p>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                📧 Email
              </h3>
              <p className="text-blue-600 text-lg">
                shellentertainment30@gmail.com
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-8 flex justify-center gap-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/shellentertainment?igsh=NzZvdHlybHlvM3Mx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-lg hover:text-blue-800 transition duration-300"
            >
              📷 Instagram
            </a>

            {/* Twitter */}
            {/* <a
        href="https://twitter.com/your_twitter_username"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-lg hover:text-blue-800 transition duration-300"
      >
        🐦 Twitter
      </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
