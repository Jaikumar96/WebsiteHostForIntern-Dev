import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Target, Eye, Award, Users, Lightbulb, Shield, ArrowRight } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();

  // Function to handle navigation and scroll to top
  const handleNavigation = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust",
      description: "Building long-term relationships through transparency, reliability, and consistent delivery."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working closely with our clients to understand their unique needs and challenges."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Committed to delivering high-quality solutions that exceed expectations."
    }
  ];

  return (
    <div className="min-h-screen">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <br></br>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              About{" "}
              <span className="block md:inline bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                COSMO DIGITAL SERVICES
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a leading digital services and consultancy company based in Chennai, dedicated to transforming businesses through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Vision */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background 3D Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full filter blur-2xl animate-float animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="group glass-morphism p-8 rounded-2xl card-3d-hover relative overflow-hidden"
                 style={{
                   background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.05) 100%)',
                   backdropFilter: 'blur(10px)',
                 }}>
              {/* 3D Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower businesses of all sizes with innovative digital solutions that drive growth, efficiency, and competitive advantage in the rapidly evolving digital landscape. We strive to be the trusted partner that transforms traditional business operations into modern, technology-driven enterprises.
              </p>
            </div>

            <div className="group glass-morphism p-8 rounded-2xl card-3d-hover relative overflow-hidden animation-delay-500"
                 style={{
                   background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(236, 72, 153, 0.05) 100%)',
                   backdropFilter: 'blur(10px)',
                 }}>
              {/* 3D Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-10 h-10 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become the leading digital transformation partner in South India, recognized for our innovative solutions, exceptional service quality, and commitment to client success. We envision a future where every business, regardless of size, can leverage the power of digital technology to achieve unprecedented growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Company Values */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background 3D Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full filter blur-3xl animate-morph"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full filter blur-2xl animate-float animation-delay-3000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 overflow-hidden card-3d-hover"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                  backdropFilter: 'blur(10px)',
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* 3D Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                {/* Enhanced Icon Container */}
                <div className="relative z-10 text-blue-600 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50">
                  {value.icon}
                </div>
                
                <h3 className="relative z-10 text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="relative z-10 text-gray-600">
                  {value.description}
                </p>

                {/* 3D Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Company Approach */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Approach</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Understand",
                description: "We begin by thoroughly understanding your business, challenges, and objectives to create tailored solutions.",
                delay: "0ms"
              },
              {
                number: "2",
                title: "Strategize", 
                description: "We develop comprehensive strategies that align with your business goals and market requirements.",
                delay: "200ms"
              },
              {
                number: "3",
                title: "Execute",
                description: "We implement solutions with precision, ensuring quality delivery and ongoing support for your success.",
                delay: "400ms"
              }
            ].map((step, index) => (
              <div key={index} className="text-center group transform hover:scale-110 transition-all duration-300 animate-float"
                   style={{ animationDelay: step.delay }}>
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto neon-blue">
                    <span className="text-white text-2xl font-bold">{step.number}</span>
                  </div>
                </div>
                
                <div className="glass-morphism rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section - Updated with button handlers */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/50 to-purple-600/50 animate-shimmer"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-float">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our innovative digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handleNavigation('/contact')}
              className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover-3d"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleNavigation('/services')}
              className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 glass-morphism"
            >
              <span>View Services</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
