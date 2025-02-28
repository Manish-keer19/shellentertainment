// // import React from 'react';

// // const MarketingStrategySection = () => {
// //   return (
// //     <div className="w-full bg-white py-16">
// //       <div className="container mx-auto px-4">
// //         <div className="flex flex-col md:flex-row items-center gap-8">
// //           {/* Left side - Image */}
// //           <div className="w-full md:w-1/2">
// //             <div className="rounded-lg overflow-hidden shadow-lg">
// //               <img 
// //                 src="https://cdn-ilcjemh.nitrocdn.com/YIMaZhlfOlGHRcztYBLdphPnZINmZhBN/assets/images/optimized/rev-c6d1883/webolutionsmarketingagency.com/wp-content/uploads/Webolutions-Marketing-Strategy-Services.jpg" 
// //                 alt="Team meeting in a modern office space with data visualization screen" 
// //                 className="w-full h-full object-cover"
// //               />
// //             </div>
// //           </div>
          
// //           {/* Right side - Content */}
// //           <div className="w-full md:w-1/2">
// //             <h2 className="text-4xl font-bold text-gray-800 mb-6">Marketing Strategy</h2>
            
// //             <p className="text-gray-600 mb-4">
// //               Webolutions specializes in creating tailored marketing strategies that align 
// //               with your business goals and target audience. Our approach begins with a 
// //               comprehensive Discovery process to understand your unique needs, 
// //               followed by in-depth market research and analysis.
// //             </p>
            
// //             <p className="text-gray-600 mb-4">
// //               We then develop a strategic plan that incorporates competitive analysis, target audience 
// //               insights, and goal setting. Our ongoing support ensures that your strategy 
// //               evolves with the market, delivering sustained results and keeping you 
// //               ahead of the competition.
// //             </p>
            
// //             <p className="text-gray-600 mb-6">
// //               With Webolutions, you gain a partner dedicated 
// //               to your long-term growth and success.
// //             </p>
            
// //             <a 
// //               href="#" 
// //               className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-full transition duration-300"
// //             >
// //               Marketing Strategy &gt;
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MarketingStrategySection;




// import React from 'react';

// const ContentSection = ({ imageSrc, title, paragraphs, buttonText, buttonLink, reverse = false }) => {
//   return (
//     <div className="w-full bg-white py-16">
//       <div className="container mx-auto px-4">
//         <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
//           {/* Image Side */}
//           <div className="w-full md:w-1/2">
//             <div className="rounded-lg overflow-hidden shadow-lg">
//               <img
//                 src={imageSrc}
//                 alt="Section visual"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//           {/* Text/Content Side */}
//           <div className="w-full md:w-1/2">
//             <h2 className="text-4xl font-bold text-gray-800 mb-6">{title}</h2>
//             {paragraphs.map((paragraph, index) => (
//               <p key={index} className="text-gray-600 mb-4">
//                 {paragraph}
//               </p>
//             ))}
//             <a
//               href={buttonLink}
//               className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-full transition duration-300"
//             >
//               {buttonText}
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContentSection;




import React from 'react';

const ContentSection = ({ imageSrc, title, paragraphs, buttonText, buttonLink, reverse = false }) => {
  return (
    <div className="w-full bg-white py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 sm:gap-8 md:gap-10`}>
          {/* Image Side */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={imageSrc}
                alt="Section visual"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text/Content Side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              {title}
            </h2>
            {paragraphs?.map((paragraph, index) => (
              <p key={index} className="text-gray-600 text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
                {paragraph}
              </p>
            ))}
            {buttonText && buttonLink && (
              <a
              href={buttonLink}
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-full transition duration-300 text-sm sm:text-base"
            >
              {buttonText}
            </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;