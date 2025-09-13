import React from 'react';
import { ArrowLeft, CheckCircle, BarChart, Code, Globe, Play, Github, Video, Upload, Users, Monitor, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataScience = () => {
  const tasks = [
    {
      id: 1,
      title: "Simple Data Analysis with CSV",
      level: "Beginner",
      description: "Analyze a simple CSV dataset and create basic charts and statistics.",
      steps: [
        "Download a simple dataset (like students grades or sales data)",
        "Load the data using Python pandas library",
        "Calculate basic statistics (mean, median, mode, count)",
        "Create simple bar charts and pie charts",
        "Write a summary of your findings"
      ],
      tools: "Python, Pandas, Matplotlib, Simple CSV Data",
      expectedOutput: "A data analysis report with charts and basic statistics",
      videoDemo: "Show loading data, creating charts, and explain your findings from the analysis"
    },
    {
      id: 2,
      title: "Personal Expense Data Analyzer",
      level: "Beginner", 
      description: "Create a program to analyze personal monthly expenses with visualizations.",
      steps: [
        "Create sample expense data (food, transport, entertainment, etc.)",
        "Calculate total expenses by category",
        "Find highest and lowest expense categories",
        "Create pie chart showing expense distribution",
        "Generate monthly expense summary report"
      ],
      tools: "Python, Pandas, Matplotlib, Basic Data Creation",
      expectedOutput: "An expense analyzer with category-wise breakdown and charts",
      videoDemo: "Demonstrate expense analysis, show charts, and explain spending patterns"
    },
    {
      id: 3,
      title: "Simple Survey Data Dashboard",
      level: "Beginner",
      description: "Create a basic dashboard to display survey results with charts.",
      steps: [
        "Create sample survey data (age groups, preferences, ratings)",
        "Count responses for different categories",
        "Create bar charts for survey responses",
        "Display basic statistics like average ratings",
        "Make a simple dashboard showing all results"
      ],
      tools: "Python, Pandas, Matplotlib, Simple Dashboard",
      expectedOutput: "A survey results dashboard with multiple charts and statistics",
      videoDemo: "Show different survey charts and explain the survey insights"
    },
    {
      id: 4,
      title: "Student Grade Tracker",
      level: "Beginner",
      description: "Build a system to track and analyze student performance across subjects.",
      steps: [
        "Create student data with names, subjects, and marks",
        "Calculate average grades for each student",
        "Find top performing students in each subject",
        "Create charts showing grade distribution",
        "Generate individual student report cards"
      ],
      tools: "Python, Pandas, Data Analysis, Simple Statistics",
      expectedOutput: "A grade tracking system with performance analysis",
      videoDemo: "Show student performance analysis, charts, and individual report generation"
    },
    {
      id: 5,
      title: "Simple Weather Data Analyzer",
      level: "Beginner",
      description: "Analyze weather patterns using historical weather data.",
      steps: [
        "Use simple weather data (temperature, humidity, rainfall)",
        "Find average temperatures for different months",
        "Identify hottest and coldest days",
        "Create line charts showing temperature trends",
        "Compare seasonal weather patterns"
      ],
      tools: "Python, Pandas, Matplotlib, Weather Data",
      expectedOutput: "Weather analysis with seasonal comparisons and trend charts",
      videoDemo: "Show weather trend analysis and explain seasonal patterns found"
    },
    {
      id: 6,
      title: "Simple Product Sales Dashboard",
      level: "Beginner",
      description: "Create a sales analysis dashboard for a small business.",
      steps: [
        "Create sample sales data (products, quantities, dates, prices)",
        "Calculate total sales by product category",
        "Find best and worst selling products",
        "Create monthly sales trend charts",
        "Generate simple sales summary reports"
      ],
      tools: "Python, Pandas, Sales Analysis, Chart Creation",
      expectedOutput: "A sales dashboard with product performance and trends",
      videoDemo: "Demonstrate sales analysis, show product comparisons, and explain trends"
    },
    {
      id: 7,
      title: "Simple Social Media Analytics",
      level: "Beginner",
      description: "Analyze social media post performance with basic metrics.",
      steps: [
        "Create sample social media data (posts, likes, shares, comments)",
        "Calculate engagement rates for different posts",
        "Find most popular post types and topics",
        "Create charts showing engagement trends",
        "Generate content performance summary"
      ],
      tools: "Python, Basic Analytics, Data Visualization",
      expectedOutput: "Social media analytics with engagement insights",
      videoDemo: "Show post performance analysis and explain what makes content popular"
    },
    {
      id: 8,
      title: "Basic Customer Feedback Analyzer",
      level: "Beginner",
      description: "Analyze customer reviews and feedback to find common themes.",
      steps: [
        "Create sample customer feedback data",
        "Count positive, negative, and neutral feedback",
        "Find most common complaint and praise topics",
        "Create simple charts showing feedback distribution",
        "Generate customer satisfaction summary report"
      ],
      tools: "Python, Text Analysis Basics, Simple Counting",
      expectedOutput: "Customer feedback analysis with sentiment overview",
      videoDemo: "Show feedback analysis process and explain customer satisfaction insights"
    },
    {
      id: 9,
      title: "Simple Health Data Tracker",
      level: "Beginner",
      description: "Create a basic health metrics tracker and analyzer.",
      steps: [
        "Create sample health data (weight, steps, sleep hours)",
        "Calculate weekly and monthly averages",
        "Track progress towards health goals",
        "Create simple trend charts for different metrics",
        "Generate personal health summary reports"
      ],
      tools: "Python, Health Data Analysis, Progress Tracking",
      expectedOutput: "Health tracking system with progress visualization",
      videoDemo: "Show health metrics analysis and demonstrate progress tracking features"
    },
    {
      id: 10,
      title: "Complete Data Analysis Project",
      level: "Beginner",
      description: "Combine multiple analysis techniques into a comprehensive data project.",
      steps: [
        "Choose a topic that interests you (sports, movies, books, etc.)",
        "Collect or create relevant data for your topic",
        "Perform multiple types of analysis from previous tasks",
        "Create a comprehensive dashboard with multiple charts",
        "Write detailed findings and recommendations",
        "Present your analysis in a clear, easy-to-understand format"
      ],
      tools: "Python, Complete Data Analysis Stack, Multiple Visualization Types",
      expectedOutput: "A complete data analysis project with comprehensive insights",
      videoDemo: "Present your complete analysis project showing all features and key insights discovered"
    }
  ];

  const prerequisites = [
    "Basic understanding of Python programming",
    "Familiarity with simple mathematics and calculations",
    "Understanding of basic computer file operations",
    "Interest in working with data and finding patterns"
  ];

  const learningObjectives = [
    "Learn fundamental data analysis techniques",
    "Master data visualization with charts and graphs",
    "Understand how to work with CSV data files",
    "Develop skills in finding patterns and trends in data",
    "Learn to create simple dashboards and reports",
    "Build practical data analysis projects"
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      <br></br>
      {/* Mobile-Friendly Enhanced Header */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-20 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
        {/* 3D Background Elements - Reduced on mobile */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-5 w-32 h-32 sm:top-20 sm:left-10 sm:w-64 sm:h-64 bg-gradient-to-r from-purple-300 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animate-morph"></div>
          <div className="absolute top-20 right-5 w-40 h-40 sm:top-40 sm:right-10 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-300 to-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000 animate-morph"></div>
          <div className="absolute bottom-5 left-1/3 w-24 h-24 sm:bottom-10 sm:w-48 sm:h-48 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating 3D Elements - Hidden on small mobile */}
        <div className="hidden sm:block absolute top-1/4 left-1/5 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full animate-float shadow-lg"></div>
        <div className="hidden sm:block absolute top-2/3 right-1/4 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-400 rounded-lg animate-pulse shadow-xl transform rotate-45"></div>
        <div className="hidden sm:block absolute top-1/2 right-1/5 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full animate-bounce shadow-md"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Mobile-Responsive Header - Fixed text wrapping */}
          <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
            <div className="flex items-center mb-4 sm:mb-0 sm:mr-4">
              <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 mr-3 sm:mr-4 hover:scale-110 transition-transform duration-300">
                <BarChart className="w-8 h-8 sm:w-12 sm:h-12 text-purple-600" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  Data Science
                </h1>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                  Internship
                </div>
              </div>
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6">Analyze data and extract meaningful insights</p>

          {/* Mobile-Friendly Professional Instructions */}
          <div className="glass-morphism rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-purple-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 rounded-tr-full"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white mr-0 sm:mr-4 mb-3 sm:mb-0 w-fit">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Internship Project Guidelines</h2>
              </div>

              {/* Mobile-First Grid Layout */}
              <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 mb-6 sm:mb-8">
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-purple-100 mr-3">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Task Selection</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Choose any <strong>2 tasks</strong> from the 10 beginner-friendly data science tasks provided below. Select based on your interests and learning goals.
                  </p>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-blue-100 mr-3">
                      <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Analysis Demo</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Create a <strong>3-minute video</strong> or take <strong>screenshots</strong> showing your data analysis results and charts. Upload to LinkedIn with <strong>#CosmoDigitalServices</strong>.
                  </p>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-indigo-100 mr-3">
                      <Github className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Code Repository</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Upload your complete data science project code to <strong>GitHub</strong> with proper documentation. Repository links will be collected through our submission portal.
                  </p>
                </div>
              </div>

              {/* Mobile-Friendly Requirements Section */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-purple-500">
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-purple-600" />
                  Submission Requirements
                </h4>
                <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4 text-sm text-gray-700">
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Video/Screenshot Content Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Data loading and analysis process</li>
                      <li>Charts and visualizations created</li>
                      <li>Key insights and findings explanation</li>
                      <li>Clear demonstration of analysis results</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Code Repository Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Complete Python notebook or script files</li>
                      <li>Sample data files used in analysis</li>
                      <li>README.md with setup and run instructions</li>
                      <li>Clear code comments and documentation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Friendly Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative">
        {/* Background 3D Elements - Reduced on mobile */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-5 right-5 w-32 h-32 sm:top-10 sm:right-10 sm:w-64 sm:h-64 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-5 left-5 w-24 h-24 sm:bottom-10 sm:left-10 sm:w-48 sm:h-48 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full filter blur-2xl animate-float animation-delay-2000"></div>
        </div>

        {/* Mobile-First Layout */}
        <div className="space-y-8 lg:space-y-0 lg:flex lg:flex-row lg:gap-8 relative z-10">
          
          {/* Mobile-First Sidebar */}
          <div className="w-full lg:w-1/3 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              {/* Learning Objectives */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Learning Objectives</h3>
                <ul className="space-y-2 sm:space-y-3 relative z-10">
                  {learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prerequisites */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden animation-delay-500">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Prerequisites</h3>
                <ul className="space-y-2 sm:space-y-3 relative z-10">
                  {prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{prerequisite}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Duration Options */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden animation-delay-1000">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Duration Options</h3>
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg hover:from-purple-100 hover:to-blue-100 transition-colors duration-300">
                    <span className="font-medium text-purple-700 text-sm sm:text-base">4 Weeks</span>
                    <span className="text-purple-600 text-xs sm:text-sm">Intensive Track</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-colors duration-300">
                    <span className="font-medium text-blue-700 text-sm sm:text-base">8 Weeks</span>
                    <span className="text-blue-600 text-xs sm:text-sm">Comprehensive Track</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-First Main Content */}
          <div className="w-full lg:w-2/3 lg:order-1">
            <div className="glass-morphism rounded-xl p-4 sm:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-bl-full"></div>
              
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Data Science <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Project Tasks</span>
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  {tasks.map((task, index) => (
                    <div 
                      key={task.id} 
                      className="group glass-morphism border border-gray-200 rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* 3D Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                              <span className="text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 px-2 sm:px-3 py-1 rounded-full">
                                Task {task.id}
                              </span>
                              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(task.level)}`}>
                                {task.level}
                              </span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                              {task.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{task.description}</p>
                        
                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-2"></span>
                            Implementation Steps:
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                            {task.steps.map((step, stepIndex) => (
                              <li key={stepIndex} className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform duration-300 leading-relaxed" style={{ transitionDelay: `${stepIndex * 50}ms` }}>
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-600" />
                            Required Tools:
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm bg-gray-50 p-2 rounded-lg leading-relaxed">{task.tools}</p>
                        </div>

                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-purple-600" />
                            Expected Deliverable:
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{task.expectedOutput}</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-3 sm:p-4 rounded-lg border border-purple-200">
                          <h4 className="font-medium text-purple-800 mb-2 flex items-center text-sm sm:text-base">
                            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            Analysis Demo Requirements:
                          </h4>
                          <p className="text-purple-700 text-xs sm:text-sm mb-2 leading-relaxed">{task.videoDemo}</p>
                          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-purple-600">
                            <span className="flex items-center">
                              <Monitor className="w-3 h-3 mr-1" />
                              Screenshots or Video
                            </span>
                            <span className="flex items-center">
                              <Upload className="w-3 h-3 mr-1" />
                              LinkedIn #CosmoDigitalServices
                            </span>
                            <span className="flex items-center">
                              <Github className="w-3 h-3 mr-1" />
                              GitHub required
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataScience;
