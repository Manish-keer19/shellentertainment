import React from "react";
import Navbar from "./Navbar";
import MarketingAgencyHomepage from "./MarketingAgencyHomepage";
import AgencyOverviewPage from "./AgencyOverviewPage";
import ContentSection from "./ContentSection";
import ServicesPage from "./ServicesPage";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <div className="bg-[gold] w-full h-screen relative">
        <Navbar />
        <MarketingAgencyHomepage />
        <AgencyOverviewPage />
        {/* <MarketingStrategySection/> */}
        <ContentSection
          imageSrc="https://cdn-ilcjemh.nitrocdn.com/YIMaZhlfOlGHRcztYBLdphPnZINmZhBN/assets/images/optimized/rev-c6d1883/webolutionsmarketingagency.com/wp-content/uploads/Webolutions-Marketing-Strategy-Services.jpg"
          title={"Marketing Strategy"}
          paragraphs={[
            "Shell-Entertenment specializes in creating tailored marketing strategies that align with your business goals and target audience. Our approach begins with a comprehensive Discovery process to understand your unique needs, followed by in-depth market research and analysis.",
            "We then develop a strategic plan that incorporates competitive analysis, target audience insights, and goal setting. Our ongoing support ensures that your strategy evolves with the market, delivering sustained results and keeping you ahead of the competition.",
            "With Shell-Entertenment, you gain a partner dedicated to your long-term growth and success.",
          ]}
          buttonText="Marketing Strategy >"
          buttonLink="#"
        />
        <ContentSection
          imageSrc="https://cdn-ilcjemh.nitrocdn.com/YIMaZhlfOlGHRcztYBLdphPnZINmZhBN/assets/images/optimized/rev-c6d1883/webolutionsmarketingagency.com/wp-content/uploads/Digital-Marketing-Services.jpg"
          title="Digital Marketing"
          paragraphs={[
            "Shell-Entertenment excels in digital marketing by leveraging the latest tools and techniques to create impactful online campaigns. Our team of experts develops comprehensive strategies that include SEO, PPC, social media marketing, and content creation. We focus on data-driven decision-making to optimize performance and maximize ROI. With a deep understanding of digital trends and consumer behavior, Shell-Entertenment crafts personalized campaigns that resonate with your audience and drive measurable results. Partner with us to elevate your digital presence and achieve your business goals.",
          ]}
          buttonText="Digital Marketing >"
          buttonLink="#"
          reverse={true}
        />
        <ServicesPage />
        {/* <AboutPage/> */}
        {/* <Footer/> */}
      </div>
    </>
  );
}

export default HomePage;
