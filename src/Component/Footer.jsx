import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#020617] text-white pt-20">
      {/* Card  */}
      <div className="max-w-5xl mx-auto -mt-32 mb-16  px-4">
        <div className="bg-gradient-to-r from-white to-orange-200 rounded-2xl shadow-xl p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-600 mt-2 mb-6">
            Get the latest updates and news right in your inbox!
          </p>

          <div className="flex justify-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered  max-w-64 rounded-2xl  focus:border-amber-400 focus:outline-none placeholder:text-gray-400"
            />
            <button className="btn bg-gradient-to-r from-pink-400 to-yellow-400 border-none text-black rounded-xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}

      <footer className="max-w-11/12 mx-auto px-6 pb-10">
        <div className="grid md:grid-cols-3 gap-10 text-sm">
          {/* About */}

          <div className="">
            <h3 className="font-semibold mb-3">About Us</h3>
            <p className="text-gray-400">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          {/* Subscribe */}
          <div>
            <h3 className="font-semibold mb-3">Subscribe</h3>
            <p className="text-gray-400 mb-3">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered rounded-r-none rounded-l-2xl w-full focus:border-amber-300  focus:outline-none placeholder:text-gray-400 "
              />
              <button className="btn rounded-l-none rounded-r-2xl bg-gradient-to-r from-yellow-300 to-pink-400 text-black border-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
         {/* Bottom */}
        <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-4">
          ©2024 Your Company All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
