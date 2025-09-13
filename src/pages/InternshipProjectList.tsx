import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, BarChart, Coffee, Cpu, Brain, Palette, Layers, Globe, Server, TrendingUp, Zap } from 'lucide-react';

const InternshipProjectList = () => {
  const domains = [
    {
      title: "Web Development",
      icon: <Globe className="w-8 h-8" />,
      path: "/internships/web-development",
      color: "from-blue-500 to-blue-600",
      description: "Build modern, responsive websites and web applications"
    },
    {
      title: "Android Development",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/internships/android-development",
      color: "from-green-500 to-green-600",
      description: "Create native Android applications with modern frameworks"
    },
    {
      title: "Data Science",
      icon: <BarChart className="w-8 h-8" />,
      path: "/internships/data-science",
      color: "from-purple-500 to-purple-600",
      description: "Analyze data and extract meaningful insights"
    },
    {
      title: "Java Programming",
      icon: <Coffee className="w-8 h-8" />,
      path: "/internships/java-programming",
      color: "from-orange-500 to-orange-600",
      description: "Master Java programming and enterprise development"
    },
    {
      title: "C++ Programming",
      icon: <Code className="w-8 h-8" />,
      path: "/internships/cpp-programming",
      color: "from-red-500 to-red-600",
      description: "Learn system programming and performance optimization"
    },
    {
      title: "Python Programming",
      icon: <Code className="w-8 h-8" />,
      path: "/internships/python-programming",
      color: "from-yellow-500 to-yellow-600",
      description: "Develop applications with Python's versatile ecosystem"
    },
    {
      title: "Artificial Intelligence",
      icon: <Brain className="w-8 h-8" />,
      path: "/internships/artificial-intelligence",
      color: "from-indigo-500 to-indigo-600",
      description: "Build intelligent systems and AI applications"
    },
    {
      title: "Machine Learning",
      icon: <Zap className="w-8 h-8" />,
      path: "/internships/machine-learning",
      color: "from-pink-500 to-pink-600",
      description: "Create predictive models and ML algorithms"
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-8 h-8" />,
      path: "/internships/ui-ux-design",
      color: "from-teal-500 to-teal-600",
      description: "Design user-centered interfaces and experiences"
    },
    {
      title: "Flutter Development",
      icon: <Layers className="w-8 h-8" />,
      path: "/internships/flutter-development",
      color: "from-cyan-500 to-cyan-600",
      description: "Build cross-platform mobile applications"
    },
    {
      title: "ReactJS Development",
      icon: <Globe className="w-8 h-8" />,
      path: "/internships/reactjs-development",
      color: "from-blue-400 to-blue-500",
      description: "Create dynamic web applications with React"
    },
    {
      title: "JavaScript Development",
      icon: <Code className="w-8 h-8" />,
      path: "/internships/javascript-development",
      color: "from-yellow-400 to-yellow-500",
      description: "Master modern JavaScript and web technologies"
    },
    {
      title: "DevOps",
      icon: <Server className="w-8 h-8" />,
      path: "/internships/devops",
      color: "from-gray-500 to-gray-600",
      description: "Learn deployment, automation, and infrastructure"
    },
    {
      title: "Digital Marketing",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/internships/digital-marketing",
      color: "from-emerald-500 to-emerald-600",
      description: "Master online marketing strategies and analytics"
    },
    {
      title: "Embedded Systems",
      icon: <Cpu className="w-8 h-8" />,
      path: "/internships/embedded-systems",
      color: "from-slate-500 to-slate-600",
      description: "Work with hardware and embedded programming"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Internship <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Project List</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive internship domains and discover the project tasks that will shape your career.
          </p>
        </div>
      </section>

      {/* Domains Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <Link
                key={index}
                to={domain.path}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${domain.color} p-6 text-white`}>
                  <div className="flex items-center justify-center mb-4">
                    {domain.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center">{domain.title}</h3>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 text-center mb-4">{domain.description}</p>
                  <div className="text-center">
                    <span className="inline-flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
                      View Tasks
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Important Note</h3>
            <p className="text-blue-700">
              These project tasks are available for review to help you understand the internship requirements. 
              To access the complete task list and begin your internship, please apply through our official internship program.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternshipProjectList;