import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Google Sheets Web App URL - Replace with your actual deployed web app URL
  const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwApy0LrkRUe83STUaDSnKNdFqVTWoE0ND1YZ9vXZv76FoJ7sac2jN8kAhYV-QByRtj9w/exec';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    // Validate required fields
    const requiredFields = ['name', 'email', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      setSubmitError('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Add timestamp and additional data
      const submissionData = {
        ...formData,
        timestamp: new Date().toISOString(),
        submissionDate: new Date().toLocaleDateString(),
        submissionTime: new Date().toLocaleTimeString(),
        serviceInterest: formData.service || 'Not specified'
      };

      // Send data to Google Sheets
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      console.log('Contact form submitted:', submissionData);
      
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        service: '',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <br></br>
      {/* Enhanced Hero Section */}
      <section className="pt-20 pb-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-300 to-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animate-morph"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-300 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000 animate-morph"></div>
          <div className="absolute bottom-10 left-1/3 w-48 h-48 bg-gradient-to-r from-indigo-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating 3D Elements */}
        <div className="absolute top-1/4 left-1/5 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-float shadow-lg neon-blue"></div>
        <div className="absolute top-2/3 right-1/4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg animate-pulse shadow-xl transform rotate-45 neon-purple"></div>
        <div className="absolute top-1/2 right-1/5 w-4 h-4 bg-gradient-to-r from-pink-500 to-rose-400 rounded-full animate-bounce shadow-md"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Let's discuss how we can help you achieve your digital goals.
          </p>
        </div>
      </section>

      {/* Contact Form Section - Full Width */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background 3D Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full filter blur-2xl animate-float animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Let's Start a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Conversation</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              We're here to help you navigate your digital transformation journey. Reach out to us and let's discuss how we can bring your vision to life.
            </p>
          </div>

          {/* Contact Form - Centered */}
          <div className="glass-morphism rounded-2xl p-8 relative overflow-hidden max-w-2xl mx-auto">
            {/* Form background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-400/10 to-rose-400/10 rounded-tr-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send us a Message</h3>
              
              {/* Success Message */}
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2 animate-fade-in">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-700">Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {/* Error Message */}
              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2 animate-fade-in">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-red-700">{submitError}</span>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-100 hover:border-blue-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-100 hover:border-blue-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-100 hover:border-blue-300"
                  >
                    <option value="">Select a service</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="business-consultancy">Business Consultancy</option>
                    <option value="ai-automation">AI Automation & Machine Learning</option>
                    <option value="business-intelligence">Business Intelligence</option>
                    <option value="web-development">Web Development</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none disabled:bg-gray-100 hover:border-blue-300"
                    placeholder="Tell us about your project or requirements"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none neon-blue"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Connect With <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Multiple ways to reach us for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email Card */}
            <div className="group glass-morphism p-8 rounded-xl card-3d-hover relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 neon-blue">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">Email Us</h3>
                <p className="text-gray-600 mb-2">info@cosmodigitalservices.com</p>
                <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="group glass-morphism p-8 rounded-xl card-3d-hover relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 neon-purple">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">Visit Us</h3>
                <p className="text-gray-600 mb-2">Palani Street, Kodungaiyur</p>
                <p className="text-gray-600 mb-2">Chennai, Tamil Nadu</p>
                <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM</p>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="group glass-morphism p-8 rounded-xl card-3d-hover relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">Quick Response</h3>
                <p className="text-gray-600 mb-2">Fast & Reliable</p>
                <p className="text-sm text-gray-500">Average response: 2-4 hours</p>
              </div>
            </div>
          </div>

          {/* Location Showcase - Static Map Image */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Find Us
            </h3>
            
            <div className="glass-morphism rounded-2xl overflow-hidden shadow-xl">
              <div className="relative">
                {/* You'll need to replace this with an actual screenshot of your location */}
                <div className="w-full h-80 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 relative overflow-hidden">
                  {/* Decorative map-like elements */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-10 left-10 w-4 h-4 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-20 right-20 w-3 h-3 bg-purple-500 rounded-full"></div>
                    <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="absolute bottom-10 right-1/3 w-3 h-3 bg-pink-500 rounded-full"></div>
                    
                    {/* Street lines */}
                    <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gray-300 transform rotate-12"></div>
                    <div className="absolute top-2/3 left-0 w-full h-0.5 bg-gray-300 transform -rotate-6"></div>
                    <div className="absolute top-0 left-1/3 w-0.5 h-full bg-gray-300 transform rotate-3"></div>
                    <div className="absolute top-0 right-1/4 w-0.5 h-full bg-gray-300 transform -rotate-2"></div>
                  </div>
                  
                  {/* Center location marker */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md text-sm font-medium text-gray-800 whitespace-nowrap">
                        Cosmo Digital Services
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Location overlay info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                  <div className="text-white">
                    <h4 className="text-lg font-semibold mb-2">Our Location</h4>
                    <p className="text-sm opacity-90">Palani Street, Kodungaiyur, Chennai, Tamil Nadu</p>
                  </div>
                </div>
              </div>
              
              {/* Location details below map */}
              <div className="p-6 bg-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Palani Street, Kodungaiyur, Chennai, Tamil Nadu</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Mon-Fri: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-float">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have already started their digital transformation journey with us.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="glass-morphism rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 card-3d-hover">
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                Get Started Today
              </h3>
              <p className="text-gray-300 mb-4">
                Schedule a free consultation to discuss your project requirements.
              </p>
              <div className="flex items-center justify-center space-x-2 text-blue-400">
                <Mail className="w-5 h-5" />
                <span>info@cosmodigitalservices.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
