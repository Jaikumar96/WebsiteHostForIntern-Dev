import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Zap, Target, Users, Lightbulb, Globe, TrendingUp, Award } from 'lucide-react';

const Home = () => {
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

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Transform your business with cutting-edge digital solutions"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Boost your online presence and reach your target audience"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Business Consultancy",
      description: "Strategic guidance to accelerate your business growth"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Automation & Machine Learning",
      description: "Leverage AI to automate processes and gain insights"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Business Intelligence",
      description: "Make data-driven decisions with advanced analytics"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Web Development",
      description: "Create stunning, responsive websites that convert"
    }
  ];

  return (
    <div className="min-h-screen">
      <br></br>
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Enhanced 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-300 to-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animate-morph"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-300 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 animate-morph"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-pink-300 to-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 animate-morph"></div>
          
          {/* Additional 3D geometric shapes */}
          <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-gradient-to-r from-indigo-400 to-blue-500 opacity-20 animate-rotate3d transform-gpu rounded-2xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 opacity-30 animate-float transform-gpu rounded-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Transform Your Business
              </span>
              <span className="block text-gray-800 mt-2">Into Digital Excellence</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering businesses with innovative digital solutions, strategic consultancy, and cutting-edge technology to drive growth in the digital age.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button
                onClick={() => handleNavigation('/contact')}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 neon-blue hover-lift"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => handleNavigation('/internships')}
                className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 glass-morphism"
              >
                <span>View Internships</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Floating 3D Elements */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-float shadow-lg neon-blue"></div>
        <div className="absolute top-3/4 right-1/4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg animate-pulse shadow-xl transform rotate-45 neon-purple"></div>
        <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-gradient-to-r from-pink-500 to-rose-400 rounded-full animate-bounce shadow-md"></div>
        <div className="absolute top-2/3 left-1/3 w-5 h-5 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full animate-float animation-delay-1000"></div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background 3D Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full filter blur-2xl animate-float animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to transform your business and drive sustainable growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 border border-gray-100 overflow-hidden card-3d-hover"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* 3D Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                {/* Enhanced Icon Container */}
                <div className="relative z-10 text-blue-600 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50">
                  {service.icon}
                </div>
                
                <h3 className="relative z-10 text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="relative z-10 text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* 3D Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => handleNavigation('/services')}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Internship Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full filter blur-3xl animate-morph"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full filter blur-2xl animate-float animation-delay-3000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Award className="w-16 h-16 text-blue-600 mx-auto mb-6 animate-pulse neon-blue" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Launch Your Tech Career
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Join our comprehensive internship program with hands-on projects across 15+ technology domains. 
                Get industry experience and build your portfolio with real-world projects.
              </p>
            </div>

            {/* Enhanced Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="glass-morphism p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-3d-hover">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">15+</div>
                <div className="text-gray-600">Technology Domains</div>
              </div>
              <div className="glass-morphism p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-3d-hover animation-delay-500">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-gray-600">Hands-on Projects</div>
              </div>
              <div className="glass-morphism p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-3d-hover animation-delay-1000">
                <div className="text-3xl font-bold text-pink-600 mb-2">Real-time</div>
                <div className="text-gray-600">Industry Experience</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => handleNavigation('/internships')}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 neon-purple"
              >
                <span>Explore Internships</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/50 to-purple-600/50 animate-shimmer"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-float">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's work together to build innovative digital solutions that will drive your business forward.
          </p>
          <button
            onClick={() => handleNavigation('/contact')}
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover-3d"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
