import React from 'react'
import Navbar from './Navbar'
import ContentSection from './ContentSection'

function DitgitalMarketing() {
  return (
    <>
    <Navbar/>
    <header className="w-full bg-blue-700 py-6 md:py-8 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
           Digital Marketing
          </h1>
          <h2 className="text-lg sm:text-xl font-semibold">
            Shell-Entertenment ditgital marketing services
          </h2>
        </div>
      </header>


      <ContentSection
          imageSrc="https://cdn-ilcjemh.nitrocdn.com/YIMaZhlfOlGHRcztYBLdphPnZINmZhBN/assets/images/optimized/rev-c6d1883/webolutionsmarketingagency.com/wp-content/uploads/Webolutions-Marketing-Strategy-Services.jpg"
          title={"Digital Marketing Services"}
          paragraphs={[
            "With over 5 billion internet users worldwide, we’re truly living in a digital age. Not only are the overwhelming majority of people spending time online every day, but the number of internet users continues to rise each year. This has created a fundamental shift in the way people shop for the products and services they need. Regardless of the industry you’re in, your audience is spending a great deal of their time online.In order for your marketing efforts to be successful, you must connect with your audience at the right time and in the right place. Today, the place where your audience is most likely to find you is where they’re already spending most of their time – the internet. As a result, digital marketing is now a critical component to any marketing strategy you implement at your business.Digital marketing is highly complex and encompasses a wide range of different tactics. It’s critical to work with an experienced digital marketing company to ensure your business utilizes the right methods to deliver the best ROI and maximize your lead generation efforts."
          ]}
          buttonText="Get your Digital Marketing Proposal"
          buttonLink="#"
        />
        <ContentSection
          imageSrc="https://cdn-ilcjemh.nitrocdn.com/YIMaZhlfOlGHRcztYBLdphPnZINmZhBN/assets/images/optimized/rev-c6d1883/webolutionsmarketingagency.com/wp-content/uploads/Digital-Marketing-Services.jpg"
          title="Paid Ads Services"
          paragraphs={[
            "Harness the power of paid advertising with Webolutions’ Paid Ads Services. Our team specializes in creating targeted ad campaigns that deliver high-quality leads and maximize your return on investment. From Google Ads to social media advertising, we utilize data-driven strategies to reach your ideal audience at the right time and place. By continuously monitoring and optimizing your campaigns, we ensure your advertising budget is used efficiently, driving traffic, conversions, and growth for your business. Experience the impact of expertly managed paid ads with Webolutions and watch your brand soar to new heights.",
          ]}
          buttonText="Play per click Advertising >"
          buttonLink="#"
          reverse={true}
        />
</>

  )
}

export default DitgitalMarketing