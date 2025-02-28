// // // import React from "react";
// // // import { Link } from "react-router-dom";

// // // function Navbar() {
// // //   return (
// // //     <>
// // //       {/* Navigation */}
// // //       <header className="bg-white shadow-md  top-0 left-0 right-0 z-10 sticky">
// // //         <div className="container mx-auto px-4">
// // //           <div className="flex items-center justify-between py-4">
// // //             <div className="flex items-center justify-center">
// // //               <div className=" w-20 h-20 ">
// // //                 <Link to={"/"}>
// // //                   <img
// // //                     className="w-full h-full object-center rounded-lg"
// // //                     //   src="/assets/logo.jpg"
// // //                     src="/assets/logo_modified.png"
// // //                     alt="Logo"
// // //                   />
// // //                 </Link>
// // //               </div>
// // //             </div>

// // //             <nav className="hidden md:flex space-x-6">
// // //               <div className="relative group">
// // //                 <Link
// // //                   to={"/"}
// // //                   className="flex items-center text-gray-700 px-2 py-1 hover:text-blue-600"
// // //                 >
// // //                   Digital Marketing
// // //                   <svg
// // //                     className="ml-1 w-4 h-4"
// // //                     fill="none"
// // //                     stroke="currentColor"
// // //                     viewBox="0 0 24 24"
// // //                     xmlns="http://www.w3.org/2000/svg"
// // //                   >
// // //                     <path
// // //                       strokeLinecap="round"
// // //                       strokeLinejoin="round"
// // //                       strokeWidth="2"
// // //                       d="M19 9l-7 7-7-7"
// // //                     ></path>
// // //                   </svg>
// // //                 </Link>
// // //               </div>

// // //               <div className="relative group">
// // //                 <Link
// // //                   to={"/"}
// // //                   className="flex items-center text-gray-700 px-2 py-1 hover:text-blue-600"
// // //                 >
// // //                   Website Design & Development
// // //                   <svg
// // //                     className="ml-1 w-4 h-4"
// // //                     fill="none"
// // //                     stroke="currentColor"
// // //                     viewBox="0 0 24 24"
// // //                     xmlns="http://www.w3.org/2000/svg"
// // //                   >
// // //                     <path
// // //                       strokeLinecap="round"
// // //                       strokeLinejoin="round"
// // //                       strokeWidth="2"
// // //                       d="M19 9l-7 7-7-7"
// // //                     ></path>
// // //                   </svg>
// // //                 </Link>
// // //               </div>

// // //               <div className="relative group">
// // //                 <Link
// // //                   to={"/"}
// // //                   className="flex items-center text-gray-700 px-2 py-1 hover:text-blue-600"
// // //                 >
// // //                   Marketing Strategy
// // //                   <svg
// // //                     className="ml-1 w-4 h-4"
// // //                     fill="none"
// // //                     stroke="currentColor"
// // //                     viewBox="0 0 24 24"
// // //                     xmlns="http://www.w3.org/2000/svg"
// // //                   >
// // //                     <path
// // //                       strokeLinecap="round"
// // //                       strokeLinejoin="round"
// // //                       strokeWidth="2"
// // //                       d="M19 9l-7 7-7-7"
// // //                     ></path>
// // //                   </svg>
// // //                 </Link>
// // //               </div>

// // //               <Link to={"/"}
                
// // //                 className="text-gray-700 px-2 py-1 hover:text-blue-600"
// // //               >
// // //                 Our Work
// // //               </Link>

// // //               <Link to={"/about"} className="relative group">
// // //                 <button className="flex items-center text-gray-700 px-2 py-1 hover:text-blue-600">
// // //                   About
// // //                   <svg
// // //                     className="ml-1 w-4 h-4"
// // //                     fill="none"
// // //                     stroke="currentColor"
// // //                     viewBox="0 0 24 24"
// // //                     xmlns="http://www.w3.org/2000/svg"
// // //                   >
// // //                     <path
// // //                       strokeLinecap="round"
// // //                       strokeLinejoin="round"
// // //                       strokeWidth="2"
// // //                       d="M19 9l-7 7-7-7"
// // //                     ></path>
// // //                   </svg>
// // //                 </button>
// // //               </Link>
// // //             </nav>

// // //             <div className="flex items-center">
// // //               <div className="hidden md:block mr-6">
// // //                 <a
// // //                   href="tel:303-997-3465"
// // //                   className="text-gray-700 hover:text-blue-600"
// // //                 >
// // //                   <span className="mr-2">📞</span>303-997-3465
// // //                 </a>
// // //               </div>

// // //               <Link
// // //                 to={"/about"}
// // //                 href="#"
// // //                 className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition duration-300"
// // //               >
// // //                 GET A QUOTE
// // //               </Link>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </header>
// // //     </>
// // //   );
// // // }

// // // export default Navbar;



// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";

// // function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <header className="bg-white shadow-md sticky top-0 left-0 right-0 z-10">
// //       <div className="container mx-auto px-4">
// //         <div className="flex items-center justify-between py-4">
// //           {/* Logo */}
// //           <div className="flex items-center">
// //             <Link to={"/"} className="w-16 h-16 md:w-20 md:h-20">
// //               <img
// //                 className="w-full h-full object-center rounded-lg"
// //                 src="/assets/logo_modified.png"
// //                 alt="Logo"
// //               />
// //             </Link>
// //           </div>

// //           {/* Hamburger Menu Button (Mobile) */}
// //           <button
// //             className="md:hidden text-gray-700 focus:outline-none"
// //             onClick={toggleMenu}
// //           >
// //             <svg
// //               className="w-6 h-6"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //               xmlns="http://www.w3.org/2000/svg"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth="2"
// //                 d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
// //               />
// //             </svg>
// //           </button>

// //           {/* Navigation Menu */}
// //           <nav
// //             className={`${
// //               isOpen ? "block" : "hidden"
// //             } md:flex md:items-center w-full md:w-auto absolute md:static top-20 left-0 bg-white md:bg-transparent shadow-md md:shadow-none`}
// //           >
// //             <div className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
// //               <div className="relative group py-2 md:py-0">
// //                 <Link
// //                   to={"/digital-marketing-services"}
// //                   className="flex items-center text-gray-700 px-2 py-1 hover:text-blue-600"
// //                 >
// //                   Digital Marketing
// //                   <svg
// //                     className="ml-1 w-4 h-4"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     viewBox="0 0 24 24"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth="2"
// //                       d="M19 9l-7 7-7-7"
// //                     />
// //                   </svg>
// //                 </Link>
// //               </div>

// //               <div className="relative group py-2 md:py-0">
// //                 <Link
// //                   to={"/"}
// //                   className="flex items-center text-gray-700 px-2 py-1 hover:text-blue-600"
// //                 >
// //                   Website Design & Development
// //                   <svg
// //                     className="ml-1 w-4 h-4"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     viewBox="0 0 24 24"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth="2"
// //                       d="M19 9l-7 7-7-7"
// //                     />
// //                   </svg>
// //                 </Link>
// //               </div>

// //               <div className="relative group py-2 md:py-0">
// //                 <Link
// //                   to={"/"}
// //                   className="flex items-center text-gray-700 px-2 py-1 hover:text-blue-600"
// //                 >
// //                   Marketing Strategy
// //                   <svg
// //                     className="ml-1 w-4 h-4"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     viewBox="0 0 24 24"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth="2"
// //                       d="M19 9l-7 7-7-7"
// //                     />
// //                   </svg>
// //                 </Link>
// //               </div>

// //               <Link
// //                 to={"/"}
// //                 className="text-gray-700 px-2 py-2 md:py-1 hover:text-blue-600"
// //               >
// //                 Our Work
// //               </Link>

// //               <div className="relative group py-2 md:py-0">
// //                 <Link
// //                   to={"/about"}
// //                   className="flex items-center text-gray-700 px-2 py-1 hover:text-blue-600"
// //                 >
// //                   About
// //                   <svg
// //                     className="ml-1 w-4 h-4"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     viewBox="0 0 24 24"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth="2"
// //                       d="M19 9l-7 7-7-7"
// //                     />
// //                   </svg>
// //                 </Link>
// //               </div>
// //             </div>
// //           </nav>

// //           {/* Contact Info and CTA */}
// //           <div className="hidden md:flex items-center">
// //             <a
// //               href="tel:303-997-3465"
// //               className="text-gray-700 hover:text-blue-600 mr-6"
// //             >
// //               <span className="mr-2">📞</span>303-997-3465
// //             </a>
// //             <Link
// //               to={"/about"}
// //               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition duration-300 whitespace-nowrap"
// //             >
// //               GET A QUOTE
// //             </Link>
// //           </div>
// //         </div>

// //         {/* Mobile Contact Info and CTA */}
// //         {isOpen && (
// //           <div className="md:hidden pb-4 px-4">
// //             <a
// //               href="tel:303-997-3465"
// //               className="text-gray-700 hover:text-blue-600 block mb-4"
// //             >
// //               <span className="mr-2">📞</span>303-997-3465
// //             </a>
// //             <Link
// //               to={"/about"}
// //               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition duration-300 inline-block"
// //             >
// //               GET A QUOTE
// //             </Link>
// //           </div>
// //         )}
// //       </div>
// //     </header>
// //   );
// // }

// // export default Navbar;




// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="bg-white shadow-md sticky top-0 left-0 right-0 z-10">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between py-4">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link to={"/"} className="w-16 h-16 md:w-20 md:h-20">
//               <img
//                 className="w-full h-full object-center rounded-lg"
//                 src="/assets/logo_modified.png"
//                 alt="Logo"
//               />
//             </Link>
//           </div>

//           {/* Hamburger Menu Button (Mobile) */}
//           <button
//             className="md:hidden text-gray-700 focus:outline-none"
//             onClick={toggleMenu}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//               />
//             </svg>
//           </button>

//           {/* Navigation Menu */}
//           <nav
//             className={`${
//               isOpen ? "block" : "hidden"
//             } md:flex md:items-center w-full md:w-auto absolute md:static top-20 left-0 bg-white md:bg-transparent shadow-md md:shadow-none`}
//           >
//             <div className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
//               <div className="relative group py-2 md:py-0">
//                 <Link
//                   to={"/digital-marketing-services"}
//                   className="flex items-center text-gray-700 px-2 py-1 hover:text-blue-600"
//                 >
//                   Digital Marketing
//                   <svg
//                     className="ml-1 w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </Link>
//               </div>

//               <div className="relative group py-2 md:py-0">
//                 <Link
//                   to={"/"}
//                   className="flex items-center text-gray-700 px-2 py-1 hover:text-blue-600"
//                 >
//                   Website Design & Development
//                   <svg
//                     className="ml-1 w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </Link>
//               </div>

//               <div className="relative group py-2 md:py-0">
//                 <Link
//                   to={"/"}
//                   className="flex items-center text-gray-700 px-2 py-1 hover:text-blue-600"
//                 >
//                   Marketing Strategy
//                   <svg
//                     className="ml-1 w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </Link>
//               </div>

//               <Link
//                 to={"/"}
//                 className="text-gray-700 px-2 py-2 md:py-1 hover:text-blue-600"
//               >
//                 Our Work
//               </Link>

//               <div className="relative group py-2 md:py-0">
//                 <Link
//                   to={"/about"}
//                   className="flex items-center text-gray-700 px-2 py-1 hover:text-blue-600"
//                 >
//                   About
//                   <svg
//                     className="ml-1 w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </Link>
//               </div>
//             </div>
//           </nav>

//           {/* Contact Info and CTA */}
//           <div className="hidden md:flex items-center">
//             <a
//               href="https://www.instagram.com/shellentertainment?igsh=NzZvdHlybHlvM3Mx"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-700 hover:text-pink-600 mr-6 flex items-center"
//             >
//               <span className="mr-2">📸</span>Instagram
//             </a>
//             <Link
//               to={"/about"}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition duration-300 whitespace-nowrap"
//             >
//               GET A QUOTE
//             </Link>
//           </div>
//         </div>

//         {/* Mobile Contact Info and CTA */}
//         {isOpen && (
//           <div className="md:hidden pb-4 px-4">
//             <a
//               href="https://www.instagram.com/shellentertainment?igsh=NzZvdHlybHlvM3Mx"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-700 hover:text-pink-600 block mb-4"
//             >
//               <span className="mr-2">📸</span>Instagram
//             </a>
//             <Link
//               to={"/about"}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition duration-300 inline-block"
//             >
//               GET A QUOTE
//             </Link>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Navbar;




import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react"; // Importing Instagram icon

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to={"/"} className="w-16 h-16 md:w-20 md:h-20">
              <img
                className="w-full h-full object-center rounded-lg"
                src="/assets/logo_modified.png"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Hamburger Menu Button (Mobile) */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Navigation Menu */}
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:items-center w-full md:w-auto absolute md:static top-20 left-0 bg-white md:bg-transparent shadow-md md:shadow-none`}
          >
            <div className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
              <div className="relative group py-2 md:py-0">
                <Link
                  to={"/digital-marketing-services"}
                  className="flex items-center text-gray-700 px-2 py-1 hover:text-blue-600"
                >
                  Digital Marketing
                </Link>
              </div>

              <div className="relative group py-2 md:py-0">
                <Link
                  to={"/"}
                  className="flex items-center text-gray-700 px-2 py-1 hover:text-blue-600"
                >
                  Website Design & Development
                </Link>
              </div>

              <div className="relative group py-2 md:py-0">
                <Link
                  to={"/"}
                  className="flex items-center text-gray-700 px-2 py-1 hover:text-blue-600"
                >
                  Marketing Strategy
                </Link>
              </div>

              <Link
                to={"/"}
                className="text-gray-700 px-2 py-2 md:py-1 hover:text-blue-600"
              >
                Our Work
              </Link>

              <div className="relative group py-2 md:py-0">
                <Link
                  to={"/about"}
                  className="flex items-center text-gray-700 px-2 py-1 hover:text-blue-600"
                >
                  About
                </Link>
              </div>
            </div>
          </nav>

          {/* Contact Info and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Instagram Link with Icon */}
            <a
              href="https://www.instagram.com/shellentertainment?igsh=NzZvdHlybHlvM3Mx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-pink-600"
            >
              <Instagram className="w-6 h-6" />
            </a>

            <Link
              to={"/about"}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition duration-300 whitespace-nowrap"
            >
              GET A QUOTE
            </Link>
          </div>
        </div>

        {/* Mobile Contact Info and CTA */}
        {isOpen && (
          <div className="md:hidden pb-4 px-4">
            <a
              href="https://www.instagram.com/shellentertainment?igsh=NzZvdHlybHlvM3Mx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-pink-600 block mb-4"
            >
              <Instagram className="w-6 h-6 inline-block mr-2" /> Follow us on Instagram
            </a>
            <Link
              to={"/about"}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition duration-300 inline-block"
            >
              GET A QUOTE
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
