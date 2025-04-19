import React, { useEffect } from 'react';
import './Contactus.css';

export default function Contact() {
  useEffect(() => {
    const handleScroll2 = () => {
      const aboutSection2 = document.getElementById("fadeInEffect");
      if (aboutSection2) {
        const rect = aboutSection2.getBoundingClientRect();
        
        // Apply "show" class when the section is in view, remove it when scrolled out
        if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
          aboutSection2.classList.add("show");
        } else {
          aboutSection2.classList.remove("show");
        }
      }
    };

    // Run the function once to check initial visibility
    handleScroll2();
    
    window.addEventListener("scroll", handleScroll2);
    return () => window.removeEventListener("scroll", handleScroll2);
  }, []);

  return (
    <div id= "c">
    <h2 id="ContactUs">Contact Us! &nbsp;&nbsp;Contact Us! &nbsp;&nbsp;Contact Us! &nbsp;&nbsp;Contact Us! &nbsp;&nbsp;Contact Us! &nbsp;&nbsp;Contact Us! &nbsp;&nbsp;Contact Us! &nbsp;&nbsp;Contact Us! &nbsp;&nbsp;</h2>
    
    <div
      className="relative flex items-center justify-center min-h-screen bg-[#1d1d1d] py-10 px-4"
      id="fadeInEffect"
    >
      <div className="bg-gray-300 max-w-5xl min-w-[90%] sm:min-w-[80%] md:min-w-[70%] lg:min-w-[60%] p-8 rounded-lg shadow-lg mx-4 sm:mx-auto covering">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Contact Info Section */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600">
              Fill in the form to start a conversation with us.
            </p>

            {/* Address */}
            <div className="flex items-center space-x-4 text-gray-600 py-1">
              <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-md font-semibold">Sultanpur, Danapur Cantt, Patna, Bihar</span>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4 text-gray-600 py-1">
              <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-md font-semibold">+91-8709224576</span>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4 text-gray-600 py-1">
              <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-md font-semibold">23161@iiitu.ac.in</span>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-gray-200 text-gray-700 font-medium rounded-lg shadow-md px-5 py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-base text-gray-700 font-medium">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="mt-1 py-3 px-4 text-base border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-base text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="mt-1 py-3 px-4 text-base border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="tel" className="text-base text-gray-700 font-medium">Phone Number</label>
              <input
                type="tel"
                id="tel"
                placeholder="Your Phone Number"
                className="mt-1 py-3 px-4 text-base border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-base text-gray-700 font-medium">Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                className="mt-1 py-3 px-4 text-base border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none h-32"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white text-lg font-bold py-3 rounded-lg hover:bg-orange-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
