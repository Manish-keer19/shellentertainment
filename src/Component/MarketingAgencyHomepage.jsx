// import React from 'react';

// const MarketingAgencyHomepage = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
     

//       {/* Hero Section */}
//       <section className="relative bg-gray-900 text-white">
//         <div className="absolute inset-0 bg-blue-900 opacity-50 z-0">
//           {/* Background overlay */}
//         </div>
        
//         <div className="container mx-auto px-4 py-20 relative z-10">
//           <div className="max-w-2xl">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Partner for Growth</h1>
//             <p className="text-xl md:text-2xl mb-8">
//               Shell-Entertenment Digital Marketing Agency - Web Design, Development, Marketing
//             </p>
//             <a href="#" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition duration-300">
//               Request my Proposal →
//             </a>
//           </div>
//         </div>
        
//         <div className="absolute inset-0 z-0 overflow-hidden">
//           <div className="absolute inset-0 bg-blue-800 opacity-40"></div>
//           <img 
//             src="https://cdn-ilcjemh.nitrocdn.com/YIMaZhlfOlGHRcztYBLdphPnZINmZhBN/assets/images/optimized/rev-c6d1883/webolutionsmarketingagency.com/wp-content/uploads/Webolutions-Hero.webp" 
//             alt="Background showing a team meeting with analytics dashboard"
//             className="w-full h-full object-cover mix-blend-overlay"
//           />
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="bg-white py-16">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">
//             Shell-Entertenment Digital Marketing Agency
//           </h2>
          
//           <div className="max-w-4xl mx-auto">
//             <p className="text-lg mb-6">
//               <span className="font-semibold">Shell-Entertenment Digital Marketing Agency is based in Denver, Colorado</span> and provides 
//               <span className="text-blue-600 font-semibold"> full-spectrum digital marketing services nationwide</span>. We are 
//               <span className="text-blue-600 font-semibold"> Denver's most experienced website design, development</span>, and 
//               <span className="text-blue-600 font-semibold"> internet marketing company</span>. 
//             </p>
            
//             <p className="text-lg mb-6">
//               We help businesses and organization scale faster, smarter, and easier with
//               <span className="text-blue-600 font-semibold"> strategic marketing strategies that deliver superior results</span>.
//             </p>
//           </div>
//         </div>
//       </section>

      
//     </div>
//   );
// };

// export default MarketingAgencyHomepage;

import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar is in a separate file
import { Link } from 'react-router-dom';

const MarketingAgencyHomepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
    
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-blue-900 opacity-50 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative z-10">
          <div className="max-w-2xl mx-auto sm:mx-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Your Partner for Growth
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">
              Shell-Entertenment Digital Marketing Agency - Web Design, Development, Marketing
            </p>
            <Link to={"/about"} 
        
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 text-sm sm:text-base"
            >
              Request my Proposal →
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-blue-800 opacity-40"></div>
          <img 
            src="https://cdn-ilcjemh.nitrocdn.com/YIMaZhlfOlGHRcztYBLdphPnZINmZhBN/assets/images/optimized/rev-c6d1883/webolutionsmarketingagency.com/wp-content/uploads/Webolutions-Hero.webp" 
            alt="Background showing a team meeting with analytics dashboard"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
      </section>
      {/* Main Content */}
      <section className="bg-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6 sm:mb-8">
            Shell-Entertenment Digital Marketing Agency
          </h2>
          <div className="max-w-md sm:max-w-2xl md:max-w-4xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
              <span className="font-semibold">Shell-Entertenment Digital Marketing Agency is based in Denver, Colorado</span> and provides 
              <span className="text-blue-600 font-semibold"> full-spectrum digital marketing services nationwide</span>. We are 
              <span className="text-blue-600 font-semibold"> Denver's most experienced website design, development</span>, and 
              <span className="text-blue-600 font-semibold"> internet marketing company</span>. 
            </p>
            <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
              We help businesses and organizations scale faster, smarter, and easier with
              <span className="text-blue-600 font-semibold"> strategic marketing strategies that deliver superior results</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingAgencyHomepage;


