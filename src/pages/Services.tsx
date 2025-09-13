import React from 'react';
import { Globe, TrendingUp, Target, Zap, Lightbulb, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Services = () => {
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
      icon: <Globe className="w-12 h-12" />,
      title: "Digital Transformation",
      description: "Complete digital overhaul of your business processes, systems, and customer experiences.",
      features: [
        "Legacy System Modernization",
        "Cloud Migration Services",
        "Process Automation",
        "Digital Strategy Consulting"
      ],
      gradient: "from-blue-50 to-cyan-50",
      iconColor: "text-blue-600",
      accentColor: "from-blue-400/20 to-cyan-400/20"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive growth.",
      features: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Pay-Per-Click Advertising",
        "Content Marketing Strategy"
      ],
      gradient: "from-green-50 to-emerald-50",
      iconColor: "text-green-600",
      accentColor: "from-green-400/20 to-emerald-400/20"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Business Consultancy",
      description: "Strategic guidance and expert advice to accelerate your business growth and efficiency.",
      features: [
        "Business Strategy Development",
        "Market Analysis & Research",
        "Operational Efficiency",
        "Growth Planning"
      ],
      gradient: "from-purple-50 to-violet-50",
      iconColor: "text-purple-600",
      accentColor: "from-purple-400/20 to-violet-400/20"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "AI Automation & Machine Learning",
      description: "Leverage artificial intelligence to automate processes and gain valuable business insights.",
      features: [
        "Process Automation",
        "Predictive Analytics",
        "Chatbot Development",
        "Data Analysis & Insights"
      ],
      gradient: "from-orange-50 to-amber-50",
      iconColor: "text-orange-600",
      accentColor: "from-orange-400/20 to-amber-400/20"
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Business Intelligence",
      description: "Transform your data into actionable insights for informed decision-making.",
      features: [
        "Data Visualization",
        "Dashboard Development",
        "Reporting Solutions",
        "Performance Analytics"
      ],
      gradient: "from-indigo-50 to-blue-50",
      iconColor: "text-indigo-600",
      accentColor: "from-indigo-400/20 to-blue-400/20"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Web Development",
      description: "Create stunning, responsive websites and web applications that drive conversions.",
      features: [
        "Responsive Web Design",
        "E-commerce Development",
        "Custom Web Applications",
        "Website Maintenance"
      ],
      gradient: "from-pink-50 to-rose-50",
      iconColor: "text-pink-600",
      accentColor: "from-pink-400/20 to-rose-400/20"
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

        <br></br>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to transform your business and drive sustainable growth in the digital age.
          </p>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background 3D Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full filter blur-2xl animate-float animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden card-3d-hover transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                  backdropFilter: 'blur(10px)',
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* 3D Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                {/* Professional Header Section */}
                <div className={`bg-gradient-to-r ${service.gradient} p-8 relative overflow-hidden rounded-t-2xl`}>
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-32 h-32 border border-white/20 rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-24 h-24 border border-white/20 rounded-full"></div>
                    <div className="absolute top-1/2 right-8 w-16 h-16 border border-white/20 rounded-full"></div>
                  </div>
                  
                  {/* 3D Corner Accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.accentColor} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10 flex items-center mb-4">
                    <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <div className={service.iconColor}>
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 ml-4 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="relative z-10 text-gray-700 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* Features Section */}
                <div className="p-8 bg-white rounded-b-2xl shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></span>
                    Key Features:
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center group-hover:translate-x-1 transition-transform duration-300"
                          style={{ transitionDelay: `${featureIndex * 50}ms` }}>
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-gray-700 hover:text-gray-900 transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Card Border */}
                <div className="absolute inset-0 rounded-2xl border border-gray-100 group-hover:border-blue-200 transition-colors duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Workflow */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business needs and objectives" },
              { step: "02", title: "Strategy", description: "Developing a comprehensive solution strategy" },
              { step: "03", title: "Implementation", description: "Executing the solution with precision and care" },
              { step: "04", title: "Support", description: "Ongoing support and optimization for success" }
            ].map((phase, index) => (
              <div key={index} className="text-center group transform hover:scale-110 transition-all duration-300 animate-float"
                   style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto neon-blue">
                    <span className="text-white text-xl font-bold">{phase.step}</span>
                  </div>
                </div>
                
                <div className="glass-morphism rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {phase.title}
                  </h3>
                  <p className="text-gray-300">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section - Updated with button handler */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/50 to-purple-600/50 animate-shimmer"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-float">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business and drive growth.
          </p>
          <button
            onClick={() => handleNavigation('/contact')}
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover-3d"
          >
            <span>Contact Us Today</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
