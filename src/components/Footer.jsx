import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8 text-center sm:text-left">
          
          <div className="lg:col-span-1">
            <h2 className="text-xl font-semibold mb-4">CS — Ticket System</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#mission" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact Saled
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Products & Services
                </a>
              </li>
              <li>
                <a href="#stories" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="#download" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Download Apps
                </a>
              </li>
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-3">
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#join" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Links</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 justify-center sm:justify-start">
                <FaTwitter className="text-xl" />
                <span className="text-sm">@CS — Ticket System</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 justify-center sm:justify-start">
                <FaLinkedin className="text-xl" />
                <span className="text-sm">@CS — Ticket System</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 justify-center sm:justify-start">
                <FaFacebook className="text-xl" />
                <span className="text-sm">@CS — Ticket System</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 justify-center sm:justify-start">
                <MdEmail className="text-xl" />
                <span className="text-sm">support@cst.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2025 CS — Ticket System. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
