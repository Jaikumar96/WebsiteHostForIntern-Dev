import React, { useState } from 'react';
import { CheckCircle, Clock, MapPin, Award, Send, AlertCircle, Code, Smartphone, BarChart, Coffee, Cpu, Brain, Palette, Layers, Globe, Server, TrendingUp, Zap, ArrowRight, Star, Sparkles, Mail, Calendar, Search, XCircle, User, GraduationCap, Shield } from 'lucide-react';

const Internships = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    city: '',
    passingYear: '',
    domain: '',
    duration: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submissionStep, setSubmissionStep] = useState(1);

  // Certificate Verification States
  const [showVerification, setShowVerification] = useState(false);
  const [certificateId, setCertificateId] = useState('');
  const [verificationLoading, setVerificationLoading] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);
  const [verificationError, setVerificationError] = useState('');

  // URLs
  const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbysvjqNCUP_evY553Qe7ffWisMFTdDbxyXc0QOQWebmAwz9px-lry663e0o2wXIMEg8Lw/exec';
  const VERIFICATION_URL = 'https://script.google.com/macros/s/AKfycbysvjqNCUP_evY553Qe7ffWisMFTdDbxyXc0QOQWebmAwz9px-lry663e0o2wXIMEg8Lw/exec';

  const domains = [
    {
      title: "Web Development",
      icon: <Globe className="w-8 h-8" />,
      imageUrl: "https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif",
      description: "Build modern, responsive websites and web applications",
      value: "web-development",
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js"]
    },
    {
      title: "Android Development",
      icon: <Smartphone className="w-8 h-8" />,
      imageUrl: "https://cdn.dribbble.com/users/1787323/screenshots/10091971/media/d43c019bfeff34be8816481e843ea8c1.gif",
      description: "Create native Android applications with modern frameworks",
      value: "android-development",
      skills: ["Java/Kotlin", "Android Studio", "Firebase", "Material Design"]
    },
    {
      title: "Data Science",
      icon: <BarChart className="w-8 h-8" />,
      imageUrl: "https://cdn.dribbble.com/users/1292677/screenshots/6139167/avento.gif",
      description: "Analyze data and extract meaningful insights",
      value: "data-science",
      skills: ["Python", "Pandas", "Visualization", "Statistics"]
    },
    {
      title: "Java Programming",
      icon: <Coffee className="w-8 h-8" />,
      imageUrl: "https://cdn.dribbble.com/users/4055494/screenshots/15215756/media/d2b66c4ca0192aa26d103448b3d1518b.gif",
      description: "Master Java programming and enterprise development",
      value: "java-programming",
      skills: ["Core Java", "Spring Boot", "Hibernate", "Maven"]
    },
    {
      title: "C++ Programming",
      icon: <Code className="w-8 h-8" />,
      imageUrl: "https://cdn.dribbble.com/users/1059583/screenshots/4171367/coding-freak.gif",
      description: "Learn system programming and performance optimization",
      value: "cpp-programming",
      skills: ["STL", "OOP", "Data Structures", "Algorithms"]
    },
    {
      title: "Python Programming",
      icon: <Code className="w-8 h-8" />,
      imageUrl: "https://cdn.dribbble.com/users/2704414/screenshots/7466903/media/b08ab576316bd4582a34997c6a578b1b.gif",
      description: "Develop applications with Python's versatile ecosystem",
      value: "python-programming",
      skills: ["Django", "Flask", "NumPy", "Automation"]
    },
    {
      title: "Artificial Intelligence",
      icon: <Brain className="w-8 h-8" />,
      imageUrl: "https://cdn.dribbble.com/users/1138875/screenshots/4834809/ai_brain.gif",
      description: "Build intelligent systems and AI applications",
      value: "artificial-intelligence",
      skills: ["Neural Networks", "TensorFlow", "Computer Vision", "NLP"]
    },
    {
      title: "Machine Learning",
      icon: <Cpu className="w-8 h-8" />,
      imageUrl: "https://cdn.dribbble.com/users/1936865/screenshots/15498462/media/0e11c18a2b4b2ed91ba28c7e0a5e5f8e.gif",
      description: "Create predictive models and ML algorithms",
      value: "machine-learning",
      skills: ["Scikit-learn", "Model Training", "Feature Engineering", "Prediction"]
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-8 h-8" />,
      imageUrl: "https://cdn.dribbble.com/users/1615584/screenshots/6420618/comp_4.gif",
      description: "Design user-centered interfaces and experiences",
      value: "ui-ux-design",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"]
    },
    {
      title: "Flutter Development",
      icon: <Layers className="w-8 h-8" />,
      imageUrl: "https://cdn.dribbble.com/users/1998175/screenshots/9633171/media/79f7edc8e3f7e1774cd3dd0cbc4bc1d6.gif",
      description: "Build cross-platform mobile applications",
      value: "flutter-development",
      skills: ["Dart", "Flutter SDK", "Firebase", "State Management"]
    },
    {
      title: "ReactJS Development",
      icon: <Globe className="w-8 h-8" />,
      imageUrl: "https://cdn.dribbble.com/users/1787323/screenshots/6265600/refresh02.gif",
      description: "Create dynamic web applications with React",
      value: "reactjs-development",
      skills: ["React Hooks", "Redux", "JSX", "Component Design"]
    },
    {
      title: "JavaScript Development",
      icon: <Code className="w-8 h-8" />,
      imageUrl: "https://cdn.dribbble.com/users/3967258/screenshots/15022236/media/8d1bdf8b0e1e8b7f3d4c9c4e0e0f8f9f.gif",
      description: "Master modern JavaScript and web technologies",
      value: "javascript-development",
      skills: ["ES6+", "DOM Manipulation", "APIs", "Async Programming"]
    },
    {
      title: "DevOps",
      icon: <Server className="w-8 h-8" />,
      imageUrl: "https://cdn.dribbble.com/users/1138875/screenshots/4834809/ai_brain.gif",
      description: "Learn deployment, automation, and infrastructure",
      value: "devops",
      skills: ["Docker", "AWS", "CI/CD", "Kubernetes"]
    },
    {
      title: "Digital Marketing",
      icon: <TrendingUp className="w-8 h-8" />,
      imageUrl: "https://cdn.dribbble.com/users/1138875/screenshots/16912356/media/f8b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7.gif",
      description: "Master online marketing strategies and analytics",
      value: "digital-marketing",
      skills: ["SEO", "Social Media", "Analytics", "Content Strategy"]
    },
    {
      title: "Embedded Systems",
      icon: <Cpu className="w-8 h-8" />,
      imageUrl: "https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif",
      description: "Work with hardware and embedded programming",
      value: "embedded-systems",
      skills: ["Arduino", "Raspberry Pi", "C Programming", "IoT"]
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDomainSelect = (domainValue) => {
    setFormData({
      ...formData,
      domain: domainValue
    });
  };

  const scrollToApplicationForm = (domainValue) => {
    handleDomainSelect(domainValue);
    const applicationSection = document.querySelector('#application-form');
    if (applicationSection) {
      applicationSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleSubmit = async () => {
    const requiredFields = ['name', 'email', 'phone', 'college', 'city', 'passingYear', 'domain', 'duration'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      setSubmitError('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    setSubmissionStep(1);

    try {
      // Step 1: Processing application
      setSubmissionStep(1);
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Step 2: Validating information
      setSubmissionStep(2);
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Step 3: Submitting to database
      setSubmissionStep(3);
      const submissionData = {
        ...formData,
        timestamp: new Date().toISOString(),
        submissionDate: new Date().toLocaleDateString(),
        submissionTime: new Date().toLocaleTimeString()
      };

      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      // Step 4: Success
      setSubmissionStep(4);
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Internship application submitted:', submissionData);

      setIsSubmitted(true);

      setFormData({
        name: '',
        email: '',
        phone: '',
        college: '',
        city: '',
        passingYear: '',
        domain: '',
        duration: ''
      });

      // Auto-hide success message after 10 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setSubmissionStep(1);
      }, 10000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Certificate Verification Handler
  const handleVerification = async (e) => {
    e.preventDefault();
    if (!certificateId.trim()) {
      setVerificationError('Please enter a certificate ID');
      return;
    }

    setVerificationLoading(true);
    setVerificationError('');
    setVerificationResult(null);

    try {
      const response = await fetch(`${VERIFICATION_URL}?certificateId=${encodeURIComponent(certificateId.trim())}`);
      const data = await response.json();

      if (data.success) {
        setVerificationResult(data.data);
      } else {
        setVerificationError(data.message || 'Certificate not found');
      }
    } catch (err) {
      setVerificationError('Failed to verify certificate. Please try again.');
    } finally {
      setVerificationLoading(false);
    }
  };

  const scrollToVerification = () => {
    setShowVerification(true);
    setTimeout(() => {
      const verificationSection = document.querySelector('#certificate-verification');
      if (verificationSection) {
        verificationSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  const getSelectedDomainInfo = () => {
    return domains.find(domain => domain.value === formData.domain);
  };

  return (
    <div className="min-h-screen">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        
        @keyframes pulse-success {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes checkmark {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-morph {
          animation: morph 8s ease-in-out infinite;
        }
        
        .animate-pulse-success {
          animation: pulse-success 2s ease-in-out infinite;
        }
        
        .animate-checkmark {
          animation: checkmark 0.5s ease-in-out forwards;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
        
        .card-3d-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card-3d-hover:hover {
          transform: translateY(-10px) rotateX(5deg);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .neon-blue {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }
        
        .neon-purple {
          box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
        }
        
        .neon-emerald {
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
        }
        
        .success-ripple {
          position: relative;
          overflow: hidden;
        }
        
        .success-ripple::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(34, 197, 94, 0.3);
          transition: width 0.6s, height 0.6s, top 0.6s, left 0.6s;
        }
        
        .success-ripple.active::before {
          width: 300px;
          height: 300px;
          top: calc(50% - 150px);
          left: calc(50% - 150px);
        }
      `}</style>

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

        <br />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Internship <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Program</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Launch your career with hands-on experience in cutting-edge technologies. Join our comprehensive internship program and work on real-world projects.
          </p>

          {/* Enhanced Quick Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 glass-morphism rounded-lg p-4 card-3d-hover">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-800 font-semibold">15+ Domains</span>
            </div>
            <div className="flex items-center justify-center space-x-2 glass-morphism rounded-lg p-4 card-3d-hover animation-delay-500">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-800 font-semibold">Certificate Included</span>
            </div>
            <div className="flex items-center justify-center space-x-2 glass-morphism rounded-lg p-4 card-3d-hover animation-delay-1000">
              <Clock className="w-5 h-5 text-blue-500" />
              <span className="text-gray-800 font-semibold">Flexible Duration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Program Overview */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background 3D Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full filter blur-2xl animate-float animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group text-center p-6 glass-morphism rounded-xl card-3d-hover">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">Duration</h3>
              <p className="text-gray-600">4 weeks or 8 weeks programs available</p>
            </div>

            <div className="group text-center p-6 glass-morphism rounded-xl card-3d-hover animation-delay-500">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">Mode</h3>
              <p className="text-gray-600">Remote/Online - Work from anywhere</p>
            </div>

            <div className="group text-center p-6 glass-morphism rounded-xl card-3d-hover animation-delay-1000">
              <div className="p-3 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">Compensation</h3>
              <p className="text-gray-600">Performance-based stipend consideration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Available Domains */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background 3D Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full filter blur-3xl animate-morph"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full filter blur-2xl animate-float animation-delay-3000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Choose Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Domain</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of internship domains and discover the perfect match for your career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden card-3d-hover transition-all duration-500 ${formData.domain === domain.value ? 'ring-2 ring-blue-500' : ''
                  }`}
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                  backdropFilter: 'blur(10px)',
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* 3D Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                {/* Professional Header */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 relative overflow-hidden rounded-t-2xl">
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-16 h-16 border border-blue-200 rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 border border-purple-200 rounded-full"></div>
                  </div>

                  {/* 3D Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10 flex items-center space-x-4">
                    {/* Professional Icon */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-white shadow-md flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <div className="text-blue-600">
                        {domain.icon}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {domain.title}
                      </h3>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {domain.skills.slice(0, 2).map((skill, skillIndex) => (
                          <span key={skillIndex} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 bg-white rounded-b-2xl">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{domain.description}</p>

                  {/* Skills Preview */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-2"></span>
                      Key Skills:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {domain.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <button
                    onClick={() => scrollToApplicationForm(domain.value)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 neon-blue"
                  >
                    <Send className="w-4 h-4" />
                    <span>Apply Now</span>
                  </button>
                </div>

                {/* Card Border */}
                <div className="absolute inset-0 rounded-2xl border border-gray-100 group-hover:border-blue-200 transition-colors duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Certificate Display with Verification Button */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full filter blur-3xl animate-float"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Earn Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certificate</span>
            </h2>

            {/* Certificate Image Display */}
            <div className="max-w-2xl mx-auto glass-morphism rounded-lg shadow-lg overflow-hidden card-3d-hover">
              <div className="relative">
                <img
                  src="/certificate.jpg"
                  alt="COSMO DIGITAL SERVICES Internship Certificate"
                  className="w-full h-auto object-cover"
                />
                {/* Optional overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 bg-white">
                <p className="text-gray-600 text-sm">Awarded upon successful completion of internship tasks</p>
              </div>
            </div>

            {/* Certificate Verification Button - Placed under the certificate */}
            <div className="mt-8">
              <button
                onClick={scrollToVerification}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 neon-emerald"
              >
                <Shield className="w-6 h-6" />
                <span>Verify Your Certificate</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-sm text-gray-500 mt-3">
                Already completed an internship? Verify your certificate here
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Certificate Verification Section */}
      {showVerification && (
        <section id="certificate-verification" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full filter blur-3xl animate-morph"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-teal-300 to-cyan-300 rounded-full filter blur-2xl animate-float animation-delay-3000"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certificate Verification</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Verify the authenticity of your COSMO DIGITAL SERVICES internship certificate
              </p>
            </div>

            {/* Verification Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 glass-morphism card-3d-hover">
              <form onSubmit={handleVerification} className="space-y-6">
                <div>
                  <label htmlFor="certificateId" className="block text-sm font-medium text-gray-700 mb-3">
                    Enter Certificate ID
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="certificateId"
                      value={certificateId}
                      onChange={(e) => setCertificateId(e.target.value)}
                      placeholder="e.g., 5b3cfeb"
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-lg"
                    />
                    <Search className="absolute right-4 top-4.5 w-6 h-6 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Enter the certificate ID found on your internship certificate
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={verificationLoading}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 px-8 rounded-xl hover:from-emerald-700 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center space-x-3 font-semibold text-lg neon-emerald"
                >
                  {verificationLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      <span>Verifying Certificate...</span>
                    </>
                  ) : (
                    <>
                      <Shield className="w-6 h-6" />
                      <span>Verify Certificate</span>
                    </>
                  )}
                </button>
              </form>

              {verificationError && (
                <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-lg flex items-center">
                  <XCircle className="w-6 h-6 text-red-500 mr-3" />
                  <div>
                    <p className="text-red-800 font-medium">Verification Failed</p>
                    <p className="text-red-600 text-sm">{verificationError}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Verification Result */}
            {verificationResult && (
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden glass-morphism card-3d-hover">
                {/* Success Header */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-6">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-white/20 rounded-full">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Certificate Verified ✓</h3>
                        <p className="text-green-100">This certificate is authentic and valid</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-emerald-100 rounded-lg">
                          <User className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Student Name</p>
                          <p className="text-xl font-bold text-gray-900 mt-1">{verificationResult.studentName}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-emerald-100 rounded-lg">
                          <GraduationCap className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Domain</p>
                          <p className="text-lg font-semibold text-gray-900 mt-1">{verificationResult.domain} Internship</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-emerald-100 rounded-lg">
                          <Calendar className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Duration</p>
                          <p className="text-lg font-semibold text-gray-900 mt-1">{verificationResult.duration}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Certificate ID</p>
                        <p className="text-lg font-mono font-semibold text-gray-900 mt-1 bg-gray-50 px-3 py-2 rounded-lg">
                          {verificationResult.certificateId}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Start Date</p>
                        <p className="text-lg font-semibold text-gray-900 mt-1">{verificationResult.startDate}</p>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Completion Date</p>
                        <p className="text-lg font-semibold text-gray-900 mt-1">{verificationResult.completionDate}</p>
                      </div>
                    </div>
                  </div>

                  {/* Verification Footer */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <div className="inline-flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full">
                        <Shield className="w-5 h-5 text-emerald-600" />
                        <span className="text-emerald-800 font-medium">Verified & Authentic</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-3">
                        This certificate has been verified and is authentic. <br />
                        Issued by <strong>COSMO DIGITAL SERVICES</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Enhanced Application Form */}
      <section id="application-form" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background 3D Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full filter blur-3xl animate-morph"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full filter blur-2xl animate-float animation-delay-3000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto glass-morphism rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Apply for Internship</h3>

            {/* Error Message */}
            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <span className="text-red-700">{submitError}</span>
              </div>
            )}

            {/* Submission Progress Indicator */}
            {isSubmitting && (
              <div className="mb-6 p-6 bg-blue-50 border-2 border-blue-200 rounded-xl">
                <div className="text-center">
                  <div className="mb-4">
                    <div className="inline-flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                      <span className="text-blue-800 font-semibold">
                        {submissionStep === 1 && "Processing your application..."}
                        {submissionStep === 2 && "Validating information..."}
                        {submissionStep === 3 && "Submitting to our database..."}
                        {submissionStep === 4 && "Almost done!"}
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-blue-200 rounded-full h-2 mb-4">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(submissionStep / 4) * 100}%` }}
                    ></div>
                  </div>

                  <p className="text-sm text-blue-600">
                    Please wait while we process your application...
                  </p>
                </div>
              </div>
            )}

            {/* Application Form */}
            {!isSubmitted && (
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-100"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-100"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-100"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-2">
                      College Name *
                    </label>
                    <input
                      type="text"
                      id="college"
                      name="college"
                      required
                      value={formData.college}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-100"
                      placeholder="Enter your college name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-100"
                      placeholder="Enter your city"
                    />
                  </div>

                  <div>
                    <label htmlFor="passingYear" className="block text-sm font-medium text-gray-700 mb-2">
                      Passing Year *
                    </label>
                    <select
                      id="passingYear"
                      name="passingYear"
                      required
                      value={formData.passingYear}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-100"
                    >
                      <option value="">Select passing year</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-2">
                      Domain *
                    </label>
                    <select
                      id="domain"
                      name="domain"
                      required
                      value={formData.domain}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-100"
                    >
                      <option value="">Select domain</option>
                      {domains.map((domain, index) => (
                        <option key={index} value={domain.value}>
                          {domain.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
                      Duration *
                    </label>
                    <select
                      id="duration"
                      name="duration"
                      required
                      value={formData.duration}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-100"
                    >
                      <option value="">Select duration</option>
                      <option value="4-weeks">4 Weeks</option>
                      <option value="8-weeks">8 Weeks</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none neon-blue"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>

                <div className="mt-6 text-center text-sm text-gray-600">
                  <p>After submitting your application, you'll receive project tasks via email within 24-48 hours.</p>
                </div>
              </div>
            )}

            {/* Simple Success Message directly under the Submit button */}
            {isSubmitted && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 font-semibold">Application submitted successfully!</span>
                </div>
                <p className="text-green-600 text-sm">We'll send project tasks via email.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internships;
