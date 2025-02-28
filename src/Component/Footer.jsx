// import React from 'react'

// function Footer() {
//   return (
//     <>
// {/* Footer placeholder */}
// <Footer className="bg-gray-800 text-white py-8">
// <div className="container mx-auto px-4">
//   <div className="text-center">
//     <p>© 2025 Webolutions Digital Marketing Agency. All rights reserved.</p>
//   </div>
// </div>
// </Footer>
//     </>
//   )
// }

// export default Footer



import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Webolutions</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Denver's Premier Digital Marketing Agency<br />
              Serving clients nationwide since 1994
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="/about" className="hover:text-white transition duration-300">About Us</a></li>
              <li><a href="/services" className="hover:text-white transition duration-300">Services</a></li>
              <li><a href="/portfolio" className="hover:text-white transition duration-300">Portfolio</a></li>
              <li><a href="/contact" className="hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Phone: <a href="tel:303-997-3465" className="hover:text-white transition duration-300">303-997-3465</a><br />
              Email: <a href="mailto:info@webolutions.com" className="hover:text-white transition duration-300">info@webolutions.com</a><br />
              Address: Denver, CO
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © {new Date().getFullYear()} Webolutions Digital Marketing Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;