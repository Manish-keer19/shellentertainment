// import React from 'react';

// const ServicesPage = () => {
//   return (
//     <div className="w-full bg-white py-16">
//       <div className="container mx-auto px-4">
//         {/* Header Section */}
//         <div className="flex items-center justify-center mb-12">
//           {/* <img
//             src="https://cdn-ilcjemh.nitrocdn.com/YIMaZhlfOlGHRcztYBLdphPnZINmZhBN/assets/images/source/rev-c6d1883/webolutionsmarketingagency.com/wp-content/uploads/PPC-Advertising.svg"
//             alt="Webolutions Digital Marketing Agency"
//             className="h-12"
//           />
//           <span className="ml-2 text-gray-600">1994 - 30 YEARS 2024</span>
          
//           */}
//           <h1 className='font-bold text-2xl uppercase'>Featured Areas of Digital Marketing Expertise</h1>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Paid Ads */}
//           <div className="bg-white p-6 rounded-lg shadow-md text-center">
//             <div className="flex justify-center mb-4">
//               <img
//                 src="https://cdn-ilcjemh.nitrocdn.com/YIMaZhlfOlGHRcztYBLdphPnZINmZhBN/assets/images/source/rev-c6d1883/webolutionsmarketingagency.com/wp-content/uploads/SEO.svg"
//                 alt="Paid Ads Icon"
//                 className="w-12 h-12"
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">Paid Ads</h3>
//             <p className="text-gray-600">
//               Paid advertising, also known as pay-per-click (PPC) advertising, is a marketing method where businesses pay to display their ads on search engines and platforms, helping them reach a wider audience, increase website traffic, and achieve specific marketing goals.
//             </p>
//           </div>

//           {/* SEO */}
//           <div className="bg-white p-6 rounded-lg shadow-md text-center">
//             <div className="flex justify-center mb-4">
//               <img
//                 src="https://cdn-ilcjemh.nitrocdn.com/YIMaZhlfOlGHRcztYBLdphPnZINmZhBN/assets/images/source/rev-c6d1883/webolutionsmarketingagency.com/wp-content/uploads/Effective-Digital-Strategies.svg"
//                 alt="SEO Icon"
//                 className="w-12 h-12"
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">SEO</h3>
//             <p className="text-gray-600">
//               Search Engine Optimization is the practice of optimizing a website to improve its visibility in search engine results. It involves various strategies and techniques to increase organic (non-paid) traffic, enhance online presence, and reach a larger, more relevant audience.
//             </p>
//           </div>

//           {/* Marketing Strategy */}
//           <div className="bg-white p-6 rounded-lg shadow-md text-center">
//             <div className="flex justify-center mb-4">
//               <img
//                 src="https://cdn-ilcjemh.nitrocdn.com/YIMaZhlfOlGHRcztYBLdphPnZINmZhBN/assets/images/source/rev-c6d1883/webolutionsmarketingagency.com/wp-content/uploads/Visual-Impact.svg"
//                 alt="Marketing Strategy Icon"
//                 className="w-12 h-12"
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">Marketing Strategy</h3>
//             <p className="text-gray-600">
//               Marketing strategy is the comprehensive plan that businesses use to achieve their marketing goals. It involves defining target audiences, choosing the right marketing channels, and creating a roadmap to effectively promote products and services, ultimately driving business growth and success.
//             </p>
//           </div>

//           {/* Branding */}
//           <div className="bg-white p-6 rounded-lg shadow-md text-center">
//             <div className="flex justify-center mb-4">
//               <img
//                 src="https://cdn-ilcjemh.nitrocdn.com/YIMaZhlfOlGHRcztYBLdphPnZINmZhBN/assets/images/source/rev-c6d1883/webolutionsmarketingagency.com/wp-content/uploads/Visual-Impact.svg"
//                 alt="Branding Icon"
//                 className="w-12 h-12"
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">Branding</h3>
//             <p className="text-gray-600">
//               Branding is the practice of creating a unique identity for a company, product, or service. It involves defining the brand's values, personality, and visual elements to leave a lasting and positive impression on customers, building recognition and trust.
//             </p>
//           </div>

//           {/* Business Intelligence */}
//           <div className="bg-white p-6 rounded-lg shadow-md text-center">
//             <div className="flex justify-center mb-4">
//               <img
//                 src="https://cdn-ilcjemh.nitrocdn.com/YIMaZhlfOlGHRcztYBLdphPnZINmZhBN/assets/images/source/rev-c6d1883/webolutionsmarketingagency.com/wp-content/uploads/Knowledge-Expertise-3.svg"
//                 alt="Business Intelligence Icon"
//                 className="w-12 h-12"
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">Business Intelligence</h3>
//             <p className="text-gray-600">
//               Business intelligence (BI) is the use of data analysis tools and techniques to transform raw data into valuable insights, helping companies make informed decisions, identify opportunities, and optimize their operations, ultimately leading to improved efficiency and strategic planning.
//             </p>
//           </div>

//           {/* Custom Web Design */}
//           <div className="bg-white p-6 rounded-lg shadow-md text-center">
//             <div className="flex justify-center mb-4">
//               <img
//                 src="https://cdn-ilcjemh.nitrocdn.com/YIMaZhlfOlGHRcztYBLdphPnZINmZhBN/assets/images/source/rev-c6d1883/webolutionsmarketingagency.com/wp-content/uploads/Mobile-Responsiveness.svg"
//                 alt="Custom Web Design Icon"
//                 className="w-12 h-12"
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">Custom Web Design</h3>
//             <p className="text-gray-600">
//               Custom web design is the process of creating a unique, tailor-made website from scratch. It involves designing every element to match a business's specific needs, branding, and goals. Custom web design ensures a one-of-a-kind online presence, helping businesses stand out and engage their audience effectively.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesPage;





import React from 'react';

const ServicesPage = () => {
  return (
    <div className="w-full bg-white py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex items-center justify-center mb-8 sm:mb-12">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl uppercase text-center">
            Featured Areas of Digital Marketing Expertise
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Paid Ads */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-3 sm:mb-4">
              <img
                src="https://cdn-ilcjemh.nitrocdn.com/YIMaZhlfOlGHRcztYBLdphPnZINmZhBN/assets/images/source/rev-c6d1883/webolutionsmarketingagency.com/wp-content/uploads/SEO.svg"
                alt="Paid Ads Icon"
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              Paid Ads
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Paid advertising, also known as pay-per-click (PPC) advertising, is a marketing method where businesses pay to display their ads on search engines and platforms, helping them reach a wider audience, increase website traffic, and achieve specific marketing goals.
            </p>
          </div>

          {/* SEO */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-3 sm:mb-4">
              <img
                src="https://cdn-ilcjemh.nitrocdn.com/YIMaZhlfOlGHRcztYBLdphPnZINmZhBN/assets/images/source/rev-c6d1883/webolutionsmarketingagency.com/wp-content/uploads/Effective-Digital-Strategies.svg"
                alt="SEO Icon"
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              SEO
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Search Engine Optimization is the practice of optimizing a website to improve its visibility in search engine results. It involves various strategies and techniques to increase organic (non-paid) traffic, enhance online presence, and reach a larger, more relevant audience.
            </p>
          </div>

          {/* Marketing Strategy */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-3 sm:mb-4">
              <img
                src="https://cdn-ilcjemh.nitrocdn.com/YIMaZhlfOlGHRcztYBLdphPnZINmZhBN/assets/images/source/rev-c6d1883/webolutionsmarketingagency.com/wp-content/uploads/Visual-Impact.svg"
                alt="Marketing Strategy Icon"
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              Marketing Strategy
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Marketing strategy is the comprehensive plan that businesses use to achieve their marketing goals. It involves defining target audiences, choosing the right marketing channels, and creating a roadmap to effectively promote products and services, ultimately driving business growth and success.
            </p>
          </div>

          {/* Branding */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-3 sm:mb-4">
              <img
                src="https://cdn-ilcjemh.nitrocdn.com/YIMaZhlfOlGHRcztYBLdphPnZINmZhBN/assets/images/source/rev-c6d1883/webolutionsmarketingagency.com/wp-content/uploads/Visual-Impact.svg"
                alt="Branding Icon"
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              Branding
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Branding is the practice of creating a unique identity for a company, product, or service. It involves defining the brand's values, personality, and visual elements to leave a lasting and positive impression on customers, building recognition and trust.
            </p>
          </div>

          {/* Business Intelligence */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-3 sm:mb-4">
              <img
                src="https://cdn-ilcjemh.nitrocdn.com/YIMaZhlfOlGHRcztYBLdphPnZINmZhBN/assets/images/source/rev-c6d1883/webolutionsmarketingagency.com/wp-content/uploads/Knowledge-Expertise-3.svg"
                alt="Business Intelligence Icon"
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              Business Intelligence
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Business intelligence (BI) is the use of data analysis tools and techniques to transform raw data into valuable insights, helping companies make informed decisions, identify opportunities, and optimize their operations, ultimately leading to improved efficiency and strategic planning.
            </p>
          </div>

          {/* Custom Web Design */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-3 sm:mb-4">
              <img
                src="https://cdn-ilcjemh.nitrocdn.com/YIMaZhlfOlGHRcztYBLdphPnZINmZhBN/assets/images/source/rev-c6d1883/webolutionsmarketingagency.com/wp-content/uploads/Mobile-Responsiveness.svg"
                alt="Custom Web Design Icon"
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              Custom Web Design
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Custom web design is the process of creating a unique, tailor-made website from scratch. It involves designing every element to match a business's specific needs, branding, and goals. Custom web design ensures a one-of-a-kind online presence, helping businesses stand out and engage their audience effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;