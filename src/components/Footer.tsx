import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-2xl animate-float animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4 hover-lift">
              <img 
                src="/logo-removebg-preview.png" 
                alt="COSMO DIGITAL SERVICES" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                COSMO DIGITAL SERVICES
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md leading-relaxed">
              Transforming businesses through innovative digital solutions and comprehensive consultancy services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
                <MapPin size={16} className="text-blue-400" />
                <span>Palani Street, Kodungaiyur, Chennai</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
                <Mail size={16} className="text-blue-400" />
                <span>info@cosmodigitalservices.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/internships" 
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Internships
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Services
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors duration-300">Digital Transformation</li>
              <li className="hover:text-white transition-colors duration-300">Digital Marketing</li>
              <li className="hover:text-white transition-colors duration-300">Business Consultancy</li>
              <li className="hover:text-white transition-colors duration-300">AI Automation</li>
              <li className="hover:text-white transition-colors duration-300">Web Development</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 COSMO DIGITAL SERVICES. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Facebook size={20} className="text-gray-400 hover:text-blue-400 cursor-pointer transition-all duration-300 hover:scale-110 hover-lift" />
              <Twitter size={20} className="text-gray-400 hover:text-blue-400 cursor-pointer transition-all duration-300 hover:scale-110 hover-lift" />
              <Linkedin size={20} className="text-gray-400 hover:text-blue-400 cursor-pointer transition-all duration-300 hover:scale-110 hover-lift" />
              <Instagram size={20} className="text-gray-400 hover:text-pink-400 cursor-pointer transition-all duration-300 hover:scale-110 hover-lift" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
