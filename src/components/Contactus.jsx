import React, { useEffect } from 'react';
import './css_files/Contactus.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function Contact() {
  const form = useRef();
  useEffect(() => {
    const handleScroll2 = () => {
      const aboutSection2 = document.getElementById("fadeInEffect");
      if (aboutSection2) {
        const rect = aboutSection2.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.5 && rect.bottom > 0) {
          aboutSection2.classList.add("show");
        } else {
          aboutSection2.classList.remove("show");
        }
      }
    };

    handleScroll2();
    window.addEventListener("scroll", handleScroll2);
    return () => window.removeEventListener("scroll", handleScroll2);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceid = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateid = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicid = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceid, templateid, form.current, publicid)
      .then(() => {
        alert('Message sent!');
        form.current.reset();
      })
      .catch((error) => {
        alert(`Failed to send message.+${error}`);
        console.error(error);
      });
  };

  return (
    <div id="c">
      <h2 id="ContactUs">
        Contact Me! &nbsp;&nbsp;Contact Me! &nbsp;&nbsp;Contact Me! &nbsp;&nbsp;Contact Me! &nbsp;&nbsp;
        Contact Me! &nbsp;&nbsp;Contact Me! &nbsp;&nbsp;Contact Me! &nbsp;&nbsp;Contact Me! &nbsp;&nbsp;
        Contact Me! &nbsp;&nbsp;Contact Me! &nbsp;&nbsp;Contact Me! &nbsp;&nbsp;Contact Me! &nbsp;&nbsp;
        Contact Me! &nbsp;&nbsp;Contact Me! &nbsp;&nbsp;Contact Me! &nbsp;&nbsp;Contact Me! &nbsp;&nbsp;
      </h2>

      <div
        className="relative flex items-center justify-center min-h-screen py-10 px-4"
        id="fadeInEffect"
      >
        <div className="bg-gray-300 max-w-5xl min-w-[90%] sm:min-w-[80%] md:min-w-[70%] lg:min-w-[60%] p-8 rounded-lg shadow-lg mx-4 sm:mx-auto covering contactform">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Contact Info Section */}
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                Get in Touch
              </h1>
              <p style={{ color: "#4B5563" }} className="text-lg text-gray-600">
                Lets Work Together!<br />
                Fill in the form to start a conversation with us.
              </p>

              {/* Address */}
              <div style={{ color: "#4B5563" }} className="flex items-center space-x-4 text-gray-600 py-1">
                <svg style={{ color: "#6B7280" }} className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-md font-semibold">Patna, Bihar-801503</span>
              </div>

              {/* Phone */}
              <div style={{ color: "#4B5563" }} className="flex items-center space-x-4 text-gray-600 py-1">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-md font-semibold">+91-8709224576</span>
              </div>

              {/* Email */}
              <div style={{ color: "#4B5563" }} className="flex items-center space-x-4 text-gray-600 py-1">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-md font-semibold">23161@iiitu.ac.in</span>
              </div>
            </div>

            {/* Contact Form */}
            <form ref={form} onSubmit={handleSubmit} className="space-y-6 bg-gray-200 text-gray-700 font-medium rounded-lg shadow-md px-5 py-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-base text-gray-700 font-medium">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="mt-1 py-3 px-4 text-base border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-base text-gray-700 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
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
                  name="phone"
                  placeholder="Your Phone Number"
                  className="mt-1 py-3 px-4 text-base border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-base text-gray-700 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message"
                  className="mt-1 py-3 px-4 text-base border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none h-32"
                />
              </div>

              <button
                type="submit"
                id="submitbtn"
                className="w-full bg-orange-600 text-white text-lg font-bold py-3 rounded-lg hover:bg-orange-500 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Style Tag for Colors Only */}
      <style>
        {`
          #fadeInEffect p,
          #fadeInEffect .text-gray-600,
          #fadeInEffect .text-md {
            color: #4B5563;
          }

          #fadeInEffect svg {
            color: #6B7280;
          }

          .contactform {
            background-color: #D1D5DB;
          }

          form {
            background-color: #E5E7EB;
            color: #374151;
          }

          input:focus, textarea:focus{
           outline: none;
  box-shadow: 0 0 0 2px #f97316; /* orange-500 */
  }

          #submitbtn{
          background-color: #f45926}
        `}
      </style>
    </div>
  );
}
